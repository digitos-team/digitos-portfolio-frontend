import { motion as Motion } from "framer-motion";
import { toast } from 'react-hot-toast';
import { useState } from "react";
import { addClientMessage } from "../api/api"; // Verify this path

const inputClasses = "peer w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition-all";
const labelClasses = "pointer-events-none absolute left-4 top-3 text-black/50 transition-all peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-green-600 peer-valid:-top-3 peer-valid:bg-white peer-valid:px-2 peer-valid:text-xs";

const AgricultureContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitError("");

        let formData = new FormData(e.target);
        let reqData = Object.fromEntries(formData.entries());

        // Hardcode category
        reqData.category = "agriculture";

        // Frontend validation
        const requiredFields = ['name', 'email', 'phone', 'company'];
        const missing = requiredFields.filter(field => !reqData[field] || reqData[field].trim() === '');

        // Phone 10-digit validation
        if (!/^\d{10}$/.test(reqData.phone)) {
            setSubmitError("Phone number must be exactly 10 digits");
            setLoading(false);
            return;
        }

        if (missing.length > 0) {
            setSubmitError(`Please fill: ${missing.join(', ')}`);
            setLoading(false);
            return;
        }

        try {
            await addClientMessage(reqData);
            toast.success("Inquiry sent successfully!");
            e.target.reset();
        } catch (err) {
            console.error('❌ Error:', err);
            setSubmitError(err.response?.data?.message || "Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto"
        >
            <form
                onSubmit={handleSubmit}
                className="grid gap-6 bg-white p-8 rounded-3xl shadow-xl border border-black/10"
            >
                {/* Name */}
                <div className="relative">
                    <input type="text" name="name" className={inputClasses} required />
                    <label className={labelClasses}>Full Name</label>
                </div>

                {/* Email */}
                <div className="relative">
                    <input type="email" name="email" className={inputClasses} required />
                    <label className={labelClasses}>Email Address</label>
                </div>

                {/* Phone */}
                <div className="relative">
                    <input type="tel" name="phone" className={inputClasses} required />
                    <label className={labelClasses}>Phone Number</label>
                </div>

                {/* Company */}
                <div className="relative">
                    <input type="text" name="company" className={inputClasses} required />
                    <label className={labelClasses}>Farm/Business Name</label>
                </div>

                {/* Message (Optional - Hidden/Commented out as per recent pattern) */}
                {/* <div className="relative">
                    <textarea name="message" rows="4" className={`${inputClasses} resize-none`} />
                    <label className={labelClasses}>Your Message / Requirements (Optional)</label>
                </div> */}

                {/* Error Message */}
                {submitError && (
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                    >
                        {submitError}
                    </Motion.div>
                )}

                {/* Submit Button */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-center"
                >
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-10 py-3 shadow-md transition-all hover:shadow-lg w-full md:w-auto"
                    >
                        {loading ? "Sending..." : "Request Kuber Demo"}
                    </button>
                </Motion.div>
            </form>
        </Motion.div>
    );
};

export default AgricultureContactForm;
