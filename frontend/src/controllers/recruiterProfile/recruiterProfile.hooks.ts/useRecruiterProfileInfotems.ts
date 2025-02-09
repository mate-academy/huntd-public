import { useMemo } from "react";
import { useTranslation } from "@/controllers/i18n/i18n.hooks/useTranslation";
import { Namespaces } from "@/controllers/i18n/i18n.typedefs";
import { RecruiterProfile } from "@/controllers/graphql/generated";

interface ProfileInfoItem {
  title: string;
  content: string;
}
interface UseRecruiterProfileInfoItems {
  (profile?: RecruiterProfile | null): ProfileInfoItem[];
}

export const useRecruiterProfileInfoItems: UseRecruiterProfileInfoItems = (
  profile
) => {
  const { t } = useTranslation([Namespaces.Profile]);

  return useMemo(() => {
    if (!profile) {
      return [];
    }

    return [
      {
        title: t(`${Namespaces.Profile}:vacancies_list`),
        content: "Coming Soon ...",
      },
    ];
  }, [profile, t]);
};
