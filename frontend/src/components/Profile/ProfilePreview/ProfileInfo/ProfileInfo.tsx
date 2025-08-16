import React from "react";
import cn from "classnames";
import typography from "@/ui/typography/typography.module.scss";
import { useTranslation } from "@/controllers/i18n/i18n.hooks/useTranslation";
import { Namespaces } from "@/controllers/i18n/i18n.typedefs";
import { Selectors } from "@/lib/selectors";
import { ProfileWorkHistory } from "@/components/Profile/ProfileWorkHistory";
import { IconIncognito } from "@/ui/icons/general/IconIncognito";
import { Features } from "@/controllers/features/features.constants";
import { useFeature } from "@/controllers/features/features.hooks/useFeature";
import { CompanyInfo } from "@/components/Profile/ProfileWorkHistory/ProfileWorkHistory";
import styles from "./ProfileInfo.module.scss";

interface ProfileInfoItem {
  title: string;
  content: string;
  isHidden?: boolean;
}

interface WorkPlaceContent {
  title: string;
  startDate?: string;
  endDate?: string | null;
  description?: string | null;
  duration: string;
  workPlaceDate: string;
  companyInfo: CompanyInfo;
}

interface ProfileWorkplace {
  companyName: string;
  content: WorkPlaceContent[];
}

interface Props {
  items: ProfileInfoItem[];
  workPlaces?: ProfileWorkplace[];
  preview?: boolean;
  areContactsHidden?: boolean;
  isOpened?: boolean;
}
export const ProfileInfo = React.memo<Props>((props) => {
  const { items, preview, workPlaces, areContactsHidden, isOpened } = props;
  const { t } = useTranslation([
    Namespaces.Profile,
    Namespaces.Common,
    Namespaces.Form,
  ]);
  const workExperience = items.find(
    (item) => item.title === t(`${Namespaces.Profile}:experience_label`)
  );
  const readyToWork = items.find(
    (item) => item.title === t(`${Namespaces.Profile}:ready_to_work`)
  );

  const isAdditionalInfo = Boolean(workPlaces?.length) || Boolean(readyToWork);

  const workPlacesFeature = useFeature(Features.WorkPlaces);

  return (
    <dl>
      {items.map((item) => {
        const isHidden =
          item.title === t(`${Namespaces.Profile}:experience_label`) ||
          item.title === t(`${Namespaces.Profile}:ready_to_work`);

        const withTags =
          item.title === t(`${Namespaces.Profile}:core_technical_skills`) ||
          item.title === t(`${Namespaces.Profile}:considering_roles`) ||
          item.title === t(`${Namespaces.Profile}:ready_to_work`);

        const isSecondaryTag =
          item.title !== t(`${Namespaces.Profile}:core_technical_skills`);

        if (item.isHidden) {
          return null;
        }

        if (!preview && isHidden) {
          return null;
        }

        if (!item.content.length) {
          return null;
        }

        return (
          <div
            className={cn(styles.item, {
              [Selectors.Active]: isOpened,
            })}
            key={item.title}
          >
            {withTags ? (
              <>
                <dt className={cn(styles.itemTitle, "mb-4")}>{item.title}</dt>
                <div className={styles.tagsContainer}>
                  {item.content.split(",").map((tag) => (
                    <div
                      className={cn(
                        typography.smallText,
                        "c-gray",
                        styles.tag,
                        typography.paragraph,
                        {
                          [styles.secondaryTag]: isSecondaryTag,
                        }
                      )}
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <dt className={cn(styles.itemTitle, "mb-4")}>{item.title}</dt>

                <dd
                  className={cn(
                    typography.smallText,
                    "c-gray",
                    typography.paragraph
                  )}
                >
                  {item.content}
                </dd>
              </>
            )}
          </div>
        );
      })}
      {workPlacesFeature.isEnabled() && preview && !!workPlaces?.length && (
        <>
          <div className={styles.divider} />
          <ProfileWorkHistory
            workPlaces={workPlaces}
            areContactsHidden={areContactsHidden}
          />
        </>
      )}
      {!preview && isAdditionalInfo ? (
        <>
          <section
            className={cn(styles.additionalInfo, {
              [Selectors.Active]: isOpened,
            })}
          >
            {readyToWork && (
              <>
                <dt className={cn(styles.itemTitle, "mb-4")}>
                  {readyToWork.title}
                </dt>
                <dd className={cn(styles.tagsContainer, "mb-16")}>
                  {readyToWork.content.split(",").map((tag) => (
                    <div
                      className={cn(
                        typography.smallText,
                        "c-gray",
                        styles.tag,
                        typography.paragraph,
                        styles.secondaryTag,
                        styles.locationTag
                      )}
                      key={tag}
                    >
                      {tag.toLowerCase()}
                    </div>
                  ))}
                </dd>
              </>
            )}
            {workPlacesFeature.isEnabled() && !!workPlaces?.length && (
              <div className={cn(styles.hintContainer, "mb-16")}>
                <IconIncognito />
                <span className={cn(typography.smallText, "ml-8")}>
                  {t(`${Namespaces.Profile}:candidates_hidden_info_hint`)}
                </span>
              </div>
            )}
            {workPlacesFeature.isEnabled() && !!workPlaces?.length && (
              <ProfileWorkHistory
                workPlaces={workPlaces}
                areContactsHidden={areContactsHidden}
              />
            )}
            {workExperience && !workPlaces?.length && (
              <>
                <dt className={styles.itemTitle}>{workExperience.title}</dt>

                <dd
                  className={cn(
                    typography.smallText,
                    "c-gray",
                    typography.paragraph
                  )}
                >
                  {workExperience.content}
                </dd>
              </>
            )}
          </section>
        </>
      ) : null}
    </dl>
  );
});
