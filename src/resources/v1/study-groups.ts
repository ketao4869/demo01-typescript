// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * 学习小组的增删改查接口
 */
export class StudyGroups extends APIResource {
  /**
   * 创建学习小组
   *
   * @example
   * ```ts
   * const studyGroup = await client.v1.studyGroups.create({
   *   courseId: 'courseId',
   *   groupName: 'groupName',
   * });
   *
   * const content = await studyGroup.blob();
   * console.log(content);
   * ```
   */
  create(body: StudyGroupCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/api/v1/study-groups', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取学习小组详情
   *
   * @example
   * ```ts
   * const studyGroup = await client.v1.studyGroups.retrieve(
   *   'id',
   * );
   *
   * const content = await studyGroup.blob();
   * console.log(content);
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/v1/study-groups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 更新学习小组
   *
   * @example
   * ```ts
   * const studyGroup = await client.v1.studyGroups.update('id');
   *
   * const content = await studyGroup.blob();
   * console.log(content);
   * ```
   */
  update(id: string, body: StudyGroupUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put(path`/api/v1/study-groups/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 获取学习小组列表
   *
   * @example
   * ```ts
   * const studyGroups = await client.v1.studyGroups.list();
   *
   * const content = await studyGroups.blob();
   * console.log(content);
   * ```
   */
  list(query: StudyGroupListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/study-groups', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * 删除学习小组
   *
   * @example
   * ```ts
   * const studyGroup = await client.v1.studyGroups.delete('id');
   *
   * const content = await studyGroup.blob();
   * console.log(content);
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/api/v1/study-groups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StudyGroupCreateParams {
  /**
   * 课程 ID
   */
  courseId: string;

  /**
   * 小组名称
   */
  groupName: string;

  /**
   * 最大人数
   */
  maxMembers?: number;
}

export interface StudyGroupUpdateParams {
  /**
   * 小组名称
   */
  groupName?: string;

  /**
   * 最大人数
   */
  maxMembers?: number;
}

export interface StudyGroupListParams {
  courseId?: number;

  page?: number;

  size?: number;

  status?: number;
}

export declare namespace StudyGroups {
  export {
    type StudyGroupCreateParams as StudyGroupCreateParams,
    type StudyGroupUpdateParams as StudyGroupUpdateParams,
    type StudyGroupListParams as StudyGroupListParams,
  };
}
