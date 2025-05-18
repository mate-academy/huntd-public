import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';
import { idX } from '@mate-academy/core';
import { makeResolver } from '@/core';
import {
  GetServiceUserUseCase,
  GetServiceUserUseCaseOptions,
  GetServiceUserUseCaseResult,
} from '@/modules/user/user.useCases/GetServiceUser.UseCase';
import { AuthErrors } from '@/auth/auth.constants';

export const isServiceUserAuthenticatedGuard = makeResolver<
    GetServiceUserUseCaseOptions,
    GetServiceUserUseCaseResult,
    GetServiceUserUseCaseOptions,
    unknown,
    typeof skip | ForbiddenError
    >(
      GetServiceUserUseCase,
      idX,
      [],
      (user) => (
        user
          ? skip
          : new ForbiddenError(AuthErrors.LoginNotAuthorized)
      ),
    );
