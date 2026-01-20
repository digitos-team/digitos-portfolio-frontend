import { useState, useEffect } from "react";
import { Search, Filter, Trash2, Mail, Phone, Calendar, User, Building2, MessageSquare, Loader2, Wheat } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { toast } from 'react-hot-toast';
import { deleteClientMessage, apiClient } from "../../api/api"; // Updated import to use apiClient

const AgricultureMessages = () => {
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();
        const filtered = messages.filter(msg =>
            msg.name.toLowerCase().includes(lowerSearch) ||
            msg.email.toLowerCase().includes(lowerSearch) ||
            msg.company.toLowerCase().includes(lowerSearch) ||
            msg.phone.includes(lowerSearch)
        );
        setFilteredMessages(filtered);
    }, [searchTerm, messages]);

    const fetchMessages = async () => {
        try {
            // Using the specific endpoint for agriculture
            const response = await apiClient.get('/clients/getagriculturemessages');
            setMessages(response.data.data);
            setFilteredMessages(response.data.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
            toast.error("Failed to load inquiries");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation();
        if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

        try {
            await deleteClientMessage(id);
            toast.success("Inquiry deleted successfully");
            setMessages(messages.filter(msg => msg._id !== id));
            if (selectedMessage?._id === id) setSelectedMessage(null);
        } catch (error) {
            console.error("Error deleting message:", error);
            toast.error("Failed to delete inquiry");
        }
    };

    return (
        <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-green-100 rounded-lg text-green-600">
                            <Wheat size={24} />
                        </span>
                        Agriculture Inquiries
                    </h1>
                    <p className="text-gray-500 mt-1">Manage leads from the Kuber/Agriculture platform</p>
                </div>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, email, or company..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all bg-gray-50 focus:bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="animate-spin text-green-500" size={40} />
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
                    {/* Message List */}
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <span className="font-semibold text-gray-700">Inbox</span>
                            <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                                {filteredMessages.length} Leads
                            </span>
                        </div>

                        <div className="overflow-y-auto flex-1 p-2 space-y-2 custom-scrollbar">
                            {filteredMessages.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <MessageSquare size={48} className="mx-auto mb-3 opacity-20" />
                                    <p>No inquiries found</p>
                                </div>
                            ) : (
                                filteredMessages.map((msg) => (
                                    <div
                                        key={msg._id}
                                        onClick={() => setSelectedMessage(msg)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all border ${selectedMessage?._id === msg._id
                                            ? 'bg-green-50 border-green-200 shadow-sm'
                                            : 'hover:bg-gray-50 border-transparent hover:border-gray-100'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className={`font-semibold truncate ${selectedMessage?._id === msg._id ? 'text-green-900' : 'text-gray-900'
                                                }`}>
                                                {msg.name}
                                            </h3>
                                            <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                                                {new Date(msg.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                            <Building2 size={14} />
                                            <span className="truncate">{msg.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Mail size={12} />
                                            <span className="truncate">{msg.email}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Message Details */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        {selectedMessage ? (
                            <div className="flex flex-col h-full">
                                {/* Detail Header */}
                                <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50/30">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl shrink-0">
                                            {selectedMessage.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">{selectedMessage.name}</h2>
                                            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Building2 size={14} />
                                                    {selectedMessage.company}
                                                </span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {new Date(selectedMessage.createdAt).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => handleDelete(selectedMessage._id, e)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete Inquiry"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                {/* Detail Content */}
                                <div className="p-8 flex-1 overflow-y-auto">
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">
                                                Contact Email
                                            </label>
                                            <div className="flex items-center gap-2 text-gray-900 selection:bg-green-100">
                                                <Mail size={16} className="text-green-500" />
                                                <a href={`mailto:${selectedMessage.email}`} className="hover:text-green-600 hover:underline">
                                                    {selectedMessage.email}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">
                                                Phone Number
                                            </label>
                                            <div className="flex items-center gap-2 text-gray-900 selection:bg-green-100">
                                                <Phone size={16} className="text-green-500" />
                                                <a href={`tel:${selectedMessage.phone}`} className="hover:text-green-600 hover:underline">
                                                    {selectedMessage.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prose max-w-none">
                                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                            Message / Requirements
                                        </h3>
                                        {selectedMessage.message ? (
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-gray-700 leading-relaxed whitespace-pre-wrap">
                                                {selectedMessage.message}
                                            </div>
                                        ) : (
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-gray-400 italic text-center">
                                                No message provided
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col justify-center items-center text-gray-400 bg-gray-50/50">
                                <Wheat size={64} className="mb-4 opacity-10 text-green-900" />
                                <h3 className="text-lg font-medium text-gray-600">Select an inquiry to view details</h3>
                                <p className="text-sm opacity-60">Manage your agriculture leads efficiently</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgricultureMessages;
