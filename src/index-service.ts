import { SosService } from '@slickstream/slickstream-os-common';
import { PageDescriptor } from './engagement-services-common';
import { PageDescriptorOptions, PageListing } from './engagement-services-types';

export const INDEX_SERVICE_NAME = '@slickstream/engagement/index-service';

export interface SlickstreamIndexService extends SosService {
  online: boolean;
  addListener(listener: IndexListener): void;
  removeListener(listener: IndexListener): void;
  getCollection(type: IndexCollectionType, options?: IndexListingOptions): Promise<PageListing>;
  getPage(url: string, options?: IndexListingOptions): Promise<PageDescriptor>;
}

export interface IndexListener {
  onlineStatusChanged(): void;
}

export type IndexCollectionType = 'recent' | 'popular';

export interface IndexListingOptions {
  countPerPage?: number;
  pageDescriptors?: PageDescriptorOptions;
}
