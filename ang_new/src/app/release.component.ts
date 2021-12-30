import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'release-app',
    template: `<h3>Release page ({{releaseName}})</h3>`
})

export class ReleaseComponent implements OnInit {

    releaseName: string | undefined;

    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params => this.releaseName = params['releaseName']);
    }

    ngOnInit() {
    }
}