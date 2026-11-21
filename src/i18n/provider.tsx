'use client';

import React, { createContext, useContext, useEffect, useCallback, useMemo, useSyncExternalStore } from 'react';
import { LanguageCode, Direction, supportedLanguages, defaultLanguage, getLanguageInfo } from './config';
import { translations, TranslationDictionary } from './translations';

interface I18nContextType {
  language: LanguageCode;
  direction: Direction;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = 'vihani_preferred_language';

// In-memory language store synchronized with localStorage
let currentLanguage: LanguageCode = defaultLanguage;
const listeners = new Set<() => void>();

function getSnapshot(): LanguageCode {
  return currentLanguage;
}

function getServerSnapshot(): LanguageCode {
  return defaultLanguage;
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// Initialise memory cache from localStorage on client side
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored && supportedLanguages.some((l) => l.code === stored)) {
      currentLanguage = stored;
      document.documentElement.lang = stored;
      document.documentElement.dir = getLanguageInfo(stored).direction;
    }
  } catch {
    // localStorage might be unavailable
  }

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      if (supportedLanguages.some((l) => l.code === e.newValue)) {
        currentLanguage = e.newValue as LanguageCode;
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = getLanguageInfo(currentLanguage).direction;
        emitChange();
      }
    }
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const direction: Direction = useMemo(() => {
    return getLanguageInfo(language).direction;
  }, [language]);

  // Ensure DOM is synced
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = direction;
    }
  }, [language, direction]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    if (!supportedLanguages.some((l) => l.code === lang)) return;
    currentLanguage = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage may fail in restricted environments
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = getLanguageInfo(lang).direction;
    }
    emitChange();
  }, []);

  const t = useMemo(() => {
    return translations[language] || translations[defaultLanguage];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      direction,
      setLanguage,
      t,
    }),
    [language, direction, setLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      language: defaultLanguage,
      direction: 'ltr',
      setLanguage: () => {},
      t: translations[defaultLanguage],
    };
  }
  return context;
}
