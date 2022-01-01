export class ReleaseConfigService {

    private releasesConfigs: any = {
        _finish_for_the_new_start: {
            name: "Finish for the New Start",
            type: "Single",
            cover: "finish-for-the-new-start.jpg"
        },
        _ghostly_party: {
            name: "Ghostly Party",
            type: "Single",
            cover: "ghostly-party.jpg"
        },
        _to_be_alive: {
            name: "To Be Alive",
            type: "Single",
            cover: "to-be-alive.jpg"
        },
        _sharks: {
            name: "Sharks",
            type: "Single",
            cover: "sharks.jpg"
        },
        _damned_street: {
            name: "Damned Street",
            type: "Single",
            cover: "damned-street.jpg"
        },
        _alien: {
            name: "Alien",
            type: "Single",
            cover: "alien.jpg"
        },
        _scary_sheeps: {
            name: "Scary Sheeps",
            type: "Single",
            cover: "scary-sheeps.jpg"
        },
    };

    getReleaseConfig(releaseId: string): any {
        return this.releasesConfigs[releaseId];
    };
}