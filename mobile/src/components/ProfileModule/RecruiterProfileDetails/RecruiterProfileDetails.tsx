import React, { FC } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { profileDetailsStyles } from '@/components/ProfileModule/CandidateProfileDetails';
import { RecruiterProfile } from '@/controllers/graphql/generated';
import { typography } from '@/ui/typography/typography.module';
import { Namespaces } from '@/controllers/i18next/i18next.typedefs';

interface Props {
  profile: RecruiterProfile;
}

export const RecruiterProfileDetails: FC<Props> = (props) => {
  const { profile } = props;

  const { t } = useTranslation([
    Namespaces.Profile,
  ]);

  return (
    <ScrollView style={profileDetailsStyles.container}>
      <View style={{ height: 24 }} />
      <View style={profileDetailsStyles.item}>
        <Text style={[profileDetailsStyles.title, typography.text]}>
          {t(`${Namespaces.Profile}:recruiter_role_label`)}
        </Text>
        <Text style={[profileDetailsStyles.text, typography.text]}>
          {profile.position}
        </Text>
      </View>
      <View style={profileDetailsStyles.item}>
        <Text style={[profileDetailsStyles.title, typography.text]}>
          {t(`${Namespaces.Profile}:recruiter_company_label`)}
        </Text>
        <Text style={[profileDetailsStyles.text, typography.text]}>
          {profile.companyName}
        </Text>
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
};
