import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { ReleaseConfigService } from './../services/release-config.service';
import { CommonConfigService } from './../services/common-config.service';


@Component({
    selector: 'release-app',
    templateUrl: './release.component.html',
    styleUrls: ['./../../css/list-page.css']
})

export class ReleaseComponent implements OnInit, OnDestroy {

    releaseId: string | undefined;
    releaseConfig: any | undefined;
    commonConfig: any | undefined;
    yearNow: number | 0;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private releaseConfigService: ReleaseConfigService, private commonConfigService: CommonConfigService) {
        this.releaseId = activateRoute.snapshot.params["releaseId"];
        if (this.releaseId)
            this.releaseId = "_" + this.customReplaceAll(this.releaseId.toLowerCase(), "-", "_");
        this.releaseConfig = releaseConfigService.getReleaseConfig(this.releaseId);
        this.commonConfig = commonConfigService.getCommonConfig();
        this.yearNow = new Date().getFullYear();
    }

    escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    customReplaceAll(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    }

    shareCurrentHref() {
        let nav = window.navigator as any;
        if (nav.share) {
            nav.share({ url: window.location.href })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing', error));
        } else {
            console.log('share not supported');
        }
    };

    ngOnInit() {
        if (!this.releaseConfig)
            window.location.replace(window.location.protocol + "//" + window.location.host);
    }

    ngOnDestroy() {
    }
}