import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { TechSkillsForm } from '@/components/Profile/CandidateProfileModule/TechSkillsForm';
import { CandidateProfileTabs } from '@/controllers/candidateProfile/candidateProfile.typedefs';
import { CandidateProfileFormActions } from '@/components/Profile/CandidateProfileModule/CandidateProfileFormActions';
import typography from '@/ui/typography/typography.module.scss';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { CandidateProfileStatus } from '@/controllers/graphql/generated';
import { useLatestCandidateProfile } from '@/controllers/candidateProfile/candidateProfile.hooks/useLatestCandidateProfile';
import { StepperModule } from '@/components/Profile/StepperModule';
import { useAuthUser } from '@/controllers/user/user.hooks/useAuthUser';
import { useModalState } from '@/controllers/modal/modal.hooks/useModalState';
import { CandidateProfilePreviewModule } from '@/components/Profile/ProfilePreview/CandidateProfilePreviewModule';
import { Features } from '@/controllers/features/features.constants';
import { useFeature } from '@/controllers/features/features.hooks/useFeature';
import styles from './CandidateProfileModule.module.scss';

const Modal = dynamic(
  async () => {
    const mod = await import('@/components/Base/Modal/Modal');

    return mod.Modal;
  },
);

const JobRequirementsForm = dynamic(
  async () => {
    const mod = await import('@/components/Profile/CandidateProfileModule/JobRequirementsForm');

    return mod.JobRequirementsForm;
  },
);

const WorkExperienceForm = dynamic(
  async () => {
    const mod = await import('@/components/Profile/CandidateProfileModule/WorkExperienceForm/WorkExperienceForm');

    return mod.WorkExperienceForm;
  },
);

const AboutCandidateForm = dynamic(
  async () => {
    const mod = await import('@/components/Profile/CandidateProfileModule/AboutCandidateForm');

    return mod.AboutCandidateForm;
  },
);

const ProfileContactsForm = dynamic(
  async () => {
    const mod = await import('@/components/Profile/ProfileContactsModule/ProfileContactsForm');

    return mod.ProfileContactsForm;
  },
);

const insertTitleMessage = (
  isFirstTimeFillingProfile: boolean,
  param?: string | null,
) => {
  switch (param) {
    case CandidateProfileStatus.Draft:
    case CandidateProfileStatus.OnReview:
    case CandidateProfileStatus.Active:
    case CandidateProfileStatus.Rejected:
    case CandidateProfileStatus.Inactive:
      if (isFirstTimeFillingProfile) {
        return `profile_candidate_title`;
      }

      return `edit_profile_title`;
    default:
      return `profile_candidate_title`;
  }
};

interface Props {
  tab?: CandidateProfileTabs;
}
export const CandidateProfileModule: FC<Props> = (props) => {
  const { tab } = props;
  const [profile] = useLatestCandidateProfile();
  const { isModalOpened, openModal, closeModal } = useModalState(false);
  const { t } = useTranslation([Namespaces.Profile]);

  const [user] = useAuthUser();

  const isFirstTimeFillingProfile = (
    user?.isFirstTimeFillingCandidateProfile ?? false
  );

  const workPlacesFeature = useFeature(Features.WorkPlaces);

  const Form = useMemo(() => {
    switch (tab) {
      case CandidateProfileTabs.JobExpectations: {
        return JobRequirementsForm;
      }

      case CandidateProfileTabs.Experience: {
        return workPlacesFeature.isEnabled()
          ? WorkExperienceForm
          : AboutCandidateForm;
      }

      case CandidateProfileTabs.Bio: {
        return AboutCandidateForm;
      }

      case CandidateProfileTabs.Contacts: {
        return ProfileContactsForm;
      }

      case CandidateProfileTabs.Speciality:
      default: {
        return TechSkillsForm;
      }
    }
  }, [tab, workPlacesFeature]);

  const step = useMemo(
    () => {
      switch (tab) {
        case CandidateProfileTabs.Speciality: {
          return 1;
        }

        case CandidateProfileTabs.JobExpectations: {
          return 2;
        }

        case CandidateProfileTabs.Experience: {
          return 3;
        }

        case CandidateProfileTabs.Bio: {
          return 4;
        }

        case CandidateProfileTabs.Contacts: {
          return 5;
        }

        default: {
          return 1;
        }
      }
    },
    [tab],
  );

  return (
    <>
      <div className="grid-container mt-80">
        <div className="grid-x grid-margin-x">
          <div className="cell large-6 large-offset-3">
            <h1 className={cn(typography.smallHeading, 'c-semidark-chocolate mb-16')}>
              {`${t(`${Namespaces.Profile}:${insertTitleMessage(isFirstTimeFillingProfile, profile?.status)}`)}`}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid-container mb-48">
        <div className="grid-x grid-margin-x">
          {isFirstTimeFillingProfile && (
            <div className="cell large-offset-3 large-5 mb-24">
              <p className={typography.text}>
                {`${t(`${Namespaces.Profile}:profile_candidate_message`)}`}
              </p>
            </div>
          )}

          <div className="cell large-offset-3 large-3 mb-40">
            <CandidateProfileFormActions openModal={openModal} />
          </div>

          <div className="cell large-offset-3 large-6">
            <StepperModule
              currentStep={step}
              isFirstTimeFillingProfile={isFirstTimeFillingProfile}
            />
          </div>
        </div>
      </div>
      <Form isFirstTimeFillingProfile={isFirstTimeFillingProfile} />
      <Modal
        className={styles.previewModal}
        isOpen={isModalOpened}
        closeModal={closeModal}
      >
        <p className={cn(
          typography.accentTitle,
          styles.modalTitle,
          'c-semidark-chocolate mb-16',
        )}
        >
          {t(`${Namespaces.Profile}:profile_preview`)}
        </p>
        <CandidateProfilePreviewModule isModalPreview />
      </Modal>
    </>
  );
};
