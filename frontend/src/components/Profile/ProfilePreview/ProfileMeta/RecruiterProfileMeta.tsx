import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { RecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.typedefs';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: MetaItem[]
}
export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => {
        if (item.name === RecruiterProfileMetaItems.City) {
          return (
            <li
              key={item.name}
              className={cn(styles.recruiterMetaItem, typography.smallHeading)}
            >
              <div className={styles.iconContainer}>
                <IconLocation />
              </div>
              {item.text}
            </li>
          );
        }

        return (
          <li
            className={cn(styles.recruiterMetaItem, typography.smallHeading)}
            key={item.name}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
});
