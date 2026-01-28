import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const industries = [
    {
        title: "Hospital Management",
        description: "Comprehensive systems for patient records, appointments, and hospital administration.",
        icon: "🏥",
        path: "/industries/hospital-management"
    },
    {
        title: "Student Portal",
        description: "Unified platforms for student enrollment, grades, and academic resources.",
        icon: "🎓",
        path: "/industries/student-portal"
    },
    {
        title: "E-commerce",
        description: "Scalable online stores with seamless checkout and inventory management.",
        icon: "🛒",
        path: "/industries/ecommerce"
    },
    {
        title: "Financial Services",
        description: "Digital banking, wealth platforms, and compliance automation.",
        icon: "💳",
        path: "/industries/financial-services"
    },
    {
        title: "Agricultural Website",
        description: "Manage products and customer interactions with simplicity and efficiency.",
        icon: "📦",
        path: "/industries/agricultural-website"
    }
];

const IndustriesGrid = () => {
    return (
        <section className="page-section bg-white relative overflow-hidden">
            <div className="container-grid">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
                            Industries we served
                        </p>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                            Deep domain expertise across regulated and high-growth sectors.
                        </h2>
                        <p className="text-sm md:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
                            We embed subject-matter experts and solution architects to tailor roadmaps to your industry's compliance and scaling needs.
                        </p>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {industries.map((industry) => (
                        <Link
                            key={industry.title}
                            to={industry.path}
                            className="group block h-full"
                        >
                            <div className="h-full rounded-3xl border-2 border-black/5 bg-slate-50 p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                                {/* Icon */}
                                <div className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>

                                {/* Card Title */}
                                <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                                    {industry.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-6 flex-grow">
                                    {industry.description}
                                </p>

                                {/* Link Indicator */}
                                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
                                    Explore Case Study
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesGrid;
