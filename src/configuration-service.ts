import { SosService } from '@slickstream/slickstream-os-common';

export const CONFIGURATION_SERVICE_NAME = '@slickstream/engagement/configuration-service';
export interface ConfigurationService extends SosService {
  name: '@slickstream/engagement/configuration-service';
  package: '@slickstream/engagement-services';
  definitions: 'esm/configuration-service.d.ts';
  version: '2.0.0';

  getConfiguration(name: string, defaultData?: any): Promise<ConfigurationInfo>;
}

export interface ConfigurationInfo {
  data?: any;
}