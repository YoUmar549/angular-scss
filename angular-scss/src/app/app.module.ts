import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import  { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilVueComponent } from './appareil-vue/appareil-vue.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilVueComponent }, //Pour accèder à cette route, l'authentification doit être true
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },//Pour accèder à cette route, l'authentification doit être true
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilVueComponent },
  { path: 'not-found', component: FourOhFourComponent }, //Route directe vers la page ERREUR 404
  { path: '**', redirectTo: 'not-found' } //Pour toutes les routes inconnues
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilVueComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
