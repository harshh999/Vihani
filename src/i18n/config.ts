export type LanguageCode = 'en' | 'hi' | 'es' | 'fr' | 'ar' | 'pt' | 'ru';
export type Direction = 'ltr' | 'rtl';

export interface LanguageInfo {
  name: string;
  code: LanguageCode;
  nativeName: string;
  direction: Direction;
  default?: boolean;
}

export const supportedLanguages: LanguageInfo[] = [
  {
    name: 'English',
    code: 'en',
    nativeName: 'English',
    direction: 'ltr',
    default: true,
  },
  {
    name: 'Hindi',
    code: 'hi',
    nativeName: 'हिन्दी',
    direction: 'ltr',
  },
  {
    name: 'Spanish',
    code: 'es',
    nativeName: 'Español',
    direction: 'ltr',
  },
  {
    name: 'French',
    code: 'fr',
    nativeName: 'Français',
    direction: 'ltr',
  },
  {
    name: 'Arabic',
    code: 'ar',
    nativeName: 'العربية',
    direction: 'rtl',
  },
  {
    name: 'Portuguese',
    code: 'pt',
    nativeName: 'Português',
    direction: 'ltr',
  },
  {
    name: 'Russian',
    code: 'ru',
    nativeName: 'Русский',
    direction: 'ltr',
  },
];

export const defaultLanguage: LanguageCode = 'en';

export function getLanguageInfo(code: string): LanguageInfo {
  return supportedLanguages.find((lang) => lang.code === code) || supportedLanguages[0];
}
