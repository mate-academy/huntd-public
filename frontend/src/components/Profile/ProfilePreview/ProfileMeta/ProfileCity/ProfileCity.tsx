import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileCity.module.scss';

interface Props {
  title: string;
}

const geoService = {
  url: 'https://secure.geonames.org/searchJSON?q=',
  user: 'yasik2255',
  params: '&maxRows=1&username=',

  getSearchLink(city: string): string {
    return `${this.url}${city}${this.params}${this.user}`;
  },

  getCityLink(city: string): string {
    return `https://www.google.com/maps?q=${city}`;
  },
};

export const ProfileCity: React.FC<Props> = (props) => {
  const { title } = props;
  const [cityLink, setCityLink] = useState('');

  useEffect(() => {
    fetch(geoService.getSearchLink(title))
      .then((response) => response.json())
      .then((data) => {
        const city = data.geonames[0];
        // eslint-disable-next-line padding-line-between-statements, no-console
        if (city) {
          setCityLink(geoService.getCityLink(city.name));
        } else {
          // eslint-disable-next-line no-console
          console.error(`Geonames service err: couldn't find ${title} city.`);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Geonames err:', error);
        setCityLink('');
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linkedProfileClass = 'profileCity--linked';
  const desciptionText = cityLink ? `Open ${title} city with google maps` : 'Recruiter location';

  return (
    <p
      className={classNames(styles.profileCity, {
        [styles[linkedProfileClass]]: cityLink,
      })}
      title={desciptionText}
    >
      <span className={styles.profileCity__icon}>
        <IconLocation />
      </span>
      {cityLink ? (
        <Link href={cityLink}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileCity__title}
          >
            {title}
          </a>
        </Link>
      ) : (
        <span
          className={styles.profileCity__title}
        >
          {title}
        </span>
      )}
    </p>
  );
};
