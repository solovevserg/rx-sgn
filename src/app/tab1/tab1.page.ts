import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { PopoverController } from '@ionic/angular';
import { ProfileMenuComponent } from '../components/profile-menu/profile-menu.component';
import { User } from '../models/user';
import { BehaviorSubject, timer, interval } from 'rxjs';
import { mapTo, distinctUntilChanged, debounceTime, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public userModel: User = {
    name: '',
    birthplace: '',
    lastSignIn: new Date(),
    photoUrl: ''
  };

  public user$ = new BehaviorSubject(this.userModel);

  constructor(
    public readonly auth: AuthService,
    public popoverController: PopoverController
  ) { }

  public ngOnInit() {
    interval(3000).pipe(
      map(() => JSON.stringify(this.userModel)),
      distinctUntilChanged(),
      debounceTime(4000),
    ).subscribe(() => {
      console.log('Saved');
    });
  }

  public ngOnDestroy() {

  }

  async presentPopover(event: any) {
    return this.popoverController.create({
      component: ProfileMenuComponent,
      event,
      componentProps: { message: 'passed message', popoverController: this.popoverController }
    }).then(popover => popover.present());
  }

}
