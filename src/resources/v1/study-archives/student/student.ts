// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CourseAPI from './course';
import { Course, CourseRetrieveParams, CourseUpdateStudyTimeParams } from './course';

export class Student extends APIResource {
  course: CourseAPI.Course = new CourseAPI.Course(this._client);
}

Student.Course = Course;

export declare namespace Student {
  export {
    Course as Course,
    type CourseRetrieveParams as CourseRetrieveParams,
    type CourseUpdateStudyTimeParams as CourseUpdateStudyTimeParams,
  };
}
