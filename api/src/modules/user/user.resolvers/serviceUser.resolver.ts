import { makeResolver } from '@/core';
import { GetServiceUserUseCase } from '@/modules/user/user.useCases/GetServiceUser.UseCase';

export const serviceUserResolver = makeResolver(GetServiceUserUseCase);
