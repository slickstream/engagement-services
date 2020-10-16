import { SosService } from '@slickstream/slickstream-os-common';
import { PageDescriptor } from './engagement-services-common';
export interface SlickstreamGameService extends SosService {
    name: '@slickstream/engagement/game-service';
    package: '@slickstream/engagement-services';
    definitions: 'esm/game-service.d.ts';
    version: '2.0.0';
    getGame(slotId: string): Promise<SlickstreamGameInfo>;
    updateGame(id: string, data: any, status: GameStatus): Promise<void>;
}
export interface SlickstreamGameInfo {
    id: string;
    type: string;
    srcUrl: string;
    manifest: any;
    data: any;
    status: GameStatus;
    pageInfo?: PageDescriptor;
}
export declare type GameStatus = 'unstarted' | 'in-progress' | 'complete';
