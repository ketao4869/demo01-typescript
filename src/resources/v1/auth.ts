// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * 用户认证相关接口（v1，前端专用，必须验证码）
 */
export class Auth extends APIResource {
  /**
   * 提交邮箱申请重置密码，若该邮箱已注册将收到重置说明
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.forgotPassword({
   *   email: 'user@example.com',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  forgotPassword(body: AuthForgotPasswordParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/auth/forgot-password', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 提交手机号申请重置密码，若该手机号已注册将收到重置说明（如短信链接）
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.forgotPasswordByPhone(
   *   { phone: 'phone' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  forgotPasswordByPhone(body: AuthForgotPasswordByPhoneParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/auth/forgot-password-by-phone', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 用户登录接口，必须使用验证码，返回 JWT token
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.login({
   *   captchaId: 'uuid-123456',
   *   username: 'admin',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/auth/login', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 用户退出登录
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.logout();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  logout(options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/auth/logout', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 使用忘记密码流程中获取的 Token 设置新密码
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.resetPasswordByToken({
   *   token: 'reset-token-uuid-123',
   *   newPassword: 'newPassword456',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  resetPasswordByToken(body: AuthResetPasswordByTokenParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/auth/reset-password-by-token', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取当前用户的菜单权限树
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.retrieveMenu();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveMenu(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/auth/menu', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取当前用户的统计信息（登录次数、操作次数、创建时间、上次登录时间）
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.retrieveStats();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStats(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/auth/stats', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 获取当前登录用户的详细信息
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.retrieveUserinfo();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveUserinfo(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/auth/userinfo', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 当前用户修改密码，需提供原密码
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.updatePassword({
   *   newPassword: 'newPassword456',
   *   oldPassword: 'oldPassword123',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  updatePassword(body: AuthUpdatePasswordParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put('/api/v1/auth/password', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 当前用户修改个人信息（如姓名、头像、手机、邮箱等）
   *
   * @example
   * ```ts
   * const response = await client.v1.auth.updateProfile();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  updateProfile(body: AuthUpdateProfileParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put('/api/v1/auth/profile', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface AuthForgotPasswordParams {
  /**
   * 注册邮箱
   */
  email: string;
}

export interface AuthForgotPasswordByPhoneParams {
  /**
   * 手机号
   */
  phone: string;
}

export interface AuthLoginParams {
  /**
   * 验证码 ID
   */
  captchaId: string;

  /**
   * 用户名或邮箱
   */
  username: string;

  /**
   * 验证码
   */
  captchaCode?: string;

  /**
   * 密码
   */
  password?: string;
}

export interface AuthResetPasswordByTokenParams {
  /**
   * 重置密码令牌
   */
  token: string;

  /**
   * 新密码
   */
  newPassword: string;
}

export interface AuthUpdatePasswordParams {
  /**
   * 新密码
   */
  newPassword: string;

  /**
   * 原密码
   */
  oldPassword: string;
}

export interface AuthUpdateProfileParams {
  id?: number;

  avatar?: string;

  createdAt?: string;

  deleteFlag?: 'NOT_DELETED' | 'DELETED';

  email?: string;

  operationUnitId?: number;

  orgId?: number;

  password?: string;

  phone?: string;

  realName?: string;

  status?: 'DISABLED' | 'ENABLED';

  updatedAt?: string;

  username?: string;

  userType?: 'ADMIN' | 'MAINTENANCE' | 'TUTOR' | 'USER';
}

export declare namespace Auth {
  export {
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthForgotPasswordByPhoneParams as AuthForgotPasswordByPhoneParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordByTokenParams as AuthResetPasswordByTokenParams,
    type AuthUpdatePasswordParams as AuthUpdatePasswordParams,
    type AuthUpdateProfileParams as AuthUpdateProfileParams
  };
}
