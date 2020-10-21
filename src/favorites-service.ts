import { SosService } from '@slickstream/slickstream-os-common';

export const FAVORITES_SERVICE_NAME = '@slickstream/engagement/favorites-service';

export interface SlickstreamFavoritesService extends SosService {
  currentPage: FavoritesPageInfo;
  addListener(listener: FavoritesPageListener): void;
  removeListener(listener: FavoritesPageListener): void;
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
  onRemoteHearts?(from: string | null): void;
}

