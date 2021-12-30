import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ReleaseComponent } from './release.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'release/:releaseName', component: ReleaseComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, ReleaseComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }