import { SosService } from '@slickstream/slickstream-os-common';
export interface SlickstreamFavoritesService extends SosService {
    name: '@slickstream/engagement/favorites-service';
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
