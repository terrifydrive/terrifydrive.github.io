export class CommonConfigService {

    private commonConfigs: any = {
        artistName: "Terrify Drive",
        artistStartYear: 2021
    };

    getCommonConfig(): any {
        return this.commonConfigs;
    };
}