import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReleaseConfigService } from './../services/release-config.service';
import { CommonConfigService } from './../services/common-config.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit, OnDestroy {

    releasesConfig: any | undefined;
    commonConfig: any | undefined;
    yearNow: number | 0;

    constructor(private releaseConfigService: ReleaseConfigService, private commonConfigService: CommonConfigService) {
        this.releasesConfig = releaseConfigService.getAllReleasesConfigs();
        this.commonConfig = commonConfigService.getCommonConfig();
        this.yearNow = new Date().getFullYear();
    }

    escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    customReplaceAll(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}