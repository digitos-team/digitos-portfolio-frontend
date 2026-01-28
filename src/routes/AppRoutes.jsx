import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoadingFallback from '../components/LoadingFallback'


// Lazy load all pages
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Industries = lazy(() => import('../pages/Industries'))
const Career = lazy(() => import('../pages/Career'))
const ContactForm = lazy(() => import('../pages/ContactForm'))

// Service detail pages
const AppDevelopment = lazy(() => import('../pages/services/AppDevelopment'))
const SoftwareDevelopment = lazy(() => import('../pages/services/SoftwareDevelopment'))
const PayrollManagement = lazy(() => import('../pages/services/PayrollManagement'))
const ERPSolutions = lazy(() => import('../pages/services/ERPSolutions'))
const AIToolDevelopment = lazy(() => import('../pages/services/AIToolDevelopment'))
const Automation = lazy(() => import('../pages/services/Automation'))


// Industry product pages
const NextIgnition = lazy(() => import('../pages/industries/NextIgnition'))
const PayrollManagementProduct = lazy(() => import('../pages/industries/PayrollManagementProduct'))
const HospitalManagement = lazy(() => import('../pages/industries/HospitalManagement'))
const StudentPortal = lazy(() => import('../pages/industries/StudentPortal'))
const Ecommerce = lazy(() => import('../pages/industries/Ecommerce'))
const FinancialServices = lazy(() => import('../pages/industries/FinancialServices'))
const KuberProject = lazy(() => import('../pages/industries/AgricultureProject'))
const Pathology = lazy(() => import('../pages/industries/Pathology'))
const VeroLeadAI = lazy(() => import('../pages/industries/VeroLeadAI'))

import ProtectedRoute from '../components/Admin Folder/ProtectedRoute'

// Admin Components
const Login = lazy(() => import('../components/Admin Folder/Login'))
const ApplicationList = lazy(() => import('../components/Admin Folder/ApplicationList'))
const ClientMessages = lazy(() => import('../components/Admin Folder/ClientMessages'))
const PathologyMessages = lazy(() => import('../components/Admin Folder/PathologyMessages'))
const VeroLeadMessages = lazy(() => import('../components/Admin Folder/VeroLeadMessages'))

const PublicLayout = lazy(() => import('./PublicLayout'))
const AdminLayout = lazy(() => import('../components/Admin Folder/AdminLayout'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/payroll-management" element={<PayrollManagement />} />
          <Route path="/services/erp-solutions" element={<ERPSolutions />} />
          <Route path="/services/ai-tool-development" element={<AIToolDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/next-ignition" element={<NextIgnition />} />
          <Route path="/industries/payroll-management" element={<PayrollManagementProduct />} />
          <Route path="/industries/hospital-management" element={<HospitalManagement />} />
          <Route path="/industries/student-portal" element={<StudentPortal />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/agricultural-website" element={<KuberProject />} />
          <Route path="/industries/pathology" element={<Pathology />} />
          <Route path="/industries/verolead-ai" element={<VeroLeadAI />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>

        {/* Admin Login (No Layout) */}
        <Route path="/admin" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin/applications" element={<ApplicationList />} />
          <Route path="/admin/messages" element={<ClientMessages />} />
          <Route path="/admin/pathology-messages" element={<PathologyMessages />} />
          <Route path="/admin/verolead-messages" element={<VeroLeadMessages />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
