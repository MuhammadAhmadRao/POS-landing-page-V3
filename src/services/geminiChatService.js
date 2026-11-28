/**
 * Gemini Chat Service for ManageO POS
 * Integrates Google AI Studio (Gemini API) with custom POS system instructions,
 * domain restrictions, agent escalation, and offline fallback.
 */

import { COMPANY_CONTACT } from '../data/mockData';

const ENV_GEMINI_API_KEY = (import.meta.env?.VITE_GEMINI_API_KEY || '').trim();

export const PROJECT_DEFAULT_GEMINI_KEY = ENV_GEMINI_API_KEY;
export const MAX_STORED_MESSAGES = 50;
export const MAX_API_CONTEXT_MESSAGES = 20;

const GEMINI_MODELS = [
  'gemini-1.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash-8b',
  'gemini-1.5-pro'
];

/**
 * Resolve the active Gemini API key from window override, localStorage, or fixed project env.
 * Automatically clears stale browser-saved keys when the project's fixed env key changes.
 */
export function getConfiguredGeminiApiKey() {
  if (typeof window !== 'undefined') {
    const windowKey = (window.__GEMINI_KEY__ || '').trim();
    if (windowKey) return windowKey;

    if (ENV_GEMINI_API_KEY) {
      const fingerprint = ENV_GEMINI_API_KEY.slice(0, 16);
      const prevFingerprint = localStorage.getItem('manageo_gemini_env_fp');
      if (prevFingerprint !== fingerprint) {
        localStorage.removeItem('manageo_gemini_api_key');
        localStorage.setItem('manageo_gemini_env_fp', fingerprint);
      }
    }

    const storedKey = (localStorage.getItem('manageo_gemini_api_key') || '').trim();
    if (storedKey) return storedKey;
  }
  return ENV_GEMINI_API_KEY;
}

// Default Gemini API Key resolved from fixed project configuration or browser storage
export const DEFAULT_GEMINI_API_KEY = getConfiguredGeminiApiKey();

// Tailored System Instruction for ManageO POS
export const SYSTEM_INSTRUCTION = `
You are "ManageO Assistant", the concise customer support assistant for ManageO POS (Pakistan).

STRICT GROUNDING & ANTI-HALLUCINATION RULES:
1. ONLY use facts explicitly written in the KNOWLEDGE BASE below or stated by the user in this chat.
2. NEVER invent or guess features, integrations, prices, discounts, release dates, links, or policies not in the KNOWLEDGE BASE.
3. If the user asks about something not covered in the KNOWLEDGE BASE (e.g. unsupported integrations, custom pricing, specific hardware model checks), say briefly that you don't have that exact detail and direct them to the "Real Person (WhatsApp)" tab (${COMPANY_CONTACT.whatsapp} / ${COMPANY_CONTACT.phone}).
4. SCOPE REFUSAL: If asked about anything unrelated to ManageO POS or retail/salon/restaurant POS operations (coding, weather, recipes, jokes, homework, general trivia), reply with:
   "I only assist with ManageO POS features, pricing in PKR, and business setup. How can I help with your store, salon, or restaurant?"

CONVERSATION STYLE & LENGTH RULES (CRITICAL):
5. NO REPEATED GREETINGS: Never start replies with "Assalam-o-Alaikum", "Hello", or "Welcome"—the chat already greeted the user. Only greet back if the user's message is solely a greeting (e.g., "hi", "salam").
6. BE BRIEF & DIRECT:
   - Simple or specific questions: answer in 1–3 short sentences (under 45 words).
   - Multi-part or overview questions: use at most 3–4 short bullet points (under 85 words total).
   - Answer ONLY what was asked—do not dump unrelated modules or full pricing tables unless asked.
   - Do not end replies with repetitive filler like "How can I assist you today?".
   - Use clean formatting: put each bullet on its own line starting with "• " and keep spacing readable.
7. REMEMBER CONTEXT: Use details the user shared earlier in the conversation (such as their business type, city, branch count, or budget) instead of asking again.

KNOWLEDGE BASE:
- Modules:
  1. Shop & Retail (Live / Ready to Ship): Clothing boutiques, jewelry, grocery marts, cosmetics, electronics. Barcode generation & scanning, Customer Khata / Udhar ledger, WhatsApp digital PDF receipts, multi-branch stock sync, FBR POS sales tax readiness.
  2. Beauty & Salon (Live / Ready to Ship): Beauty parlors, hair salons, barbershops, spas, bridal studios. Visual appointment calendar, chair/room management, stylist commissions (e.g. 15–20%) & tips, bridal/service packages with advance deposits, client formula logs.
  3. Restaurant & Hotel (Under Development — Beta Q1 2027): Dine-in, cafes, fast food, boutique hotels. Table floor plans, Kitchen Order Tickets (KOT), delivery rider tracking, hotel room billing. Early-access waitlist open.
- Hardware & Offline (BYOD):
  - Web/cloud POS; runs in browser on existing Windows PC, Mac, iPad, Android tablet, or smartphone (no proprietary hardware needed).
  - 100% Offline Mode: Billing, barcode scanning, and receipt printing continue during internet or power outages; auto-syncs when online.
  - Supports standard 58mm/80mm thermal receipt printers (USB, Bluetooth, LAN) and USB/wireless barcode scanners.
- Pricing in PKR (14-day free trial, no credit card required, zero hidden transaction fees):
  - Starter Shop: ₨ 4,500/mo (₨ 3,600/mo billed annually — Save 20%). 1 counter/store, unlimited products, offline mode, Khata, WhatsApp receipts.
  - Growth & Multi-Counter (Most Popular): ₨ 9,500/mo (₨ 7,600/mo billed annually). Up to 3 branches/counters, real-time stock sync, stylist commissions & salon calendar, FBR POS tax readiness, role permissions.
  - Enterprise Chain: ₨ 18,500/mo (₨ 14,800/mo billed annually). Unlimited branches & central warehouse, ERP/accounting export (Excel, SAP, QuickBooks), early Restaurant & Hotel access, dedicated Pakistani account manager.
- Payments Accepted: Bank Transfer, Raast ID, JazzCash, Easypaisa, Visa, Mastercard.
- Contact & Offices:
  - WhatsApp: ${COMPANY_CONTACT.whatsapp} | Helpline: ${COMPANY_CONTACT.phone} (Mon–Sat, 9 AM–9 PM PKT; 24/7 WhatsApp for paid subscribers)
  - Email: ${COMPANY_CONTACT.email}
  - Offices: Islamabad (Blue Area), Lahore (Gulberg III), Karachi (Clifton Block 4).
`;

const TOPIC_HANDLERS = [
  {
    keywords: [
      'recipe', 'cook', 'poem', 'weather', 'movie', 'song', 'joke', 'capital of',
      'who is president', 'write python', 'write javascript', 'write code', 'solve equation',
      'translate french', 'who won', 'cricket score', 'bitcoin', 'homework'
    ],
    response: () =>
      "I am the dedicated ManageO POS assistant. I can only assist with questions regarding our POS system, features, pricing in Pakistan, and business modules. How can I help with your store, salon, or restaurant today?"
  },
  {
    keywords: [
      'speak to agent', 'real agent', 'human', 'call me', 'talk to person',
      'representative', 'complaint', 'discount', 'custom plan', 'whatsapp agent'
    ],
    response: () =>
      `You can connect directly with our Pakistani representative! Click the "Real Person (WhatsApp)" tab above, or message our team on WhatsApp at ${COMPANY_CONTACT.whatsapp} (Helpline: ${COMPANY_CONTACT.phone}). We typically respond in under 3 minutes!`
  },
  {
    keywords: ['offline', 'internet', 'loadshedding', 'load shedding', 'light', 'electricity', 'wifi', 'sync'],
    response: () =>
      "Yes, 100%! ManageO features an offline-first architecture built specifically for Pakistan. When internet connections drop or power cuts occur, your cashiers can continue scanning barcodes, ringing sales, taking cash, and printing receipts. As soon as connectivity returns, all data automatically syncs with your central cloud database."
  },
  {
    keywords: ['price', 'pricing', 'pkr', 'cost', 'costs', 'rate', 'rates', 'rupee', 'rupees', 'plan', 'plans', 'package', 'packages', 'monthly', 'yearly', 'annual', 'fee', 'fees'],
    response: () =>
      `Our plans are transparently priced in Pakistani Rupees (PKR):\n• Starter Shop: ₨ 4,500/mo (₨ 3,600/mo billed annually — Save 20%)\n• Growth Multi-Counter: ₨ 9,500/mo (₨ 7,600/mo billed annually)\n• Enterprise Chain: ₨ 18,500/mo (₨ 14,800/mo billed annually)\n\nAll plans include a 14-day free trial with no credit card required and zero hidden transaction fees.`
  },
  {
    keywords: ['jazzcash', 'easypaisa', 'raast', 'bank', 'payment', 'payments', 'visa', 'mastercard', 'pay'],
    response: () =>
      "We support convenient Pakistani and international payment methods in PKR:\n• Raast ID & Direct Bank Transfer\n• JazzCash & Easypaisa\n• Visa & Mastercard\n\nYou can start with a 14-day free trial before choosing any payment option."
  },
  {
    keywords: ['trial', 'free', 'signup', 'sign up', 'register', 'demo', 'account', 'start', 'join', 'onboard', 'onboarding'],
    response: () =>
      "Getting started takes under 2 minutes:\n• Every plan includes a 14-day free trial with no credit card required.\n• Click 'Start 14-Day Free Trial' on the page to create your store account, or try the Live Dashboard Demo directly.\n• Need a guided walkthrough? Our team also offers live remote demos via WhatsApp at " + COMPANY_CONTACT.whatsapp + "."
  },
  {
    keywords: ['salon', 'salons', 'parlor', 'parlors', 'beauty', 'barber', 'barbershop', 'hair', 'spa', 'spas', 'bridal', 'stylist', 'stylists', 'appointment', 'appointments'],
    response: () =>
      "Our Beauty & Salon module is live and ready to deploy! It includes:\n• Visual drag-and-drop appointment calendar with WhatsApp reminders\n• Chair and treatment room management\n• Automated stylist commission calculations (e.g. 15–20% per service) and tips\n• Client service logs and personalized hair/skin formulas\n• Bridal and multi-session package tracking with advance deposits."
  },
  {
    keywords: ['retail', 'shop', 'shops', 'cloth', 'clothing', 'boutique', 'boutiques', 'jewelry', 'grocery', 'mart', 'marts', 'cosmetic', 'cosmetics', 'electronics', 'store', 'stores'],
    response: () =>
      "The Shop & Retail module is live and ready to ship! Built for clothing boutiques, jewelry stores, grocery marts, and electronics outlets in Pakistan:\n• Rapid zero-latency barcode scanning & label generation\n• Customer Khata & Udhar credit ledger with WhatsApp reminders\n• Multi-branch real-time stock sync & transfer requisitions\n• WhatsApp digital PDF receipt sharing\n• FBR POS digital sales tax invoice readiness."
  },
  {
    keywords: ['restaurant', 'restaurants', 'hotel', 'hotels', 'food', 'cafe', 'cafes', 'table', 'tables', 'kot', 'kitchen', 'delivery', 'rider', 'dine'],
    response: () =>
      "The Restaurant & Hotel module is currently under active development (Beta Q1 2027)! It includes:\n• Interactive floor plan & live table status\n• Kitchen Order Tickets (KOT) digital routing to kitchen screens or printers\n• Takeaway and food delivery rider management\n• Hotel guest room billing integration.\nYou can sign up for early access today!"
  },
  {
    keywords: ['fbr', 'tax', 'taxes', 'gst', 'sales tax'],
    response: () =>
      "ManageO supports FBR POS digital sales tax invoice readiness (included in Growth & Enterprise plans), helping Pakistani retail and multi-branch businesses track tax collection cleanly across branches."
  },
  {
    keywords: ['branch', 'branches', 'multi-branch', 'multi branch', 'stock', 'inventory', 'warehouse', 'barcode', 'barcodes', 'sku', 'transfer', 'transfers'],
    response: () =>
      "ManageO gives you real-time multi-branch inventory & stock control:\n• Instant stock balances across branches (Starter: 1 counter, Growth: up to 3 branches, Enterprise: unlimited branches & central warehouse)\n• Inter-branch stock transfer requisitions & approvals\n• Low-stock and out-of-stock alerts\n• Standard EAN, UPC, and internal SKU barcode generation & rapid scanning."
  },
  {
    keywords: ['report', 'reports', 'analytics', 'profit', 'revenue', 'dashboard', 'z-report', 'expense', 'expenses', 'margin'],
    response: () =>
      "ManageO includes a live financial & operations dashboard:\n• Real-time Gross Sales, Net Revenue, Gross & Net Profit margins\n• Daily cash drawer close & Z-report\n• Payment method breakdown (Cash, Card, Raast, JazzCash/Easypaisa)\n• Operating expenses, vendor payables, and customer receivables tracking."
  },
  {
    keywords: ['staff', 'employee', 'employees', 'cashier', 'cashiers', 'manager', 'role', 'roles', 'permission', 'permissions', 'attendance'],
    response: () =>
      "You can manage your team with role-based permissions (Cashier, Manager, Business Owner), track stylist commissions & tips for salons, and monitor branch-level sales activity securely."
  },
  {
    keywords: ['hardware', 'device', 'devices', 'printer', 'printers', 'machine', 'machines', 'computer', 'laptop', 'ipad', 'android', 'phone', 'scanner', 'scanners'],
    response: () =>
      "You do NOT need to buy any expensive hardware from us! ManageO is 100% device-independent. It runs in any web browser or as an app on your existing Windows PC, laptop, Mac, iPad, Android tablet, or smartphone, and connects with any standard 58mm/80mm thermal receipt printer (USB, Bluetooth, LAN) and USB/wireless barcode scanners."
  },
  {
    keywords: ['whatsapp', 'receipt', 'receipts', 'invoice', 'invoices', 'bill', 'bills', 'billing', 'pdf'],
    response: () =>
      "Yes! ManageO lets you send branded digital PDF invoices directly to your customer's WhatsApp (+92) with a single click at checkout. It saves thermal paper costs and lets customers keep digital receipts."
  },
  {
    keywords: ['khata', 'udhar', 'credit', 'ledger', 'receivable', 'receivables', 'balance', 'balances'],
    response: () =>
      "ManageO includes an integrated Customer Khata ledger built for Pakistan. You can set customer credit limits, track partial repayments, view outstanding receivables, and send automated WhatsApp payment reminders with the customer's balance."
  },
  {
    keywords: ['contact', 'office', 'offices', 'location', 'locations', 'address', 'addresses', 'islamabad', 'lahore', 'karachi', 'phone', 'email', 'timing', 'hours', 'support'],
    response: () =>
      `You can reach ManageO Pakistan anytime:\n• WhatsApp: ${COMPANY_CONTACT.whatsapp}\n• Helpline: ${COMPANY_CONTACT.phone} (Mon–Sat, 9:00 AM – 9:00 PM PKT; 24/7 WhatsApp for paid subscribers)\n• Email: ${COMPANY_CONTACT.email}\n• Offices: Islamabad (Blue Area), Lahore (Gulberg III), Karachi (Clifton Block 4).`
  },
  {
    keywords: ['about', 'overview', 'this project', 'manageo', 'features', 'modules', 'tell me more', 'explain', 'what is'],
    response: () =>
      "ManageO POS is an all-in-one Cloud & 100% Offline Point-of-Sale system built for Pakistani businesses:\n• Shop & Retail (Live): Barcode billing, Customer Khata/Udhar, WhatsApp PDF receipts, multi-branch stock sync, FBR readiness\n• Beauty & Salon (Live): Visual appointment calendar, stylist commissions, bridal packages, client formula logs\n• Restaurant & Hotel (Beta Q1 2027): Table floor plans, KOT kitchen routing, rider tracking\n• Runs on any existing PC, Mac, iPad, or phone with standard 58mm/80mm thermal printers."
  }
];

function matchesAnyKeyword(query, keywords) {
  return keywords.some((kw) => {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${escaped}\\b`, 'i').test(query);
  });
}

/**
 * Intelligent Local Fallback Engine
 * Ensures the chat assistant ALWAYS gives tailored, context-aware answers
 * even if the Gemini API key has quota/billing limits or is offline.
 */
export function getLocalFallbackResponse(userQuery, chatHistory = []) {
  const q = userQuery.toLowerCase().trim();

  // Handle pure greetings separately so they don't repeat the same generic message
  if (/^(hi|hello|hey|aoa|assalam[\s-]*o[\s-]*alaikum|salam|good\s*(morning|afternoon|evening))[\s!?.]*$/i.test(q)) {
    return "Wa Alaikum Assalam! How can I help your business today? You can ask me about ManageO's Shop & Retail module, Beauty & Salon bookings, 100% offline billing, PKR pricing, Khata ledger, or hardware support.";
  }

  for (const handler of TOPIC_HANDLERS) {
    if (matchesAnyKeyword(q, handler.keywords)) {
      return handler.response();
    }
  }

  // Contextual fallback referencing the user's actual query and avoiding duplicate consecutive replies
  const lastAiReply = [...chatHistory].reverse().find((m) => m.sender === 'ai')?.text || '';
  const snippet = userQuery.trim().slice(0, 60);
  const primaryReply = `I can help with "${snippet}" for ManageO POS! Could you share a bit more detail — for example, are you asking about:\n• Retail Shop, Beauty Salon, or Restaurant modules?\n• PKR pricing, 14-day free trial, or JazzCash/Easypaisa/Raast payments?\n• Offline mode, thermal printers, Khata ledger, or FBR readiness?\n\nOr click "Real Person (WhatsApp)" above to chat live with our Pakistani team at ${COMPANY_CONTACT.whatsapp}.`;

  if (lastAiReply === primaryReply) {
    return `For specific details about "${snippet}", our Pakistani POS advisors can help you directly right now on WhatsApp at ${COMPANY_CONTACT.whatsapp} (or call ${COMPANY_CONTACT.phone}). You can also tap one of the Common Questions below to explore features and PKR pricing.`;
  }

  return primaryReply;
}

/**
 * Format chat history so Gemini always receives alternating user/model turns
 * starting with a 'user' turn (never leading with the initial AI welcome greeting).
 */
function buildGeminiContents(chatHistory, userQuery) {
  const rawTurns = (chatHistory || [])
    .slice(-MAX_API_CONTEXT_MESSAGES)
    .filter((msg) => msg && typeof msg.text === 'string' && msg.text.trim())
    .map((msg) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text.trim() }]
    }));

  // Drop leading model turns (e.g. the initial welcome message)
  while (rawTurns.length > 0 && rawTurns[0].role !== 'user') {
    rawTurns.shift();
  }

  // Merge consecutive same-role turns so roles strictly alternate
  const alternating = [];
  for (const turn of rawTurns) {
    const prev = alternating[alternating.length - 1];
    if (prev && prev.role === turn.role) {
      prev.parts[0].text += `\n${turn.parts[0].text}`;
    } else {
      alternating.push(turn);
    }
  }

  // Ensure the final appended userQuery doesn't create two consecutive user turns
  const lastTurn = alternating[alternating.length - 1];
  if (lastTurn && lastTurn.role === 'user') {
    lastTurn.parts[0].text += `\n${userQuery.trim()}`;
  } else {
    alternating.push({
      role: 'user',
      parts: [{ text: userQuery.trim() }]
    });
  }

  return alternating;
}

function formatGeminiApiError(status, errorObj) {
  const rawMessage = errorObj?.message || '';
  const details = errorObj?.details || [];
  const reason = details[0]?.reason || '';

  if (reason === 'ACCESS_TOKEN_TYPE_UNSUPPORTED' || rawMessage.includes('ACCESS_TOKEN_TYPE_UNSUPPORTED')) {
    return 'Google API Key Notice (401 ACCESS_TOKEN_TYPE_UNSUPPORTED): This key lacks permission for generativelanguage.googleapis.com. In Google Cloud Console > APIs & Services > Credentials, open this key and set API restrictions to "Don\'t restrict key" or select "Generative Language API" (not "Gemini API"), or create a key directly at aistudio.google.com/app/apikey.';
  }
  if (status === 403 && rawMessage.toLowerCase().includes('billing')) {
    return 'Gemini API (403): Free tier is unavailable for this project — enable billing in Google AI Studio (aistudio.google.com/billing). Using ManageO Guard in the meantime.';
  }
  if (status === 401 || status === 403) {
    return `Gemini API (${status}): ${rawMessage || 'API key unauthorized or restricted'}`;
  }
  if (status === 429) {
    return 'Gemini API (429): Rate limit or quota exceeded. Using ManageO Guard.';
  }
  return rawMessage || `Gemini API error (${status || 'network'})`;
}

/**
 * Call Google Gemini API (AI Studio)
 * Uses system_instruction to restrict scope and enforces POS specialization.
 */
export async function sendGeminiChatMessage(userQuery, chatHistory = [], customApiKey = null) {
  const apiKey = (customApiKey || getConfiguredGeminiApiKey()).trim();

  // If no API key is set, immediately use our specialized local engine
  if (!apiKey) {
    return {
      text: getLocalFallbackResponse(userQuery, chatHistory),
      source: 'local-guard'
    };
  }

  const payload = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents: buildGeminiContents(chatHistory, userQuery),
    generationConfig: {
      temperature: 0.15,
      maxOutputTokens: 280,
      topP: 0.9
    }
  };

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        lastError = formatGeminiApiError(response.status, data.error);
        console.warn(`Gemini API Notice (${model}):`, data.error || response.statusText);
        // Retry next model only for transient/model availability errors (404/429/500/503)
        if ([404, 429, 500, 503].includes(response.status)) {
          continue;
        }
        return {
          text: getLocalFallbackResponse(userQuery, chatHistory),
          source: 'local-guard',
          apiError: lastError
        };
      }

      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.map((p) => p.text).filter(Boolean).join('\n');

      if (text) {
        return {
          text: text.trim(),
          source: 'gemini-live',
          model
        };
      }
    } catch (err) {
      lastError = err.message;
      console.warn(`Gemini fetch error (${model}), trying fallback:`, err);
    }
  }

  return {
    text: getLocalFallbackResponse(userQuery, chatHistory),
    source: 'local-guard',
    ...(lastError ? { apiError: lastError } : {})
  };
}
