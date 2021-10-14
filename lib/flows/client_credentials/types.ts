/* eslint-disable camelcase */

/**
 * Access token request for the Client Credentials Grant flow.
 * @see {@link https://tools.ietf.org/html/rfc6749#section-4.4.2}
 * @see {isAccessTokenRequest} ts-auto-guard:type-guard
 */
export interface AccessTokenRequest {
  grant_type: 'client_credentials';
  scope?: string;
}
export { isAccessTokenRequest } from './types.guard';

export * from '../common/access_token_response';
