export class ReleaseConfigService {

    private releasesConfigs: any = {
        _finish_for_the_new_start: {
            name: "Finish for the New Start",
            type: "Single",
            cover: "finish-for-the-new-start.jpg",
            link_apple_music: "https://music.apple.com/album/1595354398",
            link_spotify: "https://open.spotify.com/album/7J8qlHcqMz0cxhFpxRhZLa",
            link_yandex_music: "https://music.yandex.ru/album/19366327",
            link_vk: "https://vk.com/music/album/-2000672641_13672641_a459d46b285862a97b",
            link_vk_music: "https://share.boom.ru/album/18083917/?share_auth=02e1a14215108771af811a61b36b70",
            link_deezer:"https://www.deezer.com/ru/album/272689722"
        },
        _ghostly_party: {
            name: "Ghostly Party",
            type: "Single",
            cover: "ghostly-party.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
        _to_be_alive: {
            name: "To Be Alive",
            type: "Single",
            cover: "to-be-alive.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
        _sharks: {
            name: "Sharks",
            type: "Single",
            cover: "sharks.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
        _damned_street: {
            name: "Damned Street",
            type: "Single",
            cover: "damned-street.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
        _alien: {
            name: "Alien",
            type: "Single",
            cover: "alien.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
        _scary_sheeps: {
            name: "Scary Sheeps",
            type: "Single",
            cover: "scary-sheeps.jpg",
            link_apple_music: "#",
            link_spotify: "#",
            link_yandex_music: "#",
            link_vk: "#",
            link_vk_music: "#",
            link_deezer: "#"
        },
    };

    getReleaseConfig(releaseId: string): any {
        return this.releasesConfigs[releaseId];
    };
}