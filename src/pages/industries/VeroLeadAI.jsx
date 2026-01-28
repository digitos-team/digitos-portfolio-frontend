import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Clock,
    MessageSquare,
    BarChart3,
    ChevronRight,
    PlayCircle,
    Mail,
    Users,
    X
} from 'lucide-react';

const PdfIcon = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <text x="50%" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" strokeWidth="0" letterSpacing="-0.5">PDF</text>
    </svg>
);
import { toast } from 'react-hot-toast';
import { addClientMessage } from '../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const VeroLeadAI = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        agencyName: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const submitData = {
                name: formData.fullName,
                email: formData.email,
                company: formData.agencyName,
                phone: formData.phone,
                message: formData.message || "Requesting Free AI Audit for VeroLead AI",
                category: "verolead"
            };

            await addClientMessage(submitData);
            toast.success("Audit request sent successfully!");
            setFormData({
                fullName: '',
                email: '',
                agencyName: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            toast.error(error.message || "Failed to send request. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const features = [
        {
            icon: MessageSquare,
            title: "All-in-one Support",
            description: "Seamlessly handle Voice, Chat, and WhatsApp inquiries under one branded tone."
        },
        {
            icon: Zap,
            title: "Intent Analysis",
            description: "Understands if the customer wants to Purchase, Inquire, or needs Support."
        },
        {
            icon: BarChart3,
            title: "Smart Data Capture",
            description: "Captures name, requirements, urgency, and contact details automatically."
        },
        {
            icon: Shield,
            title: "Opportunity Scoring",
            description: "Ranks inquiries (Hot/Warm/Cold) so your team stays focused on high-intent deals."
        },
        {
            icon: MessageSquare,
            title: "Instant Workflow Sync",
            description: "Instant alerts via WhatsApp, CRM, and Email for immediate follow-up."
        },
        {
            icon: Users,
            title: "Scale Without Hiring",
            description: "Handle hundreds of simultaneous inquiries without increasing your payroll."
        }
    ];

    const stats = [
        { label: "24/7 Availability", detail: "Capture global inquiries from any timezone instantly." },
        { label: "Smart Intent Analysis", detail: "Identify serious prospects and urgent requests automatically." },
        { label: "Instant Contact Sync", detail: "Receive complete customer profiles on your dashboard immediately." }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-white to-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

                <div className="container-grid relative z-10 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-700 px-4 py-2 rounded-full font-bold mb-6 border border-yellow-500/20">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            VeroLead AI — Seamless Automation
                        </div>

                        <h1 className="font-display text-4xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            VeroLead AI
                            <span className="block text-2xl md:text-3xl font-semibold text-yellow-600 mt-2">
                                Smart Business Assistant for Global Enterprises
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Automate voice calls, chats, and customer inquiries from everywhere. Qualify leads instantly and streamline operations — 24/7. Built by Digitos IT Solution Pvt Ltd.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/20"
                            >
                                Request Demo <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => setShowVideo(true)}
                                className="bg-white text-black border-2 border-slate-200 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:border-yellow-500 transition-all"
                            >
                                <PlayCircle size={20} className="text-yellow-500" /> View Workflow
                            </button>
                            <a
                                href="/genral-verolead.pdf"
                                download="VeroLead_Brochure.pdf"
                                className="bg-white text-black border-2 border-slate-200 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:border-yellow-500 transition-all"
                            >
                                <PdfIcon size={24} className="text-red-500" /> Download Brochure
                            </a>
                        </div>

                        {/* Live Experience Card */}
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-black text-white rounded-3xl p-6 md:p-10 text-left border border-white/10 shadow-2xl relative group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Status</p>
                                        <p className="text-yellow-500 font-bold">Processing inquiries...</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">C</div>
                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 italic text-white/90">
                                        “Hello! I’m looking for a scalable enterprise solution for my team. Can you share a quote?”
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-end">
                                    <div className="bg-yellow-500 text-black rounded-2xl p-4 font-medium shadow-lg shadow-yellow-500/10">
                                        “Certainly! I can help with that. Could you please provide your name and estimated user count?”
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xs shrink-0">V</div>
                                </div>
                            </div>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section >

            {/* How it Works */}
            < section className="py-24 bg-white" >
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600 mb-4">Qualification Lifecycle</p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-black mb-6">How VeroLead AI Works</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            VeroLead manages the entire lead qualification lifecycle without human intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Customer Inquires", desc: "Requests from all platforms including your website, social media, or voice calls." },
                            { step: "2", title: "AI Responds", desc: "Instantly engages users with your branded tone and expert knowledge." },
                            { step: "3", title: "Intent Analysis", desc: "Understands if they want to Purchase, Enquire, or need Support." },
                            { step: "4", title: "Data Collection", desc: "Captures Name, Requirements, Priority, and Contact Info." },
                            { step: "5", title: "Quality Scoring", desc: "Ranks prospects as Hot, Warm, or Cold automatically." },
                            { step: "6", title: "Notifications", desc: "Instant alerts via WhatsApp, CRM, and Email to your team." },
                            { step: "7", title: "Faster Conversions", desc: "Your team focuses solely on high-intent, pre-qualified inquiries." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-yellow-400 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Features Stats Section */}
            < section className="py-24 bg-slate-50" >
                <div className="container-grid">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-black">Built for Optimized Sales Success</h2>
                            <div className="space-y-6">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{stat.label}</h4>
                                            <p className="text-slate-600">{stat.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="bg-yellow-500 p-8 rounded-3xl text-black">
                                    <p className="text-4xl font-bold mb-2">24/7</p>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-wider">Availability</p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-slate-200">
                                    <p className="text-4xl font-bold mb-2">100%</p>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Automated</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-8 rounded-3xl border border-slate-200">
                                    <p className="text-4xl font-bold mb-2">0</p>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Missed Calls</p>
                                </div>
                                <div className="bg-black p-8 rounded-3xl text-white">
                                    <p className="text-4xl font-bold mb-2">4X</p>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-wider">Efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Digitos Advantage */}
            < section className="py-24 bg-white" >
                <div className="container-grid">
                    <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <p className="text-yellow-500 font-bold uppercase tracking-[.3em] mb-6 text-sm">The Digitos Advantage</p>
                                <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Maximize Your ROI</h2>
                                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                                    Convert leads that would have otherwise gone cold or reached competitors. Powered by the secure and scalable technology of Digitos IT Solution Pvt Ltd.
                                </p>
                                <div className="flex gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-yellow-500">100+</span>
                                        <span className="text-xs text-white/50 uppercase font-bold tracking-widest mt-1">Simultaneous Calls</span>
                                    </div>
                                    <div className="w-[1px] h-12 bg-white/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-yellow-500">Fast</span>
                                        <span className="text-xs text-white/50 uppercase font-bold tracking-widest mt-1">Deployment</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Retail & E-commerce", icon: "🛒" },
                                    { title: "Healthcare & Clinics", icon: "🏥" },
                                    { title: "Banking & Finance", icon: "💳" },
                                    { title: "Service Industries", icon: "🛠️" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center gap-4 hover:bg-white/10 transition-all">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="font-bold">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Experience & Form */}
            < section className="py-24 bg-white relative overflow-hidden" id="audit" >
                <div className="container-grid">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-8">Experience VeroLead AI</h2>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                    Partner with Digitos IT Solution and revolutionize your sales and support pipeline. Request your free AI audit today.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:info@digitositsolutionpvtltd.com"
                                        className="flex items-center gap-3 text-slate-700 font-bold hover:text-yellow-600 transition-colors"
                                    >
                                        <Mail className="text-yellow-600" size={20} />
                                        info@digitositsolutionpvtltd.com
                                    </a>
                                    <a
                                        href="https://wa.me/917620195100"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-slate-700 font-bold hover:text-[#227c4e] transition-colors"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} className="text-[#227c4e]" size="xl" />
                                        <span>7620195100</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl">
                                <h3 className="font-display text-2xl font-bold mb-8">Request Your Free AI Audit</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@agency.com"
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+971 00 000 0000"
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Agency / Company Name</label>
                                        <input
                                            type="text"
                                            name="agencyName"
                                            value={formData.agencyName}
                                            onChange={handleInputChange}
                                            placeholder="Your Luxury Realty Group"
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Specific Requirements (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your lead volume or current pain points..."
                                            rows="3"
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all shadow-xl hover:shadow-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Sending Request..." : "👉 Request Free Audit"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Video Modal */}
            < AnimatePresence >
                {showVideo && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowVideo(false)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    >
                        <Motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="aspect-video w-full bg-black">
                                <video
                                    src="/Real estate enquiry handling agent_.mp4"
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence >
        </div >
    );
};

export default VeroLeadAI;
