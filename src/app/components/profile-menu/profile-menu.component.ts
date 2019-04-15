import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  popoverController: PopoverController;

  constructor(
    public readonly auth: AuthService,
    navParams: NavParams
  ) {
    this.popoverController = navParams.get('popoverController');
  }

  ngOnInit() { }

  public async signOut() {
    this.auth.signOut().subscribe(
      () => this.popoverController.dismiss()
    );
  }

}
