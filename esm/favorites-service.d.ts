import { SosService } from '@slickstream/slickstream-os-common';
export declare type FAVORITES_SERVICE_NAME = '@slickstream/engagement/favorites-service';
export interface SlickstreamFavoritesService extends SosService {
    name: FAVORITES_SERVICE_NAME;
    package: '@slickstream/engagement-services';
    definitions: 'esm/favorites-service.d.ts';
    version: '2.0.0';
    currentPage: FavoritesPageInfo;
    addListener(listener: FavoritesPageListener): void;
    removeListener(listener: FavoritesPageListener): void;
    getPage(url: string): Promise<FavoritesPageInfo | null>;
}
export interface FavoritesPageInfo {
    totalFavorites: number;
    isFavorite(): boolean;
    setFavorite(value: boolean): Promise<void>;
}
export interface FavoritesPageListener {
    onFavoriteStateChange?(newState: boolean): void;
    onFavoriteCountChange?(newValue: number): void;
    onHearts?(from: string | null): void;
}
