import { HttpInterceptorFn } from '@angular/common/http';

export const flowbiteInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
