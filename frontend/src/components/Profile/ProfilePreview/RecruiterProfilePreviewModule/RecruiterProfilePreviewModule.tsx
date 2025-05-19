import React from 'react';
import cn from 'classnames';
import ProfilePreview from '@/components/Profile/ProfilePreview/ProfilePreview.module.scss';
import typography from '@/ui/typography/typography.module.scss';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { ProfileInfo } from '@/components/Profile/ProfilePreview/ProfileInfo';
import { getFilledValue } from '@/lib/getFilledValue';
import { RecruiterProfilePreviewActions } from '@/components/Profile/ProfilePreview/RecruiterProfilePreviewModule/RecruiterProfileActions';
import { useLatestRecruiterProfile } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useLatestRecruiterProfile';
import { useRecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import { useRecruiterProfileInfoItems } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileInfotems';
import { Loader } from '@/ui/Loader';
import { RecruiterProfileMeta } from '@/components/Profile/ProfilePreview/ProfileMeta/RecruiterProfileMeta';
import { RecruiterProfileStatus } from '@/controllers/graphql/generated';
import styles from './RecruiterProfilePreviewModule.module.scss';
import { IconLocation } from '@/ui/icons/general/IconLocation';

export const RecruiterProfilePreviewModule = () => {
  const [profile, { loading, subscribeToMore }] = useLatestRecruiterProfile();

  const { t } = useTranslation([Namespaces.Common, Namespaces.Profile]);

  const profileMetaItems = useRecruiterProfileMetaItems(profile);
  const profileInfoItems = useRecruiterProfileInfoItems(profile);

  if (loading) {
    return <Loader active={loading} />;
  }

  if (!profile) {
    return null;
  }

  const { user } = profile;

  const isActive = profile.status === RecruiterProfileStatus.Active;

  return (
    <div>
      <div className={cn(
        ProfilePreview.profileHeader,
        { [ProfilePreview.profileHeaderActive]: isActive },
      )}
      >
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-8">
              <h1
                className={cn(typography.h1, styles.title, 'mb-16')}
              >
                {getFilledValue(profile.user?.computedName)}
              </h1>

              <div className={ProfilePreview.profileMeta}>

                <RecruiterProfileMeta items={profileMetaItems} />
                <IconLocation />
              </div>
            </div>
            <div className="cell large-3 align-self-middle">
              <RecruiterProfilePreviewActions
                profile={profile}
                subscribeToRecruiterUpdates={subscribeToMore}
              />
            </div>
          </div>
        </div>

      </div>
      <div className={ProfilePreview.profileContent}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-8">
              <ProfileInfo items={profileInfoItems} />
            </div>

            <div className="cell large-4 c-semidark-chocolate">
              <p className={cn(typography.overhead, 'c-gray mb-8')}>
                {t(`${Namespaces.Profile}:contacts_overhead`)}
              </p>

              <p className={cn(typography.smallHeading, 'mb-24')}>
                {user?.computedName}
              </p>

              <div className={cn(typography.smallCaption, 'mb-8')}>
                <a href={`mailto:${getFilledValue(user?.email)}`} className={typography.link}>
                  {getFilledValue(user?.email)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
