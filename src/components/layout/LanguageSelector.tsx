'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useI18n } from '@/i18n/provider';
import { supportedLanguages, LanguageCode } from '@/i18n/config';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  className?: string;
  isMobile?: boolean;
  onSelectLanguage?: () => void;
}

export default function LanguageSelector({
  className,
  isMobile = false,
  onSelectLanguage,
}: LanguageSelectorProps) {
  const { language, setLanguage, direction } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
    if (onSelectLanguage) {
      onSelectLanguage();
    }
  };

  // If mobile inline list, render a clean, touch-friendly section
  if (isMobile) {
    return (
      <div className={cn('w-full border-t border-warm-gray/60 pt-4 pb-2', className)}>
        <div className="flex items-center justify-between mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-steel">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-navy" />
            Language
          </span>
          <span className="text-[11px] font-mono uppercase bg-warm-gray-light text-navy px-1.5 py-0.5 rounded">
            {language.toUpperCase()}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {supportedLanguages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={cn(
                  'flex items-center justify-between px-3 py-2 text-xs rounded-md font-medium transition-all text-left cursor-pointer',
                  isSelected
                    ? 'bg-navy text-white font-semibold shadow-xs'
                    : 'bg-warm-gray/20 text-navy hover:bg-warm-gray/40'
                )}
                aria-pressed={isSelected}
              >
                <span>{lang.nativeName}</span>
                <span className={cn('text-[10px] uppercase ml-1 opacity-70 font-mono', isSelected ? 'text-white' : 'text-steel')}>
                  {lang.code}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop dropdown
  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium tracking-wide text-steel hover:text-navy hover:bg-warm-gray/30 transition-colors focus-visible:outline-2 focus-visible:outline-navy cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-navy" aria-hidden="true" />
        <span className="uppercase font-semibold tracking-wider text-[11px] text-navy">
          {language}
        </span>
        <ChevronDown
          className={cn('w-3 h-3 text-steel transition-transform duration-200', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className={cn(
            'absolute z-50 mt-1.5 w-44 rounded-lg bg-white p-1.5 shadow-lg border border-warm-gray focus:outline-hidden animate-in fade-in-50 zoom-in-95 duration-150',
            direction === 'rtl' ? 'left-0' : 'right-0'
          )}
        >
          {supportedLanguages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors cursor-pointer text-left',
                  isSelected
                    ? 'bg-navy text-white font-medium'
                    : 'text-foreground hover:bg-warm-gray-light hover:text-navy'
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn('font-medium text-xs', isSelected ? 'text-white' : 'text-navy')}>
                    {lang.nativeName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={cn('text-[10px] uppercase font-mono', isSelected ? 'text-white/80' : 'text-steel')}>
                    {lang.code}
                  </span>
                  {isSelected && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
