import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileCity.module.scss';
import { geoService } from './geoservice/geoService';

interface Props {
  title: string;
}

export const ProfileCity: React.FC<Props> = (props) => {
  const { title } = props;
  const [cityLink, setCityLink] = useState('');

  useEffect(() => {
    fetch(geoService.getSearchLink(title))
      .then((response) => response.json())
      .then((data) => {
        const city = data.geonames[0];

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

  const desciptionText = cityLink ? `Open ${title} city with google maps` : 'Recruiter location';

  return (
    <p
      className={classNames(styles.profileCity, {
        [styles.profileCity_linked]: cityLink,
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
