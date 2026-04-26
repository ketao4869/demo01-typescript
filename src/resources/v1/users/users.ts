// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from './roles';
import { RoleAssignParams, Roles } from './roles';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * 用户注册和信息管理接口
 */
export class Users extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * 根据用户 ID 查询用户详细信息
   *
   * @example
   * ```ts
   * const user = await client.v1.users.retrieve('id');
   *
   * const content = await user.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/users/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据用户 ID 更新用户信息
   *
   * @example
   * ```ts
   * const user = await client.v1.users.update('id');
   *
   * const content = await user.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/users/${id}`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询用户列表，page 从 1 开始，size 范围 1–100，支持按用户名、邮箱、姓名、手
   * 机号、状态搜索
   *
   * @example
   * ```ts
   * const users = await client.v1.users.list();
   *
   * const content = await users.blob();
   * console.log(content);
   * ```
   */
  list(query: UserListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/users', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 根据用户 ID 删除用户
   *
   * @example
   * ```ts
   * const user = await client.v1.users.delete('id');
   *
   * const content = await user.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/users/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 禁用指定用户，禁用后该用户无法登录
   *
   * @example
   * ```ts
   * const response = await client.v1.users.disable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/users/${id}/disable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 启用指定用户，启用后可正常登录
   *
   * @example
   * ```ts
   * const response = await client.v1.users.enable('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  enable(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/users/${id}/enable`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 用户注册接口，必须提供验证码
   *
   * @example
   * ```ts
   * const response = await client.v1.users.register({
   *   captchaCode: 'ABCD',
   *   captchaId: 'uuid-1234-5678',
   *   confirmPassword: 'password123',
   *   email: 'test@example.com',
   *   password: 'password123',
   *   username: 'testuser',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  register(body: UserRegisterParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/users/register', { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 管理员重置指定用户密码
   *
   * @example
   * ```ts
   * const response = await client.v1.users.resetPassword('id', {
   *   newPassword: 'newPassword123',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  resetPassword(id: string, body: UserResetPasswordParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/users/${id}/reset-password`, { body, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface User {
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

export interface UserUpdateParams {
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

export interface UserListParams {
  email?: string;

  page?: number;

  phone?: string;

  realName?: string;

  size?: number;

  status?: string;

  username?: string;
}

export interface UserRegisterParams {
  /**
   * 验证码
   */
  captchaCode: string;

  /**
   * 验证码 ID
   */
  captchaId: string;

  /**
   * 确认密码
   */
  confirmPassword: string;

  /**
   * 邮箱
   */
  email: string;

  /**
   * 密码
   */
  password: string;

  /**
   * 用户名
   */
  username: string;

  /**
   * 所属单位 ID
   */
  orgId?: string;

  /**
   * 手机号
   */
  phone?: string;

  /**
   * 角色 ID 列表
   */
  roleIds?: Array<number>;
}

export interface UserResetPasswordParams {
  /**
   * 新密码
   */
  newPassword: string;
}

Users.Roles = Roles;

export declare namespace Users {
  export {
    type User as User,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserRegisterParams as UserRegisterParams,
    type UserResetPasswordParams as UserResetPasswordParams
  };

  export {
    Roles as Roles,
    type RoleAssignParams as RoleAssignParams
  };
}
