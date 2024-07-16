import { makeResolver } from '@/core';
import { GetAdminUserUseCase } from '@/modules/user/user.useCases/GetAdminUser.UseCase';

export const adminUserResolver = makeResolver(GetAdminUserUseCase);
