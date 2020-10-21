import { SosService } from '@slickstream/slickstream-os-common';
export declare const CONFIGURATION_SERVICE_NAME = "@slickstream/engagement/configuration-service";
export interface ConfigurationService extends SosService {
    getConfiguration(name: string, defaultData?: any): Promise<ConfigurationInfo>;
}
export interface ConfigurationInfo {
    data?: any;
}
