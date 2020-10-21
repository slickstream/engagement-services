import { SosService } from '@slickstream/slickstream-os-common';

export const IDENTITY_SERVICE_NAME = '@slickstream/engagement/identity-service';

export interface SlickstreamIdentityService extends SosService {
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

export interface SignUpResult extends IdentityResult { }
export interface SignInResult extends IdentityResult { }
export interface SignOutResult extends IdentityResult { }

export interface IdentityResult {
  success: boolean;
  failure?: string;
  identity?: SlickstreamWebUserIdentity;
}

export interface IdentityListener {
  // When there is any change to the current user's identity
  onIdentityChange?(newState: SlickstreamWebUserIdentity): void;
}
