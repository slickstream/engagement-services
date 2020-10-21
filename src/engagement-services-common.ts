export type PageImageOption = 'thumbnail' | 'original' | 'none';

export interface PageListing {
  pages: PageDescriptor[];
  nextPage?(): Promise<PageListing>;
}

export interface PageDescriptor {
  id: string;
  url: string;
  published?: number;
  title: string;
  description?: string;
  totalFavorites: number;
  imageUrl?: string;
  isFavorite?: boolean;
  favoriteCount?: number;
  pinned?: boolean;
}

export interface PageDescriptorOptions {
  includePublished?: boolean;
  includeDescription?: boolean;
  includeFavoriteInfo?: boolean;
  images?: PageImageOption;
  preferredImageAspectRatio?: number;  // width divided by height where 1 is square
}