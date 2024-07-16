import { skip } from 'graphql-resolvers';
import { idX } from '@mate-academy/core';
import { makeResolver } from '@/core';
import {
  UpdateLastActionTimeUseCase,
  UpdateLastActionTimeUseCaseOptions,
  UpdateLastActionTimeUseCaseResult,
} from '@/modules/user/user.useCases/UpdateLastActionTime.UseCase';

export const updateLastActionTimeGuard = makeResolver<
    UpdateLastActionTimeUseCaseOptions,
    UpdateLastActionTimeUseCaseResult,
    UpdateLastActionTimeUseCaseOptions,
    unknown,
    typeof skip
    >(
      UpdateLastActionTimeUseCase,
      idX,
      [],
      () => skip,
    );
