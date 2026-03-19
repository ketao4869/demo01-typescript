# V1

Methods:

- <code title="get /api/v1/captcha">client.v1.<a href="./src/resources/v1/v1.ts">retrieveCaptcha</a>() -> Response</code>
- <code title="get /api/v1/menus">client.v1.<a href="./src/resources/v1/v1.ts">retrieveMenus</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/permissions">client.v1.<a href="./src/resources/v1/v1.ts">retrievePermissions</a>({ ...params }) -> Response</code>

## Users

Types:

- <code><a href="./src/resources/v1/users/users.ts">User</a></code>

Methods:

- <code title="get /api/v1/users/{id}">client.v1.users.<a href="./src/resources/v1/users/users.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/users/{id}">client.v1.users.<a href="./src/resources/v1/users/users.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/users">client.v1.users.<a href="./src/resources/v1/users/users.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/users/{id}">client.v1.users.<a href="./src/resources/v1/users/users.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/users/{id}/disable">client.v1.users.<a href="./src/resources/v1/users/users.ts">disable</a>(id) -> Response</code>
- <code title="put /api/v1/users/{id}/enable">client.v1.users.<a href="./src/resources/v1/users/users.ts">enable</a>(id) -> Response</code>
- <code title="post /api/v1/users/register">client.v1.users.<a href="./src/resources/v1/users/users.ts">register</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/users/{id}/reset-password">client.v1.users.<a href="./src/resources/v1/users/users.ts">resetPassword</a>(id, { ...params }) -> Response</code>

### Roles

Methods:

- <code title="get /api/v1/users/{id}/roles">client.v1.users.roles.<a href="./src/resources/v1/users/roles.ts">list</a>(id) -> Response</code>
- <code title="put /api/v1/users/{id}/roles">client.v1.users.roles.<a href="./src/resources/v1/users/roles.ts">assign</a>(id, [ ...body ]) -> Response</code>

## Tutors

Methods:

- <code title="post /api/v1/tutors">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/tutors/{id}">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/tutors/{id}">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/tutors">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/tutors/{id}">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/tutors/{id}/lock">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">lock</a>(id) -> Response</code>
- <code title="put /api/v1/tutors/{id}/unlock">client.v1.tutors.<a href="./src/resources/v1/tutors/tutors.ts">unlock</a>(id) -> Response</code>

### Courses

Methods:

- <code title="get /api/v1/tutors/{id}/courses">client.v1.tutors.courses.<a href="./src/resources/v1/tutors/courses.ts">list</a>(id) -> Response</code>
- <code title="post /api/v1/tutors/{id}/courses">client.v1.tutors.courses.<a href="./src/resources/v1/tutors/courses.ts">bind</a>(id, [ ...body ]) -> Response</code>
- <code title="delete /api/v1/tutors/{id}/courses/{courseId}">client.v1.tutors.courses.<a href="./src/resources/v1/tutors/courses.ts">unbind</a>(courseID, { ...params }) -> Response</code>

## StudyGroups

Methods:

- <code title="post /api/v1/study-groups">client.v1.studyGroups.<a href="./src/resources/v1/study-groups.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/study-groups/{id}">client.v1.studyGroups.<a href="./src/resources/v1/study-groups.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/study-groups/{id}">client.v1.studyGroups.<a href="./src/resources/v1/study-groups.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/study-groups">client.v1.studyGroups.<a href="./src/resources/v1/study-groups.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/study-groups/{id}">client.v1.studyGroups.<a href="./src/resources/v1/study-groups.ts">delete</a>(id) -> Response</code>

## StudyArchives

Methods:

- <code title="get /api/v1/study-archives">client.v1.studyArchives.<a href="./src/resources/v1/study-archives/study-archives.ts">list</a>({ ...params }) -> Response</code>

### Student

#### Course

Methods:

- <code title="get /api/v1/study-archives/student/{studentId}/course/{courseId}">client.v1.studyArchives.student.course.<a href="./src/resources/v1/study-archives/student/course.ts">retrieve</a>(courseID, { ...params }) -> Response</code>
- <code title="put /api/v1/study-archives/student/{studentId}/course/{courseId}/study-time">client.v1.studyArchives.student.course.<a href="./src/resources/v1/study-archives/student/course.ts">updateStudyTime</a>(courseID, { ...params }) -> Response</code>

## Students

Methods:

- <code title="post /api/v1/students">client.v1.students.<a href="./src/resources/v1/students.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/students/{id}">client.v1.students.<a href="./src/resources/v1/students.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/students/{id}">client.v1.students.<a href="./src/resources/v1/students.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/students">client.v1.students.<a href="./src/resources/v1/students.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/students/{id}">client.v1.students.<a href="./src/resources/v1/students.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/students/{id}/lock">client.v1.students.<a href="./src/resources/v1/students.ts">lock</a>(id) -> Response</code>
- <code title="put /api/v1/students/{id}/unlock">client.v1.students.<a href="./src/resources/v1/students.ts">unlock</a>(id) -> Response</code>

## Roles

Methods:

- <code title="post /api/v1/roles">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/roles/{id}">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/roles/{id}">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/roles">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/roles/{id}">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/roles/{id}/disable">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">disable</a>(id) -> Response</code>
- <code title="put /api/v1/roles/{id}/enable">client.v1.roles.<a href="./src/resources/v1/roles/roles.ts">enable</a>(id) -> Response</code>

### Permissions

Methods:

- <code title="get /api/v1/roles/{id}/permissions">client.v1.roles.permissions.<a href="./src/resources/v1/roles/permissions.ts">list</a>(id) -> Response</code>
- <code title="post /api/v1/roles/{id}/permissions">client.v1.roles.permissions.<a href="./src/resources/v1/roles/permissions.ts">assign</a>(id, [ ...body ]) -> Response</code>
- <code title="delete /api/v1/roles/{id}/permissions">client.v1.roles.permissions.<a href="./src/resources/v1/roles/permissions.ts">remove</a>(id, [ ...body ]) -> Response</code>

## Pods

Methods:

- <code title="post /api/v1/pods">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/pods/{id}">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/pods/{id}">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/pods">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/pods/{id}">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/pods/{id}/disable">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">disable</a>(id) -> Response</code>
- <code title="put /api/v1/pods/{id}/enable">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">enable</a>(id) -> Response</code>
- <code title="get /api/v1/pods/by-fixed-point/{fixedPointId}">client.v1.pods.<a href="./src/resources/v1/pods/pods.ts">listByFixedPoint</a>(fixedPointID) -> Response</code>

### TimeSlots

Methods:

- <code title="post /api/v1/pods/{podId}/time-slots">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">create</a>(podID, { ...params }) -> Response</code>
- <code title="get /api/v1/pods/{podId}/time-slots/{id}">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">retrieve</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/pods/{podId}/time-slots">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">list</a>(podID, { ...params }) -> Response</code>
- <code title="delete /api/v1/pods/{podId}/time-slots/{id}">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">delete</a>(id, { ...params }) -> Response</code>
- <code title="post /api/v1/pods/{podId}/time-slots/batch">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">createBatch</a>(podID, { ...params }) -> Response</code>
- <code title="put /api/v1/pods/{podId}/time-slots/{id}/lock">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">lock</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/pods/{podId}/time-slots/{id}/unlock">client.v1.pods.timeSlots.<a href="./src/resources/v1/pods/time-slots.ts">unlock</a>(id, { ...params }) -> Response</code>

## PodReservations

Methods:

- <code title="post /api/v1/pod-reservations">client.v1.podReservations.<a href="./src/resources/v1/pod-reservations.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/pod-reservations/{id}">client.v1.podReservations.<a href="./src/resources/v1/pod-reservations.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/pod-reservations">client.v1.podReservations.<a href="./src/resources/v1/pod-reservations.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/pod-reservations/{id}">client.v1.podReservations.<a href="./src/resources/v1/pod-reservations.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/pod-reservations/{id}/cancel">client.v1.podReservations.<a href="./src/resources/v1/pod-reservations.ts">cancel</a>(id) -> Response</code>

## OperationUnits

Methods:

- <code title="post /api/v1/operation-units">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/operation-units/{id}">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/operation-units/{id}">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/operation-units">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/operation-units/{id}">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">delete</a>(id) -> Response</code>
- <code title="get /api/v1/operation-units/enabled">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">listEnabled</a>() -> Response</code>
- <code title="put /api/v1/operation-units/{id}/lock">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">lock</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/operation-units/{id}/unlock">client.v1.operationUnits.<a href="./src/resources/v1/operation-units/operation-units.ts">unlock</a>(id) -> Response</code>

### Pods

Methods:

- <code title="post /api/v1/operation-units/{id}/pods">client.v1.operationUnits.pods.<a href="./src/resources/v1/operation-units/pods.ts">create</a>(id, [ ...body ]) -> Response</code>
- <code title="get /api/v1/operation-units/{id}/pods">client.v1.operationUnits.pods.<a href="./src/resources/v1/operation-units/pods.ts">list</a>(id) -> Response</code>

### DataScopes

Methods:

- <code title="post /api/v1/operation-units/{id}/data-scopes">client.v1.operationUnits.dataScopes.<a href="./src/resources/v1/operation-units/data-scopes.ts">create</a>(id, [ ...body ]) -> Response</code>
- <code title="get /api/v1/operation-units/{id}/data-scopes">client.v1.operationUnits.dataScopes.<a href="./src/resources/v1/operation-units/data-scopes.ts">list</a>(id) -> Response</code>

## Notices

Types:

- <code><a href="./src/resources/v1/notices.ts">NoticeCreate</a></code>

Methods:

- <code title="post /api/v1/notices">client.v1.notices.<a href="./src/resources/v1/notices.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/notices/{id}">client.v1.notices.<a href="./src/resources/v1/notices.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/notices/{id}">client.v1.notices.<a href="./src/resources/v1/notices.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/notices">client.v1.notices.<a href="./src/resources/v1/notices.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/notices/{id}">client.v1.notices.<a href="./src/resources/v1/notices.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/notices/{id}/publish">client.v1.notices.<a href="./src/resources/v1/notices.ts">publish</a>(id) -> Response</code>

## News

Types:

- <code><a href="./src/resources/v1/news.ts">NewsCreate</a></code>

Methods:

- <code title="post /api/v1/news">client.v1.news.<a href="./src/resources/v1/news.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/news/{id}">client.v1.news.<a href="./src/resources/v1/news.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/news/{id}">client.v1.news.<a href="./src/resources/v1/news.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/news">client.v1.news.<a href="./src/resources/v1/news.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/news/{id}">client.v1.news.<a href="./src/resources/v1/news.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/news/{id}/publish">client.v1.news.<a href="./src/resources/v1/news.ts">publish</a>(id) -> Response</code>

## Navigations

Types:

- <code><a href="./src/resources/v1/navigations.ts">NavigationCreate</a></code>

Methods:

- <code title="post /api/v1/navigations">client.v1.navigations.<a href="./src/resources/v1/navigations.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/navigations/{id}">client.v1.navigations.<a href="./src/resources/v1/navigations.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/navigations/{id}">client.v1.navigations.<a href="./src/resources/v1/navigations.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/navigations">client.v1.navigations.<a href="./src/resources/v1/navigations.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/navigations/{id}">client.v1.navigations.<a href="./src/resources/v1/navigations.ts">delete</a>(id) -> Response</code>

## MaintenanceOrders

Methods:

- <code title="post /api/v1/maintenance-orders">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/maintenance-orders/{id}">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/maintenance-orders">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-orders/{id}/assign">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">assign</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-orders/{id}/close">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">close</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-orders/{id}/escalate">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">escalate</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-orders/{id}/process">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">process</a>(id) -> Response</code>
- <code title="get /api/v1/maintenance-orders/statistics">client.v1.maintenanceOrders.<a href="./src/resources/v1/maintenance-orders.ts">statistics</a>({ ...params }) -> Response</code>

## MaintenanceInspections

Methods:

- <code title="post /api/v1/maintenance-inspections">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/maintenance-inspections/{id}">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/maintenance-inspections">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-inspections/{id}/cancel">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">cancel</a>(id) -> Response</code>
- <code title="put /api/v1/maintenance-inspections/{id}/complete">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">complete</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/maintenance-inspections/{id}/start">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">start</a>(id) -> Response</code>
- <code title="get /api/v1/maintenance-inspections/statistics">client.v1.maintenanceInspections.<a href="./src/resources/v1/maintenance-inspections.ts">statistics</a>({ ...params }) -> Response</code>

## FixedTeachingPoints

Methods:

- <code title="post /api/v1/fixed-teaching-points">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/fixed-teaching-points/{id}">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/fixed-teaching-points/{id}">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/fixed-teaching-points">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/fixed-teaching-points/{id}">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">delete</a>(id) -> Response</code>
- <code title="get /api/v1/fixed-teaching-points/enabled">client.v1.fixedTeachingPoints.<a href="./src/resources/v1/fixed-teaching-points.ts">listEnabled</a>() -> Response</code>

## Feedbacks

Methods:

- <code title="post /api/v1/feedbacks">client.v1.feedbacks.<a href="./src/resources/v1/feedbacks.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/feedbacks/{id}">client.v1.feedbacks.<a href="./src/resources/v1/feedbacks.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/feedbacks">client.v1.feedbacks.<a href="./src/resources/v1/feedbacks.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/feedbacks/{id}/process">client.v1.feedbacks.<a href="./src/resources/v1/feedbacks.ts">process</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/feedbacks/statistics">client.v1.feedbacks.<a href="./src/resources/v1/feedbacks.ts">statistics</a>() -> Response</code>

## Faqs

Types:

- <code><a href="./src/resources/v1/faqs.ts">FaqCreate</a></code>

Methods:

- <code title="post /api/v1/faqs">client.v1.faqs.<a href="./src/resources/v1/faqs.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/faqs/{id}">client.v1.faqs.<a href="./src/resources/v1/faqs.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/faqs/{id}">client.v1.faqs.<a href="./src/resources/v1/faqs.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/faqs">client.v1.faqs.<a href="./src/resources/v1/faqs.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/faqs/{id}">client.v1.faqs.<a href="./src/resources/v1/faqs.ts">delete</a>(id) -> Response</code>

## ExamRecords

Methods:

- <code title="post /api/v1/exam-records">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/exam-records/{id}">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/exam-records">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/exam-records/{id}">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/exam-records/{id}/complete">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">complete</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/exam-records/statistics">client.v1.examRecords.<a href="./src/resources/v1/exam-records.ts">statistics</a>({ ...params }) -> Response</code>

## Enrollments

Methods:

- <code title="post /api/v1/enrollments">client.v1.enrollments.<a href="./src/resources/v1/enrollments.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/enrollments/{id}">client.v1.enrollments.<a href="./src/resources/v1/enrollments.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/enrollments">client.v1.enrollments.<a href="./src/resources/v1/enrollments.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/enrollments/{id}/audit">client.v1.enrollments.<a href="./src/resources/v1/enrollments.ts">audit</a>(id, { ...params }) -> Response</code>
- <code title="put /api/v1/enrollments/{id}/cancel">client.v1.enrollments.<a href="./src/resources/v1/enrollments.ts">cancel</a>(id) -> Response</code>

## Devices

Methods:

- <code title="post /api/v1/devices">client.v1.devices.<a href="./src/resources/v1/devices.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/devices/{id}">client.v1.devices.<a href="./src/resources/v1/devices.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/devices/{id}">client.v1.devices.<a href="./src/resources/v1/devices.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/devices">client.v1.devices.<a href="./src/resources/v1/devices.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/devices/{id}">client.v1.devices.<a href="./src/resources/v1/devices.ts">delete</a>(id) -> Response</code>
- <code title="get /api/v1/devices/pod/{podId}">client.v1.devices.<a href="./src/resources/v1/devices.ts">listByPod</a>(podID) -> Response</code>

## DeviceAlerts

Methods:

- <code title="post /api/v1/device-alerts">client.v1.deviceAlerts.<a href="./src/resources/v1/device-alerts.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/device-alerts/{id}">client.v1.deviceAlerts.<a href="./src/resources/v1/device-alerts.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/device-alerts">client.v1.deviceAlerts.<a href="./src/resources/v1/device-alerts.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/device-alerts/{id}/handle">client.v1.deviceAlerts.<a href="./src/resources/v1/device-alerts.ts">handle</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/device-alerts/statistics">client.v1.deviceAlerts.<a href="./src/resources/v1/device-alerts.ts">statistics</a>({ ...params }) -> Response</code>

## Courses

Methods:

- <code title="post /api/v1/courses">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/courses/{id}">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">retrieve</a>(id) -> Response</code>
- <code title="put /api/v1/courses/{id}">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/courses">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">list</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/courses/{id}">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">delete</a>(id) -> Response</code>
- <code title="put /api/v1/courses/{id}/publish">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">publish</a>(id) -> Response</code>
- <code title="put /api/v1/courses/{id}/unpublish">client.v1.courses.<a href="./src/resources/v1/courses/courses.ts">unpublish</a>(id) -> Response</code>

### Pods

Methods:

- <code title="get /api/v1/courses/{id}/pods">client.v1.courses.pods.<a href="./src/resources/v1/courses/pods.ts">list</a>(id) -> Response</code>
- <code title="post /api/v1/courses/{id}/pods">client.v1.courses.pods.<a href="./src/resources/v1/courses/pods.ts">bind</a>(id, [ ...body ]) -> Response</code>

## Complaints

Methods:

- <code title="post /api/v1/complaints">client.v1.complaints.<a href="./src/resources/v1/complaints.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/complaints/{id}">client.v1.complaints.<a href="./src/resources/v1/complaints.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/complaints">client.v1.complaints.<a href="./src/resources/v1/complaints.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/complaints/{id}/process">client.v1.complaints.<a href="./src/resources/v1/complaints.ts">updateProcess</a>(id, { ...params }) -> Response</code>

## Banners

Types:

- <code><a href="./src/resources/v1/banners.ts">BannerCreate</a></code>

Methods:

- <code title="post /api/v1/banners">client.v1.banners.<a href="./src/resources/v1/banners.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/banners/position/{position}">client.v1.banners.<a href="./src/resources/v1/banners.ts">retrieve</a>(position) -> Response</code>
- <code title="put /api/v1/banners/{id}">client.v1.banners.<a href="./src/resources/v1/banners.ts">update</a>(id, { ...params }) -> Response</code>
- <code title="get /api/v1/banners">client.v1.banners.<a href="./src/resources/v1/banners.ts">list</a>() -> Response</code>
- <code title="delete /api/v1/banners/{id}">client.v1.banners.<a href="./src/resources/v1/banners.ts">delete</a>(id) -> Response</code>

## Auth

Methods:

- <code title="post /api/v1/auth/forgot-password">client.v1.auth.<a href="./src/resources/v1/auth.ts">forgotPassword</a>({ ...params }) -> Response</code>
- <code title="post /api/v1/auth/forgot-password-by-phone">client.v1.auth.<a href="./src/resources/v1/auth.ts">forgotPasswordByPhone</a>({ ...params }) -> Response</code>
- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth.ts">login</a>({ ...params }) -> Response</code>
- <code title="post /api/v1/auth/logout">client.v1.auth.<a href="./src/resources/v1/auth.ts">logout</a>() -> Response</code>
- <code title="post /api/v1/auth/reset-password-by-token">client.v1.auth.<a href="./src/resources/v1/auth.ts">resetPasswordByToken</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/auth/menu">client.v1.auth.<a href="./src/resources/v1/auth.ts">retrieveMenu</a>() -> Response</code>
- <code title="get /api/v1/auth/stats">client.v1.auth.<a href="./src/resources/v1/auth.ts">retrieveStats</a>() -> Response</code>
- <code title="get /api/v1/auth/userinfo">client.v1.auth.<a href="./src/resources/v1/auth.ts">retrieveUserinfo</a>() -> Response</code>
- <code title="put /api/v1/auth/password">client.v1.auth.<a href="./src/resources/v1/auth.ts">updatePassword</a>({ ...params }) -> Response</code>
- <code title="put /api/v1/auth/profile">client.v1.auth.<a href="./src/resources/v1/auth.ts">updateProfile</a>({ ...params }) -> Response</code>

## PracticeRecords

Methods:

- <code title="get /api/v1/practice-records/{id}">client.v1.practiceRecords.<a href="./src/resources/v1/practice-records.ts">retrieve</a>(id) -> Response</code>
- <code title="delete /api/v1/practice-records/{id}">client.v1.practiceRecords.<a href="./src/resources/v1/practice-records.ts">delete</a>(id) -> Response</code>
- <code title="post /api/v1/practice-records">client.v1.practiceRecords.<a href="./src/resources/v1/practice-records.ts">practiceRecords</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/practice-records">client.v1.practiceRecords.<a href="./src/resources/v1/practice-records.ts">retrievePracticeRecords</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/practice-records/statistics">client.v1.practiceRecords.<a href="./src/resources/v1/practice-records.ts">retrieveStatistics</a>({ ...params }) -> Response</code>

## PracticeCertificates

Methods:

- <code title="get /api/v1/practice-certificates/{id}">client.v1.practiceCertificates.<a href="./src/resources/v1/practice-certificates.ts">retrieve</a>(id) -> Response</code>
- <code title="delete /api/v1/practice-certificates/{id}">client.v1.practiceCertificates.<a href="./src/resources/v1/practice-certificates.ts">delete</a>(id) -> Response</code>
- <code title="post /api/v1/practice-certificates">client.v1.practiceCertificates.<a href="./src/resources/v1/practice-certificates.ts">practiceCertificates</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/practice-certificates">client.v1.practiceCertificates.<a href="./src/resources/v1/practice-certificates.ts">retrievePracticeCertificates</a>({ ...params }) -> Response</code>

## Statistics

Methods:

- <code title="get /api/v1/statistics/courses">client.v1.statistics.<a href="./src/resources/v1/statistics.ts">retrieveCourses</a>() -> Response</code>
- <code title="get /api/v1/statistics/overview">client.v1.statistics.<a href="./src/resources/v1/statistics.ts">retrieveOverview</a>() -> Response</code>
- <code title="get /api/v1/statistics/pods">client.v1.statistics.<a href="./src/resources/v1/statistics.ts">retrievePods</a>() -> Response</code>
- <code title="get /api/v1/statistics/students">client.v1.statistics.<a href="./src/resources/v1/statistics.ts">retrieveStudents</a>() -> Response</code>

## OperationLogs

Methods:

- <code title="delete /api/v1/operation-logs/{id}">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">delete</a>(id) -> Response</code>
- <code title="delete /api/v1/operation-logs/batch">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">deleteBatch</a>({ ...params }) -> Response</code>
- <code title="delete /api/v1/operation-logs/clear">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">deleteClear</a>() -> Response</code>
- <code title="get /api/v1/operation-logs">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">retrieveOperationLogs</a>({ ...params }) -> Response</code>
- <code title="get /api/v1/operation-logs/retention-config">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">retrieveRetentionConfig</a>() -> Response</code>
- <code title="get /api/v1/operation-logs/stats">client.v1.operationLogs.<a href="./src/resources/v1/operation-logs.ts">retrieveStats</a>() -> Response</code>

## MonitorDashboard

Methods:

- <code title="get /api/v1/monitor-dashboard/overview">client.v1.monitorDashboard.<a href="./src/resources/v1/monitor-dashboard/monitor-dashboard.ts">retrieveOverview</a>() -> Response</code>

### Pods

Methods:

- <code title="get /api/v1/monitor-dashboard/pods/status">client.v1.monitorDashboard.pods.<a href="./src/resources/v1/monitor-dashboard/pods.ts">retrieveStatus</a>() -> Response</code>

### Operation

Methods:

- <code title="get /api/v1/monitor-dashboard/operation/stats">client.v1.monitorDashboard.operation.<a href="./src/resources/v1/monitor-dashboard/operation.ts">retrieveStats</a>() -> Response</code>

### Health

Methods:

- <code title="get /api/v1/monitor-dashboard/health/distribution">client.v1.monitorDashboard.health.<a href="./src/resources/v1/monitor-dashboard/health.ts">retrieveDistribution</a>() -> Response</code>

### Alerts

Methods:

- <code title="get /api/v1/monitor-dashboard/alerts/realtime">client.v1.monitorDashboard.alerts.<a href="./src/resources/v1/monitor-dashboard/alerts.ts">retrieveRealtime</a>({ ...params }) -> Response</code>

## HrOrganizations

Methods:

- <code title="get /api/v1/hr-organizations/{id}">client.v1.hrOrganizations.<a href="./src/resources/v1/hr-organizations/hr-organizations.ts">retrieve</a>(id) -> Response</code>
- <code title="get /api/v1/hr-organizations">client.v1.hrOrganizations.<a href="./src/resources/v1/hr-organizations/hr-organizations.ts">retrieveHrOrganizations</a>() -> Response</code>

### Tree

Methods:

- <code title="get /api/v1/hr-organizations/tree">client.v1.hrOrganizations.tree.<a href="./src/resources/v1/hr-organizations/tree.ts">list</a>() -> Response</code>
- <code title="get /api/v1/hr-organizations/tree/enabled">client.v1.hrOrganizations.tree.<a href="./src/resources/v1/hr-organizations/tree.ts">retrieveEnabled</a>() -> Response</code>

## DeviceHealth

Methods:

- <code title="get /api/v1/device-health/statistics">client.v1.deviceHealth.<a href="./src/resources/v1/device-health/device-health.ts">retrieveStatistics</a>({ ...params }) -> Response</code>

### Pods

#### Devices

Methods:

- <code title="get /api/v1/device-health/pods/{podId}/devices/status">client.v1.deviceHealth.pods.devices.<a href="./src/resources/v1/device-health/pods/devices.ts">retrieveStatus</a>(podID) -> Response</code>

### Devices

Methods:

- <code title="get /api/v1/device-health/devices/{deviceId}/status">client.v1.deviceHealth.devices.<a href="./src/resources/v1/device-health/devices.ts">retrieveStatus</a>(deviceID) -> Response</code>
