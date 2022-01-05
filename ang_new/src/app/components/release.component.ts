import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { ReleaseConfigService } from './../services/release-config.service';
import { CommonConfigService } from './../services/common-config.service';


@Component({
    selector: 'release-app',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css'],
})

export class ReleaseComponent implements OnInit, OnDestroy {

    releaseId: string | undefined;
    releaseConfig: any | undefined;
    commonConfig: any | undefined;
    yearNow: number | 0;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private releaseConfigService: ReleaseConfigService, private commonConfigService: CommonConfigService) {
        this.releaseId = activateRoute.snapshot.params["releaseId"];
        if (this.releaseId)
            this.releaseId = "_" + this.releaseId.toLowerCase().replace('-', '_');
        this.releaseConfig = releaseConfigService.getReleaseConfig(this.releaseId);
        this.commonConfig = commonConfigService.getCommonConfig();
        this.yearNow = new Date().getFullYear();
    }

    ngOnInit() {
        if (!this.releaseConfig)
            window.location.replace(window.location.protocol + "//" + window.location.host);
    }

    ngOnDestroy() {
    }
}