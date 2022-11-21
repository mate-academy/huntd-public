import React, {
  useEffect, useState,
  useCallback, FC,
} from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { Router } from '@/controllers/i18n/i18n.client';
import { CandidateProfileRoutes } from '@/controllers/router/router.constants';
import {
  UpdateCandidateProfileMutationVariables,
} from '@/controllers/graphql/generated';
import { Tooltip } from '@/components/Base/Tooltip';
import { useLatestCandidateProfile } from '@/controllers/candidateProfile/candidateProfile.hooks/useLatestCandidateProfile';
import { useFlashMessage } from '@/controllers/flashMessage/flashMesage.hooks/useFlashMessage';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { processValidationErrors } from '@/controllers/form/form.utils/form.processValidationErrors';
import CandidateProfileModule
  from '@/components/Profile/CandidateProfileModule/CandidateProfileModule.module.scss';
import { FormField } from '@/components/FormElements/FormField';
import { InputNumber } from '@/components/FormElements/FormInputs/InputNumber';
import { analytics } from '@/controllers/analytics/analytics.client';
import { useUpdateCandidateProfile } from '@/controllers/candidateProfile/candidateProfile.hooks/useUpdateCandidateProfile';
import { ProfileFormActions } from '@/components/Profile/ProfileFormActions';
import { ProfileJobExperienceInput } from '@/components/Profile/CandidateProfileModule/JobRequirementsForm/ProfileJobExperienceInput';
import { SelectOption } from '@/components/FormElements/Select/Select.typedefs';
import { WithLoader } from '@/ui/Loader/WithLoader';
import { ProfileEnglishLevelInput } from '@/components/Profile/CandidateProfileModule/JobRequirementsForm/ProfileEnglishLevelInput';
import { ProfileEmploymentLocationsInput } from '@/components/Profile/CandidateProfileModule/JobRequirementsForm/ProfileEmploymentLocationsInput';
import { IconCheck } from '@/ui/icons/general/IconCheck';
import { SalaryMultipliers } from '@/components/Profile/ProfilesListModule/Filters/SalaryFilterInput';
import { Switcher } from '@/components/Switcher';
import { TooltipPositions } from '@/controllers/tooltip/tooltip.constants';
import { SalaryAmount, SalaryPeriod } from './jobRequirementsForm.constants';
import styles from './JobRequirementsForm.module.scss';

interface FormData extends Omit<UpdateCandidateProfileMutationVariables, 'salary'> {
  salary: string;
  jobExperience: SelectOption | null;
  employmentLocations: string[] | null;
  englishLevel: SelectOption | null;
}

interface Props {
  isFirstTimeFillingProfile: boolean;
}

export const JobRequirementsForm: FC<Props> = (props) => {
  const [salaryMultiplier, setSalaryMultiplier] = useState<
    SalaryMultipliers
  >(SalaryMultipliers.Annual);
  const formMethods = useForm<FormData>({
    mode: 'onBlur',
    shouldUnregister: false,
  });

  const { isFirstTimeFillingProfile } = props;

  const {
    errors, control, handleSubmit, setValue,
    setError, formState, reset, getValues,
  } = formMethods;

  const setAnnualMultiplier = useCallback(
    () => {
      setSalaryMultiplier(SalaryMultipliers.Annual);
    },
    [],
  );

  const setMonthlyMultiplier = useCallback(
    () => {
      setSalaryMultiplier(SalaryMultipliers.Monthly);
    },
    [],
  );

  const [updateProfile, { loading }] = useUpdateCandidateProfile();

  const [profile, { loading: profileLoading }] = useLatestCandidateProfile();

  const initialSalary = profile?.salary
    ? (Math.round(profile.salary * salaryMultiplier)).toString()
    : '';

  useEffect(() => {
    setValue('salary', initialSalary);
  }, [setValue, initialSalary]);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    setEdited(formState.isDirty);
  }, [formState.isDirty]);

  const [initialFormValues, setInitialFormValues] = useState<FormData>(
    {} as FormData,
  );

  const { t } = useTranslation([
    Namespaces.Validations,
    Namespaces.Form,
    Namespaces.Profile,
  ]);

  const flashMessage = useFlashMessage();

  useEffect(() => {
    setInitialFormValues(getValues());
  }, [getValues]);

  const discardChanges = () => {
    reset(initialFormValues);
  };

  const onSubmit = handleSubmit(async (data) => {
    const {
      salary, jobExperience,
      englishLevel, employmentLocations,
    } = data;

    const employmentLocationsIds = employmentLocations
      ? employmentLocations.map((el) => Number(el))
      : [];

    let preparedSalary = Number(salary);

    if (salaryMultiplier === SalaryMultipliers.Annual) {
      preparedSalary /= salaryMultiplier;
    }

    try {
      await updateProfile({
        variables: {
          salary: preparedSalary,
          jobExperienceId: Number(jobExperience?.value),
          englishLevelId: Number(englishLevel?.value),
          employmentLocationsIds,
        },
        async update() {
          analytics.setUserProperties({
            salary: Number(salary),
            englishLevel: englishLevel?.label,
            jobExperience: jobExperience?.label,
          });

          if (isFirstTimeFillingProfile) {
            analytics.sendEvent(
              analytics.events.candidateSignUpFlow.ExpectationsStep,
              {},
            );
            await Router.push(CandidateProfileRoutes.Experience);
          }
        },
      });
      reset({
        salary,
        jobExperience,
        englishLevel,
        employmentLocations,
      });
    } catch (error) {
      const validationErrors = processValidationErrors<
        UpdateCandidateProfileMutationVariables
        >(error, setError);

      if (!validationErrors) {
        await flashMessage.postMessage({
          variables: {
            type: flashMessage.messageTypes.Error,
            text: t(`${Namespaces.Validations}:${error.message.toLowerCase()}`),
            heading: t(`${Namespaces.Validations}:validation_message_title`),
          },
        });
      }
    }
  });

  return (
    <form
      className={CandidateProfileModule.form}
    >
      <WithLoader loading={profileLoading}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-5 large-offset-3">
              <div className={cn('mb-16', CandidateProfileModule.employmentTypesLabel)}>
                <IconCheck />
                <span>
                  {t(`${Namespaces.Profile}:only_full_time`)}
                </span>
              </div>

              <div className={cn(styles.infoIcon)}>
                <FormField
                  label={{
                    for: 'salary',
                    text: `${t(`${Namespaces.Form}:salary_label`)}, ${t(`${Namespaces.Common}:usd_sign`)}`,
                  }}
                  renderLabelIcon={() => (
                    <span className={styles.iconContainer}>
                      <Tooltip
                        text={t(`${Namespaces.Form}:tooltip_salary_recomendation`)}
                        position={TooltipPositions.Top}
                      />
                    </span>
                  )}
                  error={errors.salary}
                  disabled={loading}
                  className="mb-24"
                  renderInput={(renderProps) => (
                    <>
                      <Switcher
                        className='mb-8'
                        primaryClickHandler={setAnnualMultiplier}
                        secondaryClickHandler={setMonthlyMultiplier}
                        buttonsTexts={[
                          t(`${Namespaces.Form}:switcher_button_annual`),
                          t(`${Namespaces.Form}:switcher_button_monthly`),
                        ]}
                      />

                      <InputNumber
                        {...renderProps}
                        defaultValue={initialSalary}
                        name="salary"
                        control={control}
                        validation={{
                          required: {
                            value: true,
                            message: 'salary_is_required',
                          },
                          max: {
                            value: SalaryAmount.Max * salaryMultiplier,
                            message: (
                              salaryMultiplier === SalaryMultipliers.Annual
                                ? 'max_salary_annual'
                                : 'max_salary'
                            ),
                          },
                          min: {
                            value: SalaryAmount.Min * salaryMultiplier,
                            message: t(`${Namespaces.Validations}:min_salary`, {
                              amount: `${SalaryAmount.Min * salaryMultiplier}`,
                              period: (
                                salaryMultiplier === SalaryMultipliers.Annual
                                  ? SalaryPeriod.Year
                                  : SalaryPeriod.Month
                              ),
                            }),
                          },
                        }}
                        placeholder={t(`${Namespaces.Form}:salary_placeholder`)}
                      />
                    </>
                  )}
                />
              </div>

              <div className="mb-24">
                <ProfileJobExperienceInput
                  formDisabled={loading}
                  initialValue={profile?.jobExperience}
                  {...formMethods}
                />
              </div>

              <div className="mb-24">
                <ProfileEnglishLevelInput
                  formDisabled={loading}
                  initialValue={profile?.englishLevel}
                  {...formMethods}
                />
              </div>

              <div className="mb-16">
                <div className={CandidateProfileModule.employmentTypesCells}>
                  <div>
                    <ProfileEmploymentLocationsInput
                      formDisabled={loading}
                      initialValue={profile?.employmentLocations ?? []}
                      {...formMethods}
                    />
                  </div>
                </div>
              </div>
            </div>

            <ProfileFormActions
              handleSubmit={onSubmit}
              discardChanges={discardChanges}
              loading={loading}
              edited={edited}
              setEdited={setEdited}
            />
          </div>
        </div>
      </WithLoader>
    </form>
  );
};
