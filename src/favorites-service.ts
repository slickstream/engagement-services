import { SosService } from '@slickstream/slickstream-os-common';

export interface SlickstreamFavoritesService extends SosService {
  name: '@slickstream/engagement/favorites-service';
  package: '@slickstream/engagement-services';
  definitions: 'esm/favorites-service.d.ts';
  version: '2.0.0';

  currentPage: FavoritesPageInfo;
  addListener(listener: FavoritesPageListener): void;
  removeListener(listener: FavoritesPageListener): void;

  // To get favorite information about another page on the same site,
  // provide the full URL of that page.  If there is no favorite info
  // for that page, null will be returned.
  getPage(url: string): Promise<FavoritesPageInfo | null>;
}

export interface FavoritesPageInfo {
  totalFavorites: number;
  isFavorite(): boolean;
  setFavorite(value: boolean): Promise<void>;
}

export interface FavoritesPageListener {
  // When the current user sets or clears the favorite state of this page
  onFavoriteStateChange?(newState: boolean): void;
  // When this or other users change favorite state, resulting in a different total count
  onFavoriteCountChange?(newValue: number): void;
  // When another visitor adds hearts (without necessarily changing favorite state).  If available,
  // a location (e.g., 'Chicago') of that visitor
  onHearts?(from: string | null): void;
}

