import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { map, first, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanLoad {

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ) {
    return true || this.auth.user$.pipe(
      first(),
      map(user => !!user),
      tap(this.navigate.bind(this)),
      map(user => !user),
    );
  }

  private navigate(isSignedIn: boolean) {
    if (isSignedIn) {
      this.router.navigateByUrl('/tabs/tab1');
    }
  }
}
