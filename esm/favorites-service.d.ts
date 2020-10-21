import { SosService } from '@slickstream/slickstream-os-common';
export declare const FAVORITES_SERVICE_NAME = "@slickstream/engagement/favorites-service";
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
    onFavoriteStateChange?(newState: boolean): void;
    onFavoriteCountChange?(newValue: number): void;
    onRemoteHearts?(from: string | null): void;
}
