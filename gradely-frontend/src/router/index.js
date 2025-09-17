import { createRouter, createWebHistory } from 'vue-router'

// Auth
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import ForgotPassword from '../views/auth/forgotPassword.vue'

// Admin
import AdminDashboard from '../views/Admin/Dashboard.vue'
import ManageUsers from '../views/Admin/ManageUsers.vue'
import ManageCourses from '../views/Admin/ManageCourses.vue'
import AdminSettings from '../views/Admin/Settings.vue'

// Exam Officer
import ExamOfficerDashboard from '../views/ExamOfficer/Dashboard.vue'
import ExamHistory from '../views/ExamOfficer/History.vue'
import ExamSettings from '../views/ExamOfficer/Settings.vue'
import UnapprovedResults from '../views/ExamOfficer/UnapprovedResults.vue'

// Lecturer
import LecturerDashboard from '../views/Lecturer/Dashboard.vue'
import PendingResults from '../views/Lecturer/PendingResults.vue'
import LecturerSettings from '../views/Lecturer/Settings.vue'
import UploadResult from '../views/Lecturer/UploadResult.vue'

// Student
import StudentDashboard from '../views/Student/Dashboard.vue'
import MyResult from '../views/Student/MyResult.vue'
import Transcript from '../views/Student/Transcript.vue'
import StudentSettings from '../views/Student/Settings.vue'

const routeLists = [
  { path: '/', redirect: '/login' },

  // // Auth
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },

  // Admin
  { path: '/admin/dashboard', component: AdminDashboard },
  { path: '/admin/manage-users', component: ManageUsers },
  { path: '/admin/manage-courses', component: ManageCourses },
  { path: '/admin/settings', component: AdminSettings },

  // Exam Officer
  { path: '/exam-officer/dashboard', component: ExamOfficerDashboard },
  { path: '/exam-officer/history', component: ExamHistory },
  { path: '/exam-officer/settings', component: ExamSettings },
  { path: '/exam-officer/unapproved-results', component: UnapprovedResults },

  // Lecturer
  { path: '/lecturer/dashboard', component: LecturerDashboard },
  { path: '/lecturer/pending-results', component: PendingResults },
  { path: '/lecturer/settings', component: LecturerSettings },
  { path: '/lecturer/upload-result', component: UploadResult },

  // Student
  { path: '/student/dashboard', component: StudentDashboard },
  { path: '/student/my-result', component: MyResult },
  { path: '/student/transcript', component: Transcript },
  { path: '/student/settings', component: StudentSettings }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeLists,
})

export default router

