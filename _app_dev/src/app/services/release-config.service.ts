export class ReleaseConfigService {

    private releasesConfigs: any = {
        //_scary_sheeps: {
        //    name: "Scary Sheeps",
        //    type: "Single",
        //    year: "2022",
        //    cover: "scary-sheeps.jpg",
        //    lyrics: "scary-sheeps.txt",
        //    link_apple_music: "#",
        //    link_spotify: "#",
        //    link_yandex_music: "#",
        //    link_vk: "#",
        //    link_vk_music: "#",
        //    link_deezer: "#",
        //    link_youtube_music: "#",
        //    link_soundcloud: "#"
        //},
        //_alien: {
        //    name: "Alien",
        //    type: "Single",
        //    year: "2022",
        //    cover: "alien.jpg",
        //    lyrics: "alien.txt",
        //    link_apple_music: "#",
        //    link_spotify: "#",
        //    link_yandex_music: "#",
        //    link_vk: "#",
        //    link_vk_music: "#",
        //    link_deezer: "#",
        //    link_youtube_music: "#",
        //    link_soundcloud: "#"
        //},
        _damned_street: {
            name: "Damned Street",
            type: "Single",
            year: "2022",
            cover: "damned-street.jpg",
            lyrics: "damned-street.txt",
            link_apple_music: "https://music.apple.com/album/1601914067",
            link_spotify: "https://open.spotify.com/album/0kRGbhhYe1cjLxUWQTF5mI",
            link_yandex_music: "https://music.yandex.ru/album/20213844",
            link_vk: "https://vk.com/music/album/-2000165319_14165319_04386f25e5c30e903f",
            link_vk_music: "https://share.boom.ru/album/18603904/?share_auth=0275305ead3f7e0014811a6203acc0",
            link_deezer: "https://www.deezer.com/album/282963102",
            link_youtube_music: "https://music.youtube.com/playlist?list=OLAK5uy_n3cKF7oYVNJfeWT8hXCUZLc1ZpSnVmYP0",
            link_soundcloud: "https://soundcloud.com/terrifydrive/damned-street"
        },
        _sharks: {
            name: "Sharks",
            type: "Single",
            year: "2022",
            cover: "sharks.jpg",
            lyrics: "sharks.txt",
            link_apple_music: "https://music.apple.com/album/1601684303",
            link_spotify: "https://open.spotify.com/album/6pK1FnffDA8TvJdGxQEXyy",
            link_yandex_music: "https://music.yandex.ru/album/20184307",
            link_vk: "https://vk.com/music/album/-2000149003_14149003_b742899b8c6f0f8fe3",
            link_vk_music: "https://share.boom.ru/album/18587144/?share_auth=0212b175f6c4425143811a61e5aea0",
            link_deezer: "https://www.deezer.com/album/282640942",
            link_youtube_music: "https://music.youtube.com/playlist?list=OLAK5uy_na7qR8jnDqrNS-xmIolDGuJgF2doteyks",
            link_soundcloud: "https://soundcloud.com/terrifydrive/sharks"
        },
        _to_be_alive: {
            name: "To Be Alive",
            type: "Single",
            year: "2022",
            cover: "to-be-alive.jpg",
            lyrics: "to-be-alive.txt",
            link_apple_music: "https://music.apple.com/album/1602727491",
            link_spotify: "https://open.spotify.com/album/6yi756iHkPkZDElmJ7Gcoy",
            link_yandex_music: "https://music.yandex.ru/album/20322393",
            link_vk: "https://vk.com/music/album/-2000222431_14222431_7d6c7b825ef33baa3d",
            link_vk_music: "https://share.boom.ru/album/18662859/?share_auth=02d969edad9510a6d8811a61d55000",
            link_deezer: "https://www.deezer.com/album/284279992",
            link_youtube_music: "https://music.youtube.com/playlist?list=OLAK5uy_lbVvrOXuT3ycnW8jT5wEGQ54PA2eYWbKY",
            link_soundcloud: "https://soundcloud.com/terrifydrive/to-be-alive"
        },
        _ghostly_party: {
            name: "Ghostly Party",
            type: "Single",
            year: "2021",
            cover: "ghostly-party.jpg",
            lyrics: "ghostly-party.txt",
            link_apple_music: "https://music.apple.com/album/1599389525",
            link_spotify: "https://open.spotify.com/album/6vQDlq8ZovaU1G4i4ljGqR",
            link_yandex_music: "https://music.yandex.ru/album/19908026",
            link_vk: "https://vk.com/music/album/-2000991139_13991139_3b09838231a92c0e13",
            link_vk_music: "https://share.boom.ru/album/18423602/?share_auth=02033ebbe4f7eb37c1811a61b9e6d0",
            link_deezer: "https://www.deezer.com/album/279195572",
            link_youtube_music: "https://music.youtube.com/playlist?list=OLAK5uy_mt2GSrXaYPDhvkGW9qry1lHu5gbd_bYc4",
            link_soundcloud: "https://soundcloud.com/terrifydrive/ghostly-party"
        },
        _finish_for_the_new_start: {
            name: "Finish for the New Start",
            type: "Single",
            year: "2021",
            cover: "finish-for-the-new-start.jpg",
            lyrics: "finish-for-the-new-start.txt",
            link_apple_music: "https://music.apple.com/album/1595354398",
            link_spotify: "https://open.spotify.com/album/7J8qlHcqMz0cxhFpxRhZLa",
            link_yandex_music: "https://music.yandex.ru/album/19366327",
            link_vk: "https://vk.com/music/album/-2000672641_13672641_a459d46b285862a97b",
            link_vk_music: "https://share.boom.ru/album/18083917/?share_auth=02e1a14215108771af811a61b36b70",
            link_deezer: "https://www.deezer.com/album/272689722",
            link_youtube_music: "https://music.youtube.com/playlist?list=OLAK5uy_nsyHJMT95_yRNFevNYfkRarnq_E42LnS8",
            link_soundcloud: "https://soundcloud.com/terrifydrive/finish-for-the-new-start"
        }
    };

    getReleaseConfig(releaseId: string): any {
        return this.releasesConfigs[releaseId];
    };

    getAllReleasesConfigs(): any {
        return this.releasesConfigs;
    };
}