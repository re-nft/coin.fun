import { expect, it } from 'vitest';

import { parseLocale } from '$lib/utils/locale';

const locales = ['en-en', 'en;q=0.7', 'en', undefined, null, ''];

it('parse locales', () => {
  expect(locales.map((locale) => parseLocale(locale))).toMatchInlineSnapshot(`
    [
      "en-en",
      "en",
      "en",
      "",
      "",
      "",
    ]
  `);
});
