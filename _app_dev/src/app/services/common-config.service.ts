export class CommonConfigService {

    private commonConfigs: any = {
        artistName: "Terrify Drive",
        artistStartYear: 2021,
        email: "terrifydrive@gmail.com",
        pageVK: "https://vk.com/terrifydrive",
        pageYoutube: "https://www.youtube.com/channel/UCsIHFfuly9ZMk4y7xbc2k4A",
        pageFacebook: "https://www.facebook.com/terrifydrive",
        pageInstagram: "https://www.instagram.com/terrifydrive",
        serviceAppleMusic: "https://music.apple.com/ru/artist/terrify-drive/1595354173",
        serviceSpotify: "https://open.spotify.com/artist/4rMXPcSc4q7tXsmKbcnjUQ",
        serviceYandexMusic: "https://music.yandex.ru/artist/13814214",
        serviceVK: "https://vk.com/artist/terrifydrive",
        serviceVKMusic: "https://share.boom.ru/artist/19605358/?share_auth=02170711580013a692811a619b5c10",
        serviceDeezer: "https://www.deezer.com/artist/151373222"
    };

    getCommonConfig(): any {
        return this.commonConfigs;
    };
}