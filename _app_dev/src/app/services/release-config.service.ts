export class ReleaseConfigService {

    private releasesConfigs: any = {
        //_scary_sheeps: {
        //    name: "Scary Sheeps",
        //    type: "Single",
        //    cover: "scary-sheeps.jpg",
        //    link_apple_music: "#",
        //    link_spotify: "#",
        //    link_yandex_music: "#",
        //    link_vk: "#",
        //    link_vk_music: "#",
        //    link_deezer: "#"
        //},
        //_alien: {
        //    name: "Alien",
        //    type: "Single",
        //    cover: "alien.jpg",
        //    link_apple_music: "#",
        //    link_spotify: "#",
        //    link_yandex_music: "#",
        //    link_vk: "#",
        //    link_vk_music: "#",
        //    link_deezer: "#"
        //},
        //_damned_street: {
        //    name: "Damned Street",
        //    type: "Single",
        //    cover: "damned-street.jpg",
        //    link_apple_music: "#",
        //    link_spotify: "#",
        //    link_yandex_music: "#",
        //    link_vk: "#",
        //    link_vk_music: "#",
        //    link_deezer: "#"
        //},
        _sharks: {
            name: "Sharks",
            type: "Single",
            cover: "sharks.jpg",
            link_apple_music: "https://music.apple.com/album/1601684303",
            link_spotify: "https://open.spotify.com/album/6pK1FnffDA8TvJdGxQEXyy",
            link_yandex_music: "https://music.yandex.ru/album/20184307",
            link_vk: "https://vk.com/music/album/-2000149003_14149003_b742899b8c6f0f8fe3",
            link_vk_music: "https://share.boom.ru/album/18587144/?share_auth=0212b175f6c4425143811a61e5aea0",
            link_deezer: "https://www.deezer.com/ru/album/282640942"
        },
        _to_be_alive: {
            name: "To Be Alive",
            type: "Single",
            cover: "to-be-alive.jpg",
            link_apple_music: "https://music.apple.com/album/1602727491",
            link_spotify: "https://open.spotify.com/album/6yi756iHkPkZDElmJ7Gcoy",
            link_yandex_music: "https://music.yandex.ru/album/20322393",
            link_vk: "https://vk.com/music/album/-2000222431_14222431_7d6c7b825ef33baa3d",
            link_vk_music: "https://share.boom.ru/album/18662859/?share_auth=02d969edad9510a6d8811a61d55000",
            link_deezer: "https://www.deezer.com/album/284279992"
        },
        _ghostly_party: {
            name: "Ghostly Party",
            type: "Single",
            cover: "ghostly-party.jpg",
            link_apple_music: "https://music.apple.com/album/1599389525",
            link_spotify: "https://open.spotify.com/album/6vQDlq8ZovaU1G4i4ljGqR",
            link_yandex_music: "https://music.yandex.ru/album/19908026",
            link_vk: "https://vk.com/music/album/-2000991139_13991139_3b09838231a92c0e13",
            link_vk_music: "https://share.boom.ru/album/18423602/?share_auth=02033ebbe4f7eb37c1811a61b9e6d0",
            link_deezer: "https://www.deezer.com/album/279195572"
        },
        _finish_for_the_new_start: {
            name: "Finish for the New Start",
            type: "Single",
            cover: "finish-for-the-new-start.jpg",
            link_apple_music: "https://music.apple.com/album/1595354398",
            link_spotify: "https://open.spotify.com/album/7J8qlHcqMz0cxhFpxRhZLa",
            link_yandex_music: "https://music.yandex.ru/album/19366327",
            link_vk: "https://vk.com/music/album/-2000672641_13672641_a459d46b285862a97b",
            link_vk_music: "https://share.boom.ru/album/18083917/?share_auth=02e1a14215108771af811a61b36b70",
            link_deezer: "https://www.deezer.com/ru/album/272689722"
        }
    };

    getReleaseConfig(releaseId: string): any {
        return this.releasesConfigs[releaseId];
    };

    getAllReleasesConfigs(): any {
        return this.releasesConfigs;
    };
}