import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReleaseConfigService } from './../services/release-config.service';
import { CommonConfigService } from './../services/common-config.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./../../css/release-page.css']
})

export class HomeComponent implements OnInit, OnDestroy {

    releasesList: any | undefined;
    commonConfig: any | undefined;
    yearNow: number | 0;

    constructor(private releaseConfigService: ReleaseConfigService, private commonConfigService: CommonConfigService) {
        let releasesConfigs = releaseConfigService.getAllReleasesConfigs();
        this.releasesList = [];
        for (var prop in releasesConfigs)
            if (prop.startsWith("_"))
                this.releasesList.push({
                    href: "/release/" + this.customReplaceAll(prop.substring(1), "_", "-"),
                    item: releasesConfigs[prop]
                });
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