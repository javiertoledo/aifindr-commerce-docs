import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

const LOCALE_STORAGE_KEY = 'aifindr.docs.locale';

export default function LocaleSwitcher() {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  const getLabel = () =>
    currentLocale === 'es' ? 'Ver esta página en' : 'View this page in';

  const handleLocaleClick =
    (locale: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      if (typeof window === 'undefined') {
        return;
      }

      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);

      const search = window.location.search ?? '';
      const hash = window.location.hash ?? '';
      const target = `${alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      })}${search}${hash}`;

      window.location.href = target;
    };

  return (
    <div className={styles.localeSwitcher}>
      <span className={styles.label}>{getLabel()}</span>
      <div className={styles.options}>
        {locales.map((locale, index) => {
          const label = localeConfigs[locale]?.label ?? locale.toUpperCase();
          const isActive = locale === currentLocale;

          return (
            <React.Fragment key={locale}>
              {isActive ? (
                <span className={styles.active}>{label}</span>
              ) : (
                <a
                  href={alternatePageUtils.createUrl({
                    locale,
                    fullyQualified: false,
                  })}
                  onClick={handleLocaleClick(locale)}
                  className={styles.link}
                >
                  {label}
                </a>
              )}
              {index < locales.length - 1 ? (
                <span className={styles.separator}>·</span>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
