import { SessionSettings } from '@slickstream/guild-apis/esm/embed-socket-api';
import { SosService } from '@slickstream/slickstream-os-common';
export declare const CONFIGURATION_SERVICE_NAME = "@slickstream/engagement/configuration-service";
export interface ConfigurationService extends SosService {
    getConfiguration(name: string, defaultData?: any): Promise<ConfigurationInfo>;
    getSessionSettings(): Promise<SessionSettings>;
    addListener(listener: ConfigurationListener): void;
    removeListener(listener: ConfigurationListener): void;
}
export interface ConfigurationInfo {
    data?: any;
}
export interface ConfigurationListener {
    onConfigurationUpdated(): void;
}
