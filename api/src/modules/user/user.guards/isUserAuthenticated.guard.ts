import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';
import { idX } from '@mate-academy/core';
import { makeResolver } from '@/core';
import {
  GetAuthUserUseCase,
  GetAuthUserUseCaseOptions,
  GetAuthUserUseCaseResult,
} from '@/modules/user/user.useCases/GetAuthUser.UseCase';
import { AuthErrors } from '@/auth/auth.constants';

export const isUserAuthenticatedGuard = makeResolver<
    GetAuthUserUseCaseOptions,
    GetAuthUserUseCaseResult,
    GetAuthUserUseCaseOptions,
    unknown,
    typeof skip | ForbiddenError
    >(
      GetAuthUserUseCase,
      idX,
      [],
      (user) => (
        user
          ? skip
          : new ForbiddenError(AuthErrors.LoginNotAuthorized)
      ),
    );
