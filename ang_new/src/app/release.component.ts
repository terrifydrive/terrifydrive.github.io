import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router"

@Component({
    selector: 'release-app',
    template: `<h3>Release page ({{releaseName}})</h3>`
})

export class ReleaseComponent implements OnInit, OnDestroy {

    releaseName: string | undefined;
    releaseConfigs: any | undefined;

    constructor(private activateRoute: ActivatedRoute, private router: Router) {
        this.releaseName = activateRoute.snapshot.params["releaseName"];
        if (this.releaseName)
            this.releaseName = "_" + this.releaseName.toLowerCase().replace('-', '_');
    }

    ngOnInit() {
        this.releaseConfigs = {
            _finish_for_the_new_start: {
                name: "Finish for the New Start",
                type: "Single",
                cover: "finish_for_the_new_start.jpg"
            },
            _ghostly_party: {
                name: "Ghostly Party",
                type: "Single",
                cover: "ghostly_party.jpg"
            },
            _to_be_alive: {
                name: "To Be Alive",
                type: "Single",
                cover: "to_be_alive.jpg"
            },
            _sharks: {
                name: "Sharks",
                type: "Single",
                cover: "sharks.jpg"
            },
            _damned_street: {
                name: "Damned Street",
                type: "Single",
                cover: "damned_street.jpg"
            },
            _alien: {
                name: "Alien",
                type: "Single",
                cover: "alien.jpg"
            },
            _scary_sheeps: {
                name: "Scary Sheeps",
                type: "Single",
                cover: "scary_sheeps.jpg"
            },
        };

        if (!this.releaseConfigs[this.releaseName]) {
            console.log("no release!");
            this.router.navigate['../home'];
        }
        else {
            console.log(this.releaseConfigs[this.releaseName]);
        }
    }

    ngOnDestroy() {
    }
}