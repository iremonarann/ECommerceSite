import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('token');
  if(!token)
    return next(req);
  
    let authHeader = new HttpHeaders()
    .set('Authorization', token);

  let reqWithHeader = req.clone({
    headers: authHeader
  });

  return next(reqWithHeader);
};
