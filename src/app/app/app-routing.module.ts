import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { UnauthGuard } from '../core/guards/unauth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './../auth/auth.module#AuthPageModule', canLoad: [UnauthGuard] },
  { path: '', loadChildren: './../tabs/tabs.module#TabsPageModule', canLoad: [AuthGuard] },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
