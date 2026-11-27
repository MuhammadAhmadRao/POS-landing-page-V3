import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';
import { 
  sendGeminiChatMessage, 
  getConfiguredGeminiApiKey,
  PROJECT_DEFAULT_GEMINI_KEY
} from '../services/geminiChatService';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ExternalLink, 
  Phone, 
  Check, 
  Clock,
  ShieldCheck,
  ChevronDown,
  Key,
  Settings,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' | 'agent'
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Assalam-o-Alaikum! Welcome to ManageO POS. I'm your Google Gemini-powered business assistant. How can I assist your retail store, salon, or restaurant in Pakistan today?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [customKey, setCustomKey] = useState(() => getConfiguredGeminiApiKey());
  const [showSettings, setShowSettings] = useState(false);
  const [apiStatus, setApiStatus] = useState(() => (getConfiguredGeminiApiKey() ? 'configured' : 'missing')); // 'live' | 'configured' | 'fallback' | 'missing'
  const [lastApiError, setLastApiError] = useState(null);
  const messagesEndRef = useRef(null);

  const resetToProjectKey = () => {
    setCustomKey(PROJECT_DEFAULT_GEMINI_KEY);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('manageo_gemini_api_key');
    }
    setApiStatus(PROJECT_DEFAULT_GEMINI_KEY ? 'configured' : 'missing');
    setLastApiError(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const quickPrompts = [
    { label: "Does it work offline?", query: "Does ManageO work offline without internet?" },
    { label: "Pricing in PKR?", query: "What is your pricing in Pakistani Rupees?" },
    { label: "Salon features?", query: "How does the Beauty & Salon module work?" },
    { label: "Retail & Khata?", query: "How does customer Khata & barcode billing work?" },
    { label: "Talk to Agent", query: "Can I speak to a real human agent?" }
  ];

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await sendGeminiChatMessage(query, messages, customKey);
      
      if (response.source === 'gemini-live') {
        setApiStatus('live');
        setLastApiError(null);
      } else if (response.apiError) {
        setApiStatus('fallback');
        setLastApiError(response.apiError);
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response.text,
        source: response.source,
        time: 'Just now'
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: "I am having trouble connecting right now. Please message our real agent directly on WhatsApp at " + COMPANY_CONTACT.whatsapp + "!",
          time: 'Just now'
        }
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          aria-label="Open Live Chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>

          <MessageSquare className="w-5 h-5 transition-transform group-hover:rotate-6" />

          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Chat with AI / Agent
          </span>

          {/* Floating Tooltip Bubble */}
          <div className="absolute -top-10 right-0 bg-slate-900 text-white text-[11px] font-semibold py-1 px-3 rounded-xl whitespace-nowrap shadow-lg hidden group-hover:block animate-fade-in">
            Gemini AI + WhatsApp Agent Online
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[410px] h-[570px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-fade-in relative">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  <span>ManageO AI Concierge</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-300 flex items-center gap-1">
                  <span>Powered by Google Gemini</span>
                  <span>•</span>
                  <span className="text-cyan-300 font-medium">POS Specialization</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`relative p-1.5 rounded-xl transition-colors ${showSettings ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                title={lastApiError ? `API Notice: ${lastApiError}` : 'API Key Details'}
              >
                <Key className="w-4 h-4" />
                {apiStatus === 'fallback' && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Overlay Drawer */}
          {showSettings && (
            <div className="bg-slate-900 text-white p-4 border-b border-slate-800 text-xs space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5 text-cyan-400">
                  <Key className="w-3.5 h-3.5" />
                  <span>Google AI Studio API Key</span>
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                  {customKey && customKey === PROJECT_DEFAULT_GEMINI_KEY
                    ? 'Fixed Project Key Active'
                    : 'POS-Gemini-API'}
                </span>
              </div>
              <div className="space-y-1.5">
                <input
                  type="password"
                  value={customKey}
                  onChange={(e) => {
                    const val = e.target.value;
                    const trimmed = val.trim();
                    if (!trimmed && PROJECT_DEFAULT_GEMINI_KEY) {
                      resetToProjectKey();
                      return;
                    }
                    setCustomKey(val);
                    if (typeof window !== 'undefined') {
                      if (trimmed) {
                        localStorage.setItem('manageo_gemini_api_key', trimmed);
                      } else {
                        localStorage.removeItem('manageo_gemini_api_key');
                      }
                    }
                    setApiStatus(trimmed ? 'configured' : 'missing');
                    setLastApiError(null);
                  }}
                  placeholder="Enter Gemini API Key (e.g. AIzaSy... or AQ....)"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {PROJECT_DEFAULT_GEMINI_KEY && customKey !== PROJECT_DEFAULT_GEMINI_KEY && (
                  <button
                    type="button"
                    onClick={resetToProjectKey}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Reset to fixed project API key
                  </button>
                )}
              </div>
              {lastApiError && (
                <div className="text-[11px] text-amber-200 bg-amber-950/60 border border-amber-700/60 p-2.5 rounded-xl flex items-start gap-2 leading-relaxed">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lastApiError}</span>
                </div>
              )}
              <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>System Instruction Scope Active:</span>
                </div>
                <div>• Answers only ManageO POS queries</div>
                <div>• Rejects unrelated topics</div>
                <div>• Escalates unknown queries to human WhatsApp agent</div>
              </div>
            </div>
          )}

          {/* Toggle Tab Bar: AI Assistant vs Real Person */}
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'ai'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="w-4 h-4 text-blue-600" />
              <span>Chat with AI</span>
            </button>

            <button
              onClick={() => setActiveTab('agent')}
              className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'agent'
                  ? 'bg-white text-emerald-600 border-b-2 border-emerald-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4 text-emerald-600" />
              <span>Real Person (WhatsApp)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </button>
          </div>

          {/* TAB 1: AI ASSISTANT CHAT */}
          {activeTab === 'ai' && (
            <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/50">
              
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 leading-relaxed whitespace-pre-line shadow-xs ${
                        m.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-sm'
                      }`}
                    >
                      {m.text}
                    </div>

                    <div className="flex items-center gap-2 mt-1 px-1">
                      <span className="text-[10px] text-slate-400">{m.time}</span>
                      {m.sender === 'ai' && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                          {m.source === 'gemini-live' ? '⚡ Gemini' : '🛡️ ManageO Guard'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 text-slate-400 p-2.5 bg-white rounded-2xl border border-slate-200 w-24">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions Chips */}
              <div className="p-2.5 bg-white border-t border-slate-200/80">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 px-1">
                  💡 Common Questions:
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {quickPrompts.map((qp, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(qp.query)}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-[11px] font-semibold whitespace-nowrap border border-slate-200 transition-colors"
                    >
                      {qp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask any question about ManageO POS..."
                  className="flex-1 px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: REAL PERSON (WHATSAPP AGENT) */}
          {activeTab === 'agent' && (
            <div className="flex-1 p-5 overflow-y-auto bg-slate-50 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center space-y-2 shadow-xs">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Connect Directly with a Real Human Agent
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Our dedicated Pakistani technical advisors are on standby to answer your questions, demonstrate features, or help you migrate products.
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Average Response: Under 3 Minutes</span>
                  </div>
                </div>

                {/* Direct Action 1: WhatsApp */}
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Direct Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Direct Action 2: Phone */}
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Helpline: {COMPANY_CONTACT.phone}</span>
                </a>

                <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-500 space-y-1">
                  <div className="font-bold text-slate-700">Office Timings:</div>
                  <div>Monday to Saturday: 9:00 AM – 9:00 PM (PKT)</div>
                  <div>Urgent support: 24/7 on WhatsApp for paid subscribers</div>
                </div>
              </div>

              <div className="text-[11px] text-center text-slate-400 pt-3 border-t border-slate-200">
                ManageO Technologies Pakistan • Islamabad, Lahore & Karachi
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
