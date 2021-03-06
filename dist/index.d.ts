interface IConfig {
    clientId: string;
    scope: string[];
    isTestEnvironment?: boolean;
    redirectUri?: string;
    continueTo?: string;
    responseType?: 'code' | 'token';
    locale?: string;
    state?: string;
}
interface IVaultOptions {
    backTo?: string;
    newTab?: boolean;
}
interface IMyAccountOptions {
    backTo?: string;
    newTab?: boolean;
    email?: string;
    authPage?: string;
    showAuthToggle?: boolean;
}
declare class LinkSDK {
    private domains;
    private params;
    private oauthParams;
    init(config: IConfig): void;
    authorize(options?: IMyAccountOptions): void;
    openVault(options?: IVaultOptions): void;
    openSettings(options?: IMyAccountOptions): void;
}
declare const _default: LinkSDK;
export default _default;
