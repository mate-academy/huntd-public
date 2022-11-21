import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import {
  EmploymentLocationBaseFragment,
  useEmploymentLocationsQuery,
} from '@/controllers/graphql/generated';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { FormFieldProps } from '@/controllers/form/form.typedefs';
import { CheckboxGroup } from '@/components/FormElements/FormField/CheckboxGroup';
import { InputCheckboxUi } from '@/components/FormElements/FormInputs/InputCheckbox';
import { EmploymentLocations } from '@/controllers/candidateProfile/candidateProfile.constants';
import styles from './JobRequirementsForm.module.scss';

export const getEmploymentLocationsOptions = (
  employmentLocations: EmploymentLocationBaseFragment[],
) => employmentLocations.map((employmentLocation) => ({
  label: employmentLocation.slug,
  value: `${employmentLocation.id}`,
}));

interface FieldProps {
  employmentLocations?: string[] | null;
}

type Props = FormFieldProps<
  EmploymentLocationBaseFragment[],
  FieldProps
>

export const ProfileEmploymentLocationsInput: FC<Props> = (props) => {
  const { t } = useTranslation([Namespaces.Form]);
  const {
    initialValue, setValue, register,
  } = props;

  const employmentLocationsQueryResult = useEmploymentLocationsQuery();

  const employmentLocations = useMemo(
    () => employmentLocationsQueryResult.data?.employmentLocations ?? [],
    [employmentLocationsQueryResult],
  );

  const employmentLocationsOptions = useMemo(
    () => getEmploymentLocationsOptions(employmentLocations)
      .sort((a, b) => (+b.value) - (+a.value)),
    [employmentLocations],
  );

  const [
    selectedIds,
    setSelectedIds,
  ] = useState <Set <string>>(new Set());

  useEffect(() => {
    if (initialValue?.length) {
      setSelectedIds(new Set(initialValue?.map(
        (employmentLocation) => String(employmentLocation.id))));
    } else if (employmentLocationsOptions.length) {
      setSelectedIds(new Set(String(employmentLocationsOptions.find(
        (item) => item.label === EmploymentLocations.Remote,
      )?.value)));
    }
  }, [employmentLocationsOptions, initialValue]);

  useEffect(() => {
    setValue('employmentLocations', [...selectedIds]);
  }, [selectedIds, setValue]);

  const handleChange = (checked: boolean, label: string, value: string) => {
    if (selectedIds.has(value)) {
      setSelectedIds((prev) => new Set([...prev].filter((id) => id !== value)));
    } else {
      setSelectedIds((prev) => new Set([...prev, value]));
    }
  };

  return (
    <CheckboxGroup
      error={props.errors.employmentLocations}
      label={t(`${Namespaces.Form}:employment_type`)}
    >
      {employmentLocationsOptions.map(({ value, label }) => (
        <div
          key={value}
          className="mb-8"
        >
          <InputCheckboxUi
            onChange={(e) => handleChange(e.target.checked, label, value)}
            disabled={props.formDisabled}
            className={styles.checkboxLabel}
            label={label}
            name="employmentLocations"
            value={value}
            ref={register}
          />
        </div>
      ))}
    </CheckboxGroup>
  );
};
