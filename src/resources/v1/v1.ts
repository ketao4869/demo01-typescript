// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthForgotPasswordByPhoneParams, AuthForgotPasswordParams, AuthLoginParams, AuthResetPasswordByTokenParams, AuthUpdatePasswordParams, AuthUpdateProfileParams } from './auth';
import * as BannersAPI from './banners';
import { BannerCreate, BannerCreateParams, BannerUpdateParams, Banners } from './banners';
import * as ComplaintsAPI from './complaints';
import { ComplaintCreateParams, ComplaintListParams, ComplaintUpdateProcessParams, Complaints } from './complaints';
import * as DeviceAlertsAPI from './device-alerts';
import { DeviceAlertCreateParams, DeviceAlertHandleParams, DeviceAlertListParams, DeviceAlertStatisticsParams, DeviceAlerts } from './device-alerts';
import * as DevicesAPI from './devices';
import { DeviceCreateParams, DeviceListParams, DeviceUpdateParams, Devices } from './devices';
import * as EnrollmentsAPI from './enrollments';
import { EnrollmentAuditParams, EnrollmentCreateParams, EnrollmentListParams, Enrollments } from './enrollments';
import * as ExamRecordsAPI from './exam-records';
import { ExamRecordCompleteParams, ExamRecordCreateParams, ExamRecordListParams, ExamRecordStatisticsParams, ExamRecords } from './exam-records';
import * as FaqsAPI from './faqs';
import { FaqCreate, FaqCreateParams, FaqListParams, FaqUpdateParams, Faqs } from './faqs';
import * as FeedbacksAPI from './feedbacks';
import { FeedbackCreateParams, FeedbackListParams, FeedbackProcessParams, Feedbacks } from './feedbacks';
import * as FixedTeachingPointsAPI from './fixed-teaching-points';
import { FixedTeachingPointCreateParams, FixedTeachingPointListParams, FixedTeachingPointUpdateParams, FixedTeachingPoints } from './fixed-teaching-points';
import * as MaintenanceInspectionsAPI from './maintenance-inspections';
import { MaintenanceInspectionCompleteParams, MaintenanceInspectionCreateParams, MaintenanceInspectionListParams, MaintenanceInspectionStatisticsParams, MaintenanceInspections } from './maintenance-inspections';
import * as MaintenanceOrdersAPI from './maintenance-orders';
import { MaintenanceOrderAssignParams, MaintenanceOrderCloseParams, MaintenanceOrderCreateParams, MaintenanceOrderEscalateParams, MaintenanceOrderListParams, MaintenanceOrderStatisticsParams, MaintenanceOrders } from './maintenance-orders';
import * as NavigationsAPI from './navigations';
import { NavigationCreate, NavigationCreateParams, NavigationListParams, NavigationUpdateParams, Navigations } from './navigations';
import * as NewsAPI from './news';
import { News, NewsCreate, NewsCreateParams, NewsListParams, NewsUpdateParams } from './news';
import * as NoticesAPI from './notices';
import { NoticeCreate, NoticeCreateParams, NoticeListParams, NoticeUpdateParams, Notices } from './notices';
import * as OperationLogsAPI from './operation-logs';
import { OperationLogDeleteBatchParams, OperationLogRetrieveOperationLogsParams, OperationLogs } from './operation-logs';
import * as PodReservationsAPI from './pod-reservations';
import { PodReservationCreateParams, PodReservationListParams, PodReservations } from './pod-reservations';
import * as PracticeCertificatesAPI from './practice-certificates';
import { PracticeCertificatePracticeCertificatesParams, PracticeCertificateRetrievePracticeCertificatesParams, PracticeCertificates } from './practice-certificates';
import * as PracticeRecordsAPI from './practice-records';
import { PracticeRecordPracticeRecordsParams, PracticeRecordRetrievePracticeRecordsParams, PracticeRecordRetrieveStatisticsParams, PracticeRecords } from './practice-records';
import * as StatisticsAPI from './statistics';
import { Statistics } from './statistics';
import * as StudentsAPI from './students';
import { StudentCreateParams, StudentListParams, StudentUpdateParams, Students } from './students';
import * as StudyGroupsAPI from './study-groups';
import { StudyGroupCreateParams, StudyGroupListParams, StudyGroupUpdateParams, StudyGroups } from './study-groups';
import * as CoursesAPI from './courses/courses';
import { CourseCreateParams, CourseListParams, CourseUpdateParams, Courses } from './courses/courses';
import * as DeviceHealthAPI from './device-health/device-health';
import { DeviceHealth, DeviceHealthRetrieveStatisticsParams } from './device-health/device-health';
import * as HrOrganizationsAPI from './hr-organizations/hr-organizations';
import { HrOrganizations } from './hr-organizations/hr-organizations';
import * as MonitorDashboardAPI from './monitor-dashboard/monitor-dashboard';
import { MonitorDashboard } from './monitor-dashboard/monitor-dashboard';
import * as OperationUnitsAPI from './operation-units/operation-units';
import { OperationUnitCreateParams, OperationUnitListParams, OperationUnitLockParams, OperationUnitUpdateParams, OperationUnits } from './operation-units/operation-units';
import * as PodsAPI from './pods/pods';
import { PodCreateParams, PodListParams, PodUpdateParams, Pods } from './pods/pods';
import * as RolesAPI from './roles/roles';
import { RoleCreateParams, RoleListParams, RoleUpdateParams, Roles } from './roles/roles';
import * as StudyArchivesAPI from './study-archives/study-archives';
import { StudyArchiveListParams, StudyArchives } from './study-archives/study-archives';
import * as TutorsAPI from './tutors/tutors';
import { TutorCreateParams, TutorListParams, TutorUpdateParams, Tutors } from './tutors/tutors';
import * as UsersAPI from './users/users';
import { User, UserListParams, UserRegisterParams, UserResetPasswordParams, UserUpdateParams, Users } from './users/users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  tutors: TutorsAPI.Tutors = new TutorsAPI.Tutors(this._client);
  studyGroups: StudyGroupsAPI.StudyGroups = new StudyGroupsAPI.StudyGroups(this._client);
  studyArchives: StudyArchivesAPI.StudyArchives = new StudyArchivesAPI.StudyArchives(this._client);
  students: StudentsAPI.Students = new StudentsAPI.Students(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  pods: PodsAPI.Pods = new PodsAPI.Pods(this._client);
  podReservations: PodReservationsAPI.PodReservations = new PodReservationsAPI.PodReservations(this._client);
  operationUnits: OperationUnitsAPI.OperationUnits = new OperationUnitsAPI.OperationUnits(this._client);
  notices: NoticesAPI.Notices = new NoticesAPI.Notices(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
  navigations: NavigationsAPI.Navigations = new NavigationsAPI.Navigations(this._client);
  maintenanceOrders: MaintenanceOrdersAPI.MaintenanceOrders = new MaintenanceOrdersAPI.MaintenanceOrders(this._client);
  maintenanceInspections: MaintenanceInspectionsAPI.MaintenanceInspections = new MaintenanceInspectionsAPI.MaintenanceInspections(this._client);
  fixedTeachingPoints: FixedTeachingPointsAPI.FixedTeachingPoints = new FixedTeachingPointsAPI.FixedTeachingPoints(this._client);
  feedbacks: FeedbacksAPI.Feedbacks = new FeedbacksAPI.Feedbacks(this._client);
  faqs: FaqsAPI.Faqs = new FaqsAPI.Faqs(this._client);
  examRecords: ExamRecordsAPI.ExamRecords = new ExamRecordsAPI.ExamRecords(this._client);
  enrollments: EnrollmentsAPI.Enrollments = new EnrollmentsAPI.Enrollments(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  deviceAlerts: DeviceAlertsAPI.DeviceAlerts = new DeviceAlertsAPI.DeviceAlerts(this._client);
  courses: CoursesAPI.Courses = new CoursesAPI.Courses(this._client);
  complaints: ComplaintsAPI.Complaints = new ComplaintsAPI.Complaints(this._client);
  banners: BannersAPI.Banners = new BannersAPI.Banners(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  practiceRecords: PracticeRecordsAPI.PracticeRecords = new PracticeRecordsAPI.PracticeRecords(this._client);
  practiceCertificates: PracticeCertificatesAPI.PracticeCertificates = new PracticeCertificatesAPI.PracticeCertificates(this._client);
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);
  operationLogs: OperationLogsAPI.OperationLogs = new OperationLogsAPI.OperationLogs(this._client);
  monitorDashboard: MonitorDashboardAPI.MonitorDashboard = new MonitorDashboardAPI.MonitorDashboard(this._client);
  hrOrganizations: HrOrganizationsAPI.HrOrganizations = new HrOrganizationsAPI.HrOrganizations(this._client);
  deviceHealth: DeviceHealthAPI.DeviceHealth = new DeviceHealthAPI.DeviceHealth(this._client);

  /**
   * 生成一个新的验证码图片，返回 Base64 编码的图片和验证码 ID
   *
   * @example
   * ```ts
   * const response = await client.v1.retrieveCaptcha();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveCaptcha(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/captcha', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询菜单列表，page 从 1 开始，size 范围 1–100
   *
   * @example
   * ```ts
   * const response = await client.v1.retrieveMenus();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveMenus(query: V1RetrieveMenusParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/menus', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }

  /**
   * 分页查询权限列表，page 从 1 开始，size 范围 1–100
   *
   * @example
   * ```ts
   * const response = await client.v1.retrievePermissions();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrievePermissions(query: V1RetrievePermissionsParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/api/v1/permissions', { query, ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __binaryResponse: true });
  }
}

export interface V1RetrieveMenusParams {
  page?: number;

  size?: number;
}

export interface V1RetrievePermissionsParams {
  page?: number;

  size?: number;
}

V1.Users = Users;
V1.Tutors = Tutors;
V1.StudyGroups = StudyGroups;
V1.StudyArchives = StudyArchives;
V1.Students = Students;
V1.Roles = Roles;
V1.Pods = Pods;
V1.PodReservations = PodReservations;
V1.OperationUnits = OperationUnits;
V1.Notices = Notices;
V1.News = News;
V1.Navigations = Navigations;
V1.MaintenanceOrders = MaintenanceOrders;
V1.MaintenanceInspections = MaintenanceInspections;
V1.FixedTeachingPoints = FixedTeachingPoints;
V1.Feedbacks = Feedbacks;
V1.Faqs = Faqs;
V1.ExamRecords = ExamRecords;
V1.Enrollments = Enrollments;
V1.Devices = Devices;
V1.DeviceAlerts = DeviceAlerts;
V1.Courses = Courses;
V1.Complaints = Complaints;
V1.Banners = Banners;
V1.Auth = Auth;
V1.PracticeRecords = PracticeRecords;
V1.PracticeCertificates = PracticeCertificates;
V1.Statistics = Statistics;
V1.OperationLogs = OperationLogs;
V1.MonitorDashboard = MonitorDashboard;
V1.HrOrganizations = HrOrganizations;
V1.DeviceHealth = DeviceHealth;

export declare namespace V1 {
  export {
    type V1RetrieveMenusParams as V1RetrieveMenusParams,
    type V1RetrievePermissionsParams as V1RetrievePermissionsParams
  };

  export {
    Users as Users,
    type User as User,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserRegisterParams as UserRegisterParams,
    type UserResetPasswordParams as UserResetPasswordParams
  };

  export {
    Tutors as Tutors,
    type TutorCreateParams as TutorCreateParams,
    type TutorUpdateParams as TutorUpdateParams,
    type TutorListParams as TutorListParams
  };

  export {
    StudyGroups as StudyGroups,
    type StudyGroupCreateParams as StudyGroupCreateParams,
    type StudyGroupUpdateParams as StudyGroupUpdateParams,
    type StudyGroupListParams as StudyGroupListParams
  };

  export {
    StudyArchives as StudyArchives,
    type StudyArchiveListParams as StudyArchiveListParams
  };

  export {
    Students as Students,
    type StudentCreateParams as StudentCreateParams,
    type StudentUpdateParams as StudentUpdateParams,
    type StudentListParams as StudentListParams
  };

  export {
    Roles as Roles,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams
  };

  export {
    Pods as Pods,
    type PodCreateParams as PodCreateParams,
    type PodUpdateParams as PodUpdateParams,
    type PodListParams as PodListParams
  };

  export {
    PodReservations as PodReservations,
    type PodReservationCreateParams as PodReservationCreateParams,
    type PodReservationListParams as PodReservationListParams
  };

  export {
    OperationUnits as OperationUnits,
    type OperationUnitCreateParams as OperationUnitCreateParams,
    type OperationUnitUpdateParams as OperationUnitUpdateParams,
    type OperationUnitListParams as OperationUnitListParams,
    type OperationUnitLockParams as OperationUnitLockParams
  };

  export {
    Notices as Notices,
    type NoticeCreate as NoticeCreate,
    type NoticeCreateParams as NoticeCreateParams,
    type NoticeUpdateParams as NoticeUpdateParams,
    type NoticeListParams as NoticeListParams
  };

  export {
    News as News,
    type NewsCreate as NewsCreate,
    type NewsCreateParams as NewsCreateParams,
    type NewsUpdateParams as NewsUpdateParams,
    type NewsListParams as NewsListParams
  };

  export {
    Navigations as Navigations,
    type NavigationCreate as NavigationCreate,
    type NavigationCreateParams as NavigationCreateParams,
    type NavigationUpdateParams as NavigationUpdateParams,
    type NavigationListParams as NavigationListParams
  };

  export {
    MaintenanceOrders as MaintenanceOrders,
    type MaintenanceOrderCreateParams as MaintenanceOrderCreateParams,
    type MaintenanceOrderListParams as MaintenanceOrderListParams,
    type MaintenanceOrderAssignParams as MaintenanceOrderAssignParams,
    type MaintenanceOrderCloseParams as MaintenanceOrderCloseParams,
    type MaintenanceOrderEscalateParams as MaintenanceOrderEscalateParams,
    type MaintenanceOrderStatisticsParams as MaintenanceOrderStatisticsParams
  };

  export {
    MaintenanceInspections as MaintenanceInspections,
    type MaintenanceInspectionCreateParams as MaintenanceInspectionCreateParams,
    type MaintenanceInspectionListParams as MaintenanceInspectionListParams,
    type MaintenanceInspectionCompleteParams as MaintenanceInspectionCompleteParams,
    type MaintenanceInspectionStatisticsParams as MaintenanceInspectionStatisticsParams
  };

  export {
    FixedTeachingPoints as FixedTeachingPoints,
    type FixedTeachingPointCreateParams as FixedTeachingPointCreateParams,
    type FixedTeachingPointUpdateParams as FixedTeachingPointUpdateParams,
    type FixedTeachingPointListParams as FixedTeachingPointListParams
  };

  export {
    Feedbacks as Feedbacks,
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackListParams as FeedbackListParams,
    type FeedbackProcessParams as FeedbackProcessParams
  };

  export {
    Faqs as Faqs,
    type FaqCreate as FaqCreate,
    type FaqCreateParams as FaqCreateParams,
    type FaqUpdateParams as FaqUpdateParams,
    type FaqListParams as FaqListParams
  };

  export {
    ExamRecords as ExamRecords,
    type ExamRecordCreateParams as ExamRecordCreateParams,
    type ExamRecordListParams as ExamRecordListParams,
    type ExamRecordCompleteParams as ExamRecordCompleteParams,
    type ExamRecordStatisticsParams as ExamRecordStatisticsParams
  };

  export {
    Enrollments as Enrollments,
    type EnrollmentCreateParams as EnrollmentCreateParams,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentAuditParams as EnrollmentAuditParams
  };

  export {
    Devices as Devices,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceUpdateParams as DeviceUpdateParams,
    type DeviceListParams as DeviceListParams
  };

  export {
    DeviceAlerts as DeviceAlerts,
    type DeviceAlertCreateParams as DeviceAlertCreateParams,
    type DeviceAlertListParams as DeviceAlertListParams,
    type DeviceAlertHandleParams as DeviceAlertHandleParams,
    type DeviceAlertStatisticsParams as DeviceAlertStatisticsParams
  };

  export {
    Courses as Courses,
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams
  };

  export {
    Complaints as Complaints,
    type ComplaintCreateParams as ComplaintCreateParams,
    type ComplaintListParams as ComplaintListParams,
    type ComplaintUpdateProcessParams as ComplaintUpdateProcessParams
  };

  export {
    Banners as Banners,
    type BannerCreate as BannerCreate,
    type BannerCreateParams as BannerCreateParams,
    type BannerUpdateParams as BannerUpdateParams
  };

  export {
    Auth as Auth,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthForgotPasswordByPhoneParams as AuthForgotPasswordByPhoneParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordByTokenParams as AuthResetPasswordByTokenParams,
    type AuthUpdatePasswordParams as AuthUpdatePasswordParams,
    type AuthUpdateProfileParams as AuthUpdateProfileParams
  };

  export {
    PracticeRecords as PracticeRecords,
    type PracticeRecordPracticeRecordsParams as PracticeRecordPracticeRecordsParams,
    type PracticeRecordRetrievePracticeRecordsParams as PracticeRecordRetrievePracticeRecordsParams,
    type PracticeRecordRetrieveStatisticsParams as PracticeRecordRetrieveStatisticsParams
  };

  export {
    PracticeCertificates as PracticeCertificates,
    type PracticeCertificatePracticeCertificatesParams as PracticeCertificatePracticeCertificatesParams,
    type PracticeCertificateRetrievePracticeCertificatesParams as PracticeCertificateRetrievePracticeCertificatesParams
  };

  export {
    Statistics as Statistics
  };

  export {
    OperationLogs as OperationLogs,
    type OperationLogDeleteBatchParams as OperationLogDeleteBatchParams,
    type OperationLogRetrieveOperationLogsParams as OperationLogRetrieveOperationLogsParams
  };

  export {
    MonitorDashboard as MonitorDashboard
  };

  export {
    HrOrganizations as HrOrganizations
  };

  export {
    DeviceHealth as DeviceHealth,
    type DeviceHealthRetrieveStatisticsParams as DeviceHealthRetrieveStatisticsParams
  };
}
