import { PageDescriptorOptions, PageListing } from './engagement-services-common';
import { SosService } from '@slickstream/slickstream-os-common';

export const RECOMMENDATIONS_SERVICE_NAME = '@slickstream/engagement/recommendations-service';

export interface SlickstreamRecommendationsService extends SosService {
  getRecommendations(options?: GetRecommendationOptions): Promise<PageRecommendations>;
}

export interface PageRecommendations {
  pages: PageListing;
  nextPage?(): Promise<PageListing>;
}

export interface GetRecommendationOptions {
  countPerPage?: number;
  type?: PageRecommendationsType;
  categoryMatchPreferred?: boolean;
  pageDescriptors?: PageDescriptorOptions;
  usePinnedItem?: boolean;
}

export type PageRecommendationsType = 'auto' | 'related' | 'popular' | 'recent';
