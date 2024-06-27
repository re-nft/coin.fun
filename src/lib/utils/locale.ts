const RE_FIRST_WORD_OF_LOCALE = /^([\w-]+).*/;

export function parseLocale(locale: unknown) {
  if (typeof locale !== 'string') return '';

  return locale.replace(RE_FIRST_WORD_OF_LOCALE, '$1');
}
