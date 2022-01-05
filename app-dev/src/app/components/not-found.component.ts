import { Component } from '@angular/core';

@Component({
    selector: 'not-found-app',
    template: `<div></div>`
})

export class NotFoundComponent {
    constructor() {
        window.location.replace(window.location.protocol + "//" + window.location.host);
    }
}