// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StudentAPI from './student/student';
import { Student } from './student/student';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * 学习档案的查询和更新接口
 */
export class StudyArchives extends APIResource {
  student: StudentAPI.Student = new StudentAPI.Student(this._client);

  /**
   * 获取学习档案列表
   *
   * @example
   * ```ts
   * const studyArchives = await client.v1.studyArchives.list();
   *
   * const content = await studyArchives.blob();
   * console.log(content);
   * ```
   */
  list(
    query: StudyArchiveListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/api/v1/study-archives', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StudyArchiveListParams {
  courseId?: number;

  page?: number;

  size?: number;

  studentId?: number;
}

StudyArchives.Student = Student;

export declare namespace StudyArchives {
  export { type StudyArchiveListParams as StudyArchiveListParams };

  export { Student as Student };
}
