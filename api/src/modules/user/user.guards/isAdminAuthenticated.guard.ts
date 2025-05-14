import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';
import { idX } from '@mate-academy/core';
import { makeResolver } from '@/core';
import {
  GetAdminUserUseCase,
  GetAdminUserOptions,
  GetAdminUserResult,
} from '@/modules/user/user.useCases/GetAdminUser.UseCase';
import { AuthErrors } from '@/auth/auth.constants';

export const isAdminAuthenticatedGuard = makeResolver<
    GetAdminUserOptions,
    GetAdminUserResult,
    GetAdminUserOptions,
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
