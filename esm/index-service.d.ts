import { SosService } from '@slickstream/slickstream-os-common';
import { PageDescriptor } from './engagement-services-common';
import { PageDescriptorOptions, PageListing } from './engagement-services-types';
export declare const INDEX_SERVICE_NAME = "@slickstream/engagement/index-service";
export interface SlickstreamIndexService extends SosService {
    online: boolean;
    addListener(listener: IndexListener): void;
    removeListener(listener: IndexListener): void;
    getPage(url: string, options?: IndexListingOptions): Promise<PageDescriptor>;
    getCollection(type: IndexCollectionType, options?: IndexListingOptions): Promise<PageListing>;
}
export interface IndexListener {
    onlineStatusChanged(): void;
}
export declare type IndexCollectionType = 'recent' | 'popular';
export interface IndexListingOptions {
    countPerPage?: number;
    pageDescriptors?: PageDescriptorOptions;
}
