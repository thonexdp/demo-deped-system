import { Navigate, Route, Routes } from 'react-router-dom'
import './app-clean.css'
import AdminRiskMonitoringPage from './pages/admin/AdminRiskMonitoringPage'
import AddInviteUsersPage from './pages/admin/AddInviteUsersPage'
import AllAccountsPage from './pages/admin/AllAccountsPage'
import AllSchoolsPage from './pages/admin/AllSchoolsPage'
import AttendanceAnalyticsPage from './pages/admin/AttendanceAnalyticsPage'
import AuditLogsPage from './pages/admin/AuditLogsPage'
import DataExportPage from './pages/admin/DataExportPage'
import DivisionHeadPage from './pages/admin/DivisionHeadPage'
import EnrolmentAnalyticsPage from './pages/admin/EnrolmentAnalyticsPage'
import GradeAnalyticsPage from './pages/admin/GradeAnalyticsPage'
import ParentAccountsPage from './pages/admin/ParentAccountsPage'
import PmesDivisionViewPage from './pages/admin/PmesDivisionViewPage'
import SettingsPage from './pages/admin/SettingsPage'
import SmeaPirDivisionPage from './pages/admin/SmeaPirDivisionPage'
import TeacherAccountsPage from './pages/admin/TeacherAccountsPage'
import HeadTeacherEarlyWarningPage from './pages/headteachers/HeadTeacherEarlyWarningPage'
import HeadTeacherDashboardPage from './pages/headteachers/HeadTeacherDashboardPage'
import HeadTeachersPage from './pages/headteachers/HeadTeachersPage'
import HeadTeacherSmeaPirPage from './pages/headteachers/HeadTeacherSmeaPirPage'
import HeadTeacherPmesPage from './pages/headteachers/HeadTeacherPmesPage'
import HeadTeacherAttendancePage from './pages/headteachers/HeadTeacherAttendancePage'
import HeadTeacherGradeMonitoringPage from './pages/headteachers/HeadTeacherGradeMonitoringPage'
import HeadTeacherPendingApprovalsPage from './pages/headteachers/HeadTeacherPendingApprovalsPage'
import HeadTeacherSubmittedIpcrfPage from './pages/headteachers/HeadTeacherSubmittedIpcrfPage'
import HeadTeacherPerformanceSummaryPage from './pages/headteachers/HeadTeacherPerformanceSummaryPage'
import AnnouncementsPage from './pages/parents/AnnouncementsPage'
import MessageTeacherPage from './pages/parents/MessageTeacherPage'
import ParentEarlyWarningPage from './pages/parents/ParentEarlyWarningPage'
import ParentsPage from './pages/parents/ParentsPage'
import SchoolFormsPage from './pages/parents/SchoolFormsPage'
import TeacherAttendancePage from './pages/teachers/TeacherAttendancePage'
import TeacherEarlyWarningPage from './pages/teachers/TeacherEarlyWarningPage'
import TeacherGradebookPage from './pages/teachers/TeacherGradebookPage'
import TeacherPmesOpcrfPage from './pages/teachers/TeacherPmesOpcrfPage'
import TeacherSchoolFormsPage from './pages/teachers/TeacherSchoolFormsPage'
import TeachersPage from './pages/teachers/TeachersPage'
import TeacherSmeaPirPage from './pages/teachers/TeacherSmeaPirPage'

import TeacherAiLessonPlanPage from './pages/teachers/TeacherAiLessonPlanPage'
import TeacherLmsCatalogPage from './pages/teachers/TeacherLmsCatalogPage'
import TeacherCoursePlayerPage from './pages/teachers/TeacherCoursePlayerPage'
import TeacherLearningProgressPage from './pages/teachers/TeacherLearningProgressPage'
import TeacherOfflinePackagesPage from './pages/teachers/TeacherOfflinePackagesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/parents" replace />} />
      <Route path="/parents" element={<ParentsPage />} />
      <Route path="/parents/announcements" element={<AnnouncementsPage />} />
      <Route path="/parents/early-warning" element={<ParentEarlyWarningPage />} />
      <Route path="/parents/messages" element={<MessageTeacherPage />} />
      <Route path="/parents/school-forms" element={<SchoolFormsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/teachers/attendance" element={<TeacherAttendancePage />} />
      <Route path="/teachers/early-warning" element={<TeacherEarlyWarningPage />} />
      <Route path="/teachers/gradebook" element={<TeacherGradebookPage />} />
      <Route path="/teachers/pmes-opcrf" element={<TeacherPmesOpcrfPage />} />
      <Route path="/teachers/school-forms" element={<TeacherSchoolFormsPage />} />
      <Route path="/teachers/smea-pir" element={<TeacherSmeaPirPage />} />
      
      <Route path="/teachers/ai-lesson-plan" element={<TeacherAiLessonPlanPage />} />
      <Route path="/teachers/lms-catalog" element={<TeacherLmsCatalogPage />} />
      <Route path="/teachers/course-player" element={<TeacherCoursePlayerPage />} />
      <Route path="/teachers/learning-progress" element={<TeacherLearningProgressPage />} />
      <Route path="/teachers/offline-packages" element={<TeacherOfflinePackagesPage />} />

      <Route path="/headteachers" element={<HeadTeacherDashboardPage />} />
      <Route path="/headteachers/school-overview" element={<HeadTeachersPage />} />
      <Route path="/headteachers/early-warning" element={<HeadTeacherEarlyWarningPage />} />
      <Route path="/headteachers/smea-pir" element={<HeadTeacherSmeaPirPage />} />
      <Route path="/headteachers/pmes-all-teachers" element={<HeadTeacherPmesPage />} />
      <Route path="/headteachers/attendance-overview" element={<HeadTeacherAttendancePage />} />
      <Route path="/headteachers/grade-monitoring" element={<HeadTeacherGradeMonitoringPage />} />
      <Route path="/headteachers/pending-approvals" element={<HeadTeacherPendingApprovalsPage />} />
      <Route path="/headteachers/submitted-ipcrf" element={<HeadTeacherSubmittedIpcrfPage />} />
      <Route path="/headteachers/performance-summary" element={<HeadTeacherPerformanceSummaryPage />} />
      <Route path="/admin" element={<DivisionHeadPage />} />
      <Route path="/admin/all-schools" element={<AllSchoolsPage />} />
      <Route path="/admin/smea-pir-division" element={<SmeaPirDivisionPage />} />
      <Route path="/admin/pmes-division" element={<PmesDivisionViewPage />} />
      <Route path="/admin/enrolment-analytics" element={<EnrolmentAnalyticsPage />} />
      <Route path="/admin/grade-analytics" element={<GradeAnalyticsPage />} />
      <Route path="/admin/attendance-analytics" element={<AttendanceAnalyticsPage />} />
      <Route path="/admin/all-accounts" element={<AllAccountsPage />} />
      <Route path="/admin/teacher-accounts" element={<TeacherAccountsPage />} />
      <Route path="/admin/parent-accounts" element={<ParentAccountsPage />} />
      <Route path="/admin/add-invite-users" element={<AddInviteUsersPage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />
      <Route path="/admin/data-export" element={<DataExportPage />} />
      <Route path="/admin/audit-logs" element={<AuditLogsPage />} />
      <Route path="/admin/risk-monitoring" element={<AdminRiskMonitoringPage />} />
    </Routes>
  )
}
