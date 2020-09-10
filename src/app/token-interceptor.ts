import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth/shared/auth.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginResponse } from './auth/login/login-response.payload';

@Injectable( {
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwtToken = this.authService.getJWTToken();

        if (jwtToken && !request.url.includes('authn')) {
            request = this.addToken(request, jwtToken);
        }
        return next.handle(request).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 403) {
                return this.handleAuthErrors(request, next);
            } else {
                return throwError(error);
            }
        }));
    }

    private handleAuthErrors(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((refreshTokenResponse: LoginResponse) => {
                    this.isTokenRefreshing = false;
                    this.refreshTokenSubject.next(
                        refreshTokenResponse.authenticationToken
                    );

                    return next.handle(this.addToken(request, refreshTokenResponse.authenticationToken));
                })
            )
        }
    }
    addToken(request: HttpRequest<any>, jwtToken: any) {
        return request.clone({
            setHeaders: {
              'Content-Type' : 'application/json',
              'Authorization': 'Bearer ' + jwtToken,
            },
          });
    }
}