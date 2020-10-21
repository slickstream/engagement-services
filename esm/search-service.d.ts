import { SosService } from '@slickstream/slickstream-os-common';
import { PageDescriptorOptions, PageListing } from './engagement-services-common';
export declare const SEARCH_SERVICE_NAME = "@slickstream/engagement/search-service";
export interface SlickstreamSearchService extends SosService {
    online: boolean;
    addListener(listener: SearchListener): void;
    removeListener(listener: SearchListener): void;
    search(query: string, context?: SearchContext, options?: SearchOptions): Promise<SearchResults>;
}
export interface SearchContext {
    id: string;
    name: string;
    imageUrl?: string;
}
export interface SearchOptions {
    countPerPage?: number;
    topOnly?: boolean;
    pageDescriptors?: PageDescriptorOptions;
}
export interface SearchResults {
    recommendedContexts?: SearchContext[];
    pages: SearchPageListing;
    nextPage?(): Promise<SearchPageListing>;
}
export interface SearchPageListing extends PageListing {
    isTopResults: boolean;
}
export interface SearchListener {
    onOnlineStatusChange?(newState: boolean): void;
}
