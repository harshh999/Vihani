import { en, TranslationDictionary } from './en';
import { hi } from './hi';
import { es } from './es';
import { fr } from './fr';
import { ar } from './ar';
import { pt } from './pt';
import { ru } from './ru';
import { LanguageCode } from '../config';

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en,
  hi,
  es,
  fr,
  ar,
  pt,
  ru,
};

export type { TranslationDictionary };
