import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';

const LOCALE_STORAGE_KEY = 'aifindr.docs.locale';

function normalizeLocales(values: string[] | undefined) {
  return (values ?? [])
    .filter(Boolean)
    .map((value) => value.toLowerCase());
}

export default function Root({children}: {children: React.ReactNode}) {
  const {
    i18n: {currentLocale, locales, defaultLocale},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storage = window.localStorage;
    const storedLocale = storage.getItem(LOCALE_STORAGE_KEY);
    const isSupportedLocale = (value: string | null): value is string =>
      Boolean(value && locales.includes(value));

    const redirectTo = (nextLocale: string) => {
      const search = window.location.search ?? '';
      const hash = window.location.hash ?? '';
      const target = `${alternatePageUtils.createUrl({
        locale: nextLocale,
        fullyQualified: false,
      })}${search}${hash}`;

      window.location.replace(target);
    };

    if (isSupportedLocale(storedLocale) && storedLocale !== currentLocale) {
      redirectTo(storedLocale);
      return;
    }

    if (storedLocale) {
      return;
    }

    const browserLocales = normalizeLocales(
      Array.isArray(window.navigator.languages)
        ? window.navigator.languages
        : [window.navigator.language],
    );

    const matchedLocale =
      locales.find((locale) =>
        browserLocales.some(
          (candidate) =>
            candidate === locale.toLowerCase() ||
            candidate.startsWith(`${locale.toLowerCase()}-`),
        ),
      ) ?? defaultLocale;

    storage.setItem(LOCALE_STORAGE_KEY, matchedLocale);

    if (matchedLocale !== currentLocale) {
      redirectTo(matchedLocale);
    }
  }, [alternatePageUtils, currentLocale, defaultLocale, locales]);

  return <>{children}</>;
}
