import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap, first, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ) {
    return this.auth.user$.pipe(
      first(),
      map(user => !!user),
      tap(this.navigate.bind(this))
    );
  }

  private navigate(isSignedIn: boolean) {
    if (!isSignedIn) {
      console.log(`this.router.navigateByUrl('/auth');`);
      this.router.navigateByUrl('/auth');
    }
  }

}
