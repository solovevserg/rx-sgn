import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer, of } from 'rxjs';
import { mapTo, tap, catchError, multicast, share } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _user$ = new BehaviorSubject<User | null>(null);

  public get user$() {
    return this._user$ as Observable<User | null>;
  }

  constructor(
    private readonly router: Router
  ) { }

  public signInEmail(email: string, password: string) {
    const user = {
      name: 'Sergei Solovev',
      birthplace: 'Moscow',
      lastSignIn: new Date(),
      photoUrl: 'https://images.unsplash.com/photo-1518288842489-ca800cf5d3f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    } as User;

    // TODO: Use HTTP Cliet instead.
    return timer(37).pipe(
      mapTo(user),
      tap(u => this._user$.next(u)),
      // multicast(this._user$),
      tap(() => this.router.navigateByUrl('/tabs/tab1')),
      catchError(() => of(null)),
    ).subscribe();
  }

  public signOut() {
    // Backend sign out logic
    return timer(37).pipe(
      tap(() => this._user$.next(null)),
      tap(() => this.router.navigateByUrl('/auth')),
      mapTo(true)
    );
  }
}
