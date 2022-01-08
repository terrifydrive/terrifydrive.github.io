import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ReleaseComponent } from './components/release.component';
import { NotFoundComponent } from './components/not-found.component';

import { CommonConfigService } from './services/common-config.service';
import { ReleaseConfigService } from './services/release-config.service';


//if (window.location.hash) // Addresses with '/#xxxx' (releases)
//    if (window.location.hash.length >= 2)
//        console.log("Release!");

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'release/:releaseId', component: ReleaseComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ReleaseComponent
    ],
    providers: [
        ReleaseConfigService,
        CommonConfigService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }