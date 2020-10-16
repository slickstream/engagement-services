import { SosService } from '@slickstream/slickstream-os-common';
export declare type IDENTITY_SERVICE_NAME = '@slickstream/engagement/identity-service';
export interface SlickstreamIdentityService extends SosService {
    name: IDENTITY_SERVICE_NAME;
    package: '@slickstream/engagement-services';
    definitions: 'esm/identity-service.d.ts';
    version: '2.0.0';
    identity: SlickstreamWebUserIdentity;
    addListener(listener: IdentityListener): void;
    removeListener(listener: IdentityListener): void;
    signUp(email: string, password: string, name: string | null, allowContact: boolean): Promise<SignUpResult>;
    signIn(email: string, password: string): Promise<SignInResult>;
    signOut(): Promise<SignOutResult>;
}
export interface SlickstreamWebUserIdentity {
    id: string;
    created: number;
    email?: string;
    name?: string;
    contactAllowed?: boolean;
}
export interface SignUpResult extends IdentityResult {
}
export interface SignInResult extends IdentityResult {
}
export interface SignOutResult extends IdentityResult {
}
export interface IdentityResult {
    success: boolean;
    failure?: string;
    identity?: SlickstreamWebUserIdentity;
}
export interface IdentityListener {
    onIdentityChange?(newState: SlickstreamWebUserIdentity): void;
}
