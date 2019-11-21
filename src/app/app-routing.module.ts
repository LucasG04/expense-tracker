import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuardService]},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'edit-invoice', loadChildren: './edit-invoice/edit-invoice.module#EditInvoicePageModule', canActivate: [AuthGuardService]},
  { path: 'create-invoice', loadChildren: './create-invoice/create-invoice.module#CreateInvoicePageModule', canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
