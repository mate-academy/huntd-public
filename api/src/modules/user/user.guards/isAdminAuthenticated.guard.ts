import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';
import { idX } from '@mate-academy/core';
import { makeResolver } from '@/core';
import {
  GetAdminUserUseCase,
  GetAdminUserUseCaseOptions,
  GetAdminUserUseCaseResult,
} from '@/modules/user/user.useCases/GetAdminUser.useCase';
import { AuthErrors } from '@/auth/auth.constants';

export const isAdminAuthenticatedGuard = makeResolver<
    GetAdminUserUseCaseOptions,
    GetAdminUserUseCaseResult,
    GetAdminUserUseCaseOptions,
    unknown,
    typeof skip | ForbiddenError
    >(
      GetAdminUserUseCase,
      idX,
      [],
      (user) => (
        user
          ? skip
          : new ForbiddenError(AuthErrors.LoginNotAuthorized)
      ),
    );
