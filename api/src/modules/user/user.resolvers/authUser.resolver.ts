import { GetAuthUserUseCase } from '@/modules/user/user.useCases/GetAuthUser.UseCase';
import { makeResolver } from '@/core';

export const authUserResolver = makeResolver(GetAuthUserUseCase);
