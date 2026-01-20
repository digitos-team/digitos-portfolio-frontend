import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PathologyContactForm from '../../components/PathologyContactForm';
import {
    FileBarChart,
    Receipt,
    Wallet,
    Users,
    Stethoscope,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Clock,
    Layout
} from 'lucide-react';

import PathAdmin from '../../assets/path-admin.png';
import PathReceptionist from '../../assets/path-receptionist.png';
import Patients from '../../assets/patients.png';

/* ---------- Feature Data ---------- */
const modules = [
    {
        title: 'Report Generation',
        icon: FileBarChart,
        features: [
            'Manual Test Result Entry',
            'PDF Report Upload',
            'Auto-Generated Templates',
            'Instant Printing',
            'Download & Share (WhatsApp/Email)',
            'Search & Filter Reports'
        ]
    },
    {
        title: 'Billing & Invoicing',
        icon: Receipt,
        features: [
            'Digital Bill Generation',
            'Multiple Tests in One Bill',
            'Auto Tax & Total Calculations',
            'Flat & Percentage Discounts',
            'Daily Billing Summary',
            'Export to Excel/PDF'
        ]
    },
    {
        title: 'Expense Management',
        icon: Wallet,
        features: [
            'Daily/Monthly Expense Entry',
            'Category-wise Tracking',
            'Auto-Commission Entry',
            'Advanced Expense Filters',
            'Profit & Loss Analysis',
            'Yearly Financial Summaries'
        ]
    },
    {
        title: 'Patient Records',
        icon: Users,
        features: [
            'Admin-Managed Patient Profiles',
            'Complete Test History',
            '1-Year Record Access',
            'Quick Search (Mobile/Name)',
            'Reprint Facility',
            'Address & Contact Management'
        ]
    },
    {
        title: 'Doctor Management',
        icon: Stethoscope,
        features: [
            'Manage Doctor Profiles',
            'Set Commission Percentages',
            'Auto-Calculate Referral Fees',
            'Commission-Expense Linking',
            'Monthly Settlement Reports',
            'Export Statements'
        ]
    }
];

const benefits = [
    {
        icon: Zap,
        title: 'Faster Reporting',
        description: 'Reduce report generation time with automated templates'
    },
    {
        icon: Shield,
        title: 'Secure Data',
        description: 'Enterprise-grade security for all patient records and test data'
    },
    {
        icon: Clock,
        title: 'Save Admin Time',
        description: 'Daily time saved in administrative and tracking tasks'
    },
    {
        icon: CheckCircle2,
        title: 'Better Compliance',
        description: 'Maintain perfect records and financial audit trails'
    }
];

const userRoles = [
    {
        role: 'Admin',
        icon: Shield,
        description: 'Full control over lab configuration, staff, finances, and settings.',
        features: ['Financial Reports', 'Staff Management', 'Doctor Commission Configuration', 'System Settings']
    },
    {
        role: 'Receptionist',
        icon: Layout,
        description: 'Streamlined interface for daily operations and patient handling.',
        features: ['Patient Registration', 'Bill Generation', 'Test Result Entry', 'Report Printing']
    }
];

/* ---------- Main Component ---------- */
const Pathology = () => {
    const [activeView, setActiveView] = useState('admin');

    const dashboardViews = [
        {
            id: 'admin',
            title: 'Admin View',
            description: 'Complete control over lab operations, financial reports, and system configuration',
            image: PathAdmin,
            icon: Shield
        },
        {
            id: 'receptionist',
            title: 'Receptionist View',
            description: 'Streamlined interface for patient registration, test entry, and report generation',
            image: PathReceptionist,
            icon: Layout
        },
        {
            id: 'patients',
            title: 'Patient Records',
            description: 'Comprehensive patient management with complete test history and record access',
            image: Patients,
            icon: Users
        }
    ];
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 md:pb-12 bg-gradient-to-br from-slate-50 via-white to-yellow-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

                <div className="container-grid relative z-10 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full font-semibold mb-6 border border-yellow-500/40"
                        >
                            <FileBarChart size={20} />
                            <span>Our Product</span>
                        </Motion.div>

                        <h1 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
                            Pathology Management System
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-700 mb-6 font-semibold">
                            Digitize Your Lab Operations
                        </p>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            A comprehensive solution designed solely for Admins and Receptionists to streamline
                            pathology lab operations from report generation to billing and commission management.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="relative inline-flex flex-col items-center gap-6 w-full">
                                {/* Offer Badge */}
                                <Motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="bg-gradient-to-r from-red-400 to-red-500 text-white px-6 py-2 rounded-full shadow-lg font-bold text-sm md:text-base border-2 border-red-300"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">🎉</span>
                                        <div className="text-center">
                                            <div className="font-black">50% OFF - New Year Offer!</div>
                                            <div className="text-xs font-semibold opacity-90">Valid for limited time only</div>
                                        </div>
                                        <span className="text-lg">🎉</span>
                                    </div>
                                </Motion.div>

                                {/* Free Benefits */}
                                <Motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex flex-wrap justify-center gap-4 mb-4"
                                >
                                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200 font-semibold text-sm">
                                        <CheckCircle2 size={18} className="text-green-600" />
                                        <span>Free Demo</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 font-semibold text-sm">
                                        <CheckCircle2 size={18} className="text-blue-600" />
                                        <span>Free Setup</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full border border-purple-200 font-semibold text-sm">
                                        <CheckCircle2 size={18} className="text-purple-600" />
                                        <span>Free Training</span>
                                    </div>
                                </Motion.div>

                                {/* Contact Form */}
                                <PathologyContactForm />
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Dashboard Showcase Section */}
            <section className="pt-6 sm:pt-8 md:pt-12 pb-10 sm:pb-14 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-yellow-50">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            System Previews
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                            Intuitive Interfaces for Every Role
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Experience role-specific dashboards designed for seamless pathology lab management
                        </p>
                    </div>

                    {/* View Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {dashboardViews.map((view) => {
                            const Icon = view.icon;
                            return (
                                <Motion.button
                                    key={view.id}
                                    onClick={() => setActiveView(view.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeView === view.id
                                        ? 'bg-yellow-500 text-black shadow-lg'
                                        : 'bg-white text-yellow-600 border-2 border-yellow-500/40 hover:border-yellow-400'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{view.title}</span>
                                </Motion.button>
                            );
                        })}
                    </div>

                    {/* View Display */}
                    {dashboardViews.map((view) => (
                        <Motion.div
                            key={view.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: activeView === view.id ? 1 : 0,
                                y: activeView === view.id ? 0 : 20,
                                display: activeView === view.id ? 'block' : 'none'
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-yellow-500/30">
                                <div className="mb-6 text-center">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
                                        {view.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                        {view.description}
                                    </p>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500/30 bg-white">
                                    <Motion.img
                                        src={view.image}
                                        alt={`${view.title} Screenshot`}
                                        className="w-full h-auto"
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </section>

            {/* Modules Grid */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Key Features
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
                            Comprehensive Modules
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => {
                            const Icon = module.icon;
                            return (
                                <Motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-white text-yellow-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-black mb-4">
                                        {module.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {module.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <CheckCircle2 size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section className="page-section bg-gradient-to-br from-white to-yellow-50/50">
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                            Role-Based Access Control
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Dedicated interfaces for your staff to ensure security and efficiency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {userRoles.map((role, index) => {
                            const Icon = role.icon;
                            return (
                                <Motion.div
                                    key={role.role}
                                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-600">
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold text-black">
                                                {role.role}
                                            </h3>
                                            <p className="text-sm text-slate-500">Access Level</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 mb-6">
                                        {role.description}
                                    </p>
                                    <div className="space-y-2">
                                        {role.features.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Stats */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <Motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-yellow-200 transition-all duration-300"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-4">
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="font-display text-lg font-semibold text-black mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        {benefit.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="page-section bg-black text-white text-center">
                <div className="container-grid">
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
                        Transform Your Lab Today
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Get a centralized system for all your pathology needs. No complex setups, just efficiency.
                    </p>
                    {/* <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-yellow-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300"
                    >
                        Get Started
                        <ArrowRight size={22} />
                    </Link> */}
                </div>
            </section>
        </>
    );
};

export default Pathology;
