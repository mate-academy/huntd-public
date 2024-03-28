import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';
import styles from '../ProfileMeta.module.scss';

interface Props {
  item: MetaItem,
  Icon: FCIcon | null
}

export const ProfileMetaItem = React.memo<Props>(({ item, Icon }) => (
  <li
    className={cn(styles.recruiterMetaItem, typography.smallHeading)}
  >
    {Icon && <Icon />}
    {item.text}
  </li>
));
