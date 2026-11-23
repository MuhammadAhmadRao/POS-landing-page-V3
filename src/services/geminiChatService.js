/**
 * Gemini Chat Service for ManageO POS
 * Integrates Google AI Studio (Gemini API) with custom POS system instructions,
 * domain restrictions, agent escalation, and offline fallback.
 */

import { COMPANY_CONTACT } from '../data/mockData';

// Dynamic Gemini API Key from window configuration or local storage
export const DEFAULT_GEMINI_API_KEY = (typeof window !== 'undefined' && (window.__GEMINI_KEY__ || localStorage.getItem('manageo_gemini_api_key'))) || "";

// Tailored System Instruction for ManageO POS
export const SYSTEM_INSTRUCTION = `
You are the official AI Support Concierge for ManageO POS (Pakistan).
Your name is "ManageO Assistant".

CORE RULES & SCOPE RESTRICTIONS:
1. YOU ONLY ANSWER QUESTIONS RELATED TO MANAGEO POS AND POINT-OF-SALE OPERATIONS.
   - Topics allowed: ManageO POS features, modules, Pakistan market pricing in PKR, offline billing, customer Khata / Udhar, WhatsApp digital receipts, hardware independence, thermal printers, barcode scanners, branches, and account signup.
2. STRICT REFUSAL OF UNRELATED QUERIES:
   - If the user asks about anything unrelated to POS, business operations, or ManageO (such as writing general code, recipes, weather, politics, jokes, gaming, homework, etc.), you MUST politely decline:
     "I am the dedicated ManageO POS assistant. I can only assist with questions regarding our POS system, features, pricing in Pakistan, and business modules. How can I help with your store, salon, or restaurant today?"
3. ESCALATION TO REAL AGENT:
   - If a customer asks a question you do not know, asks for custom discounts, requests a live sales representative, or needs urgent technical help, prompt them to contact our human team:
     "For this specific request or personalized consultation, please connect with our real human representative! You can click the 'Real Person (WhatsApp)' tab above, or chat with us on WhatsApp at ${COMPANY_CONTACT.whatsapp} (${COMPANY_CONTACT.phone})."
4. TONE & IDENTITY:
   - Professional, warm, welcoming, and localized for Pakistan (you can greet with "Assalam-o-Alaikum").
   - Format responses concisely with clear bullet points.

KNOWLEDGE BASE:
- Modules:
  1. Shop & Retail (Ready to Ship): Clothing boutiques, jewelry stores, grocery marts, cosmetics, electronics. Barcode generation & rapid scanning, customer Khata (credit ledger), WhatsApp invoices, real-time multi-branch stock sync, FBR POS readiness.
  2. Beauty & Salon (Ready to Ship): Parlors, hair salons, barbershops, spas, bridal makeup studios. Appointment booking calendar, chair management, stylist commissions (15-20%), bridal packages, client formula histories.
  3. Restaurant & Hotel (Under Active Development - Beta Q1 2027): Cafes, dine-in, fast food, boutique hotels. Visual table floor plans, Kitchen Order Tickets (KOT) digital routing, delivery rider tracking, hotel room billing.
- Zero Hardware Traps (BYOD):
  - Pure web and cloud POS. No expensive proprietary machines needed.
  - Runs in browser on Windows PC, Mac, iPad, Android tablets, or smartphones.
  - 100% Offline Mode: When internet or electricity drops in Pakistan, billing, scanning, and printing keep working. Data auto-syncs when reconnected.
  - Connects to any standard 58mm/80mm thermal receipt printer (USB, Bluetooth, LAN) and standard barcode scanners.
- Pricing in PKR:
  - Starter Shop: ₨ 4,500/month (or ₨ 3,600/mo billed annually • Save 20%). 1 counter, unlimited products, offline billing, WhatsApp receipts.
  - Growth (Multi-Counter - Most Popular): ₨ 9,500/month (or ₨ 7,600/mo billed annually). Up to 3 branches, stock sync, stylist commissions or KOT, FBR tax ready.
  - Enterprise: ₨ 18,500/month (or ₨ 14,800/mo billed annually). Unlimited branches, central warehouse, dedicated Pakistani account manager.
  - All plans include a 14-day free trial with no credit card required.
- Local Payment Methods: Bank Transfer, Raast ID, JazzCash, Easypaisa, Visa, Mastercard.
- Contact Details:
  - WhatsApp: ${COMPANY_CONTACT.whatsapp}
  - Phone Helpline: ${COMPANY_CONTACT.phone}
  - Email: ${COMPANY_CONTACT.email}
  - Offices: Islamabad (Blue Area), Lahore (Gulberg III), Karachi (Clifton Block 4).
`;

/**
 * Intelligent Local Fallback Engine
 * Ensures the chat assistant ALWAYS gives tailored, high-quality answers
 * even if the Gemini API key has quota limits or requires billing activation.
 */
export function getLocalFallbackResponse(userQuery) {
  const q = userQuery.toLowerCase().trim();

  // Check for unrelated queries
  const unrelatedTriggers = [
    'recipe', 'cook', 'poem', 'weather', 'movie', 'song', 'joke', 'capital of', 
    'who is president', 'write python', 'write javascript', 'write code', 'solve equation',
    'translate french', 'who won'
  ];
  if (unrelatedTriggers.some(t => q.includes(t))) {
    return "I am the dedicated ManageO POS assistant. I can only assist with questions regarding our POS system, features, pricing in Pakistan, and business modules. How can I help with your store, salon, or restaurant today?";
  }

  // Escalation triggers
  const agentTriggers = ['speak to agent', 'real agent', 'human', 'call me', 'talk to person', 'representative', 'complaint', 'discount', 'custom plan'];
  if (agentTriggers.some(t => q.includes(t))) {
    return `You can connect directly with our Pakistani representative! Please click the "Real Person (WhatsApp)" tab above, or tap below to message our team on WhatsApp at ${COMPANY_CONTACT.whatsapp} (Helpline: ${COMPANY_CONTACT.phone}). We typically respond in under 3 minutes!`;
  }

  if (q.includes('offline') || q.includes('internet') || q.includes('loadshedding') || q.includes('light')) {
    return "Yes, 100%! ManageO features an offline-first architecture built specifically for Pakistan. When internet connections drop or power cuts occur, your cashiers can continue scanning barcodes, ringing sales, taking cash, and printing receipts. As soon as connectivity returns, all data automatically syncs with your central cloud database.";
  }

  if (q.includes('price') || q.includes('pkr') || q.includes('cost') || q.includes('rate') || q.includes('rupee') || q.includes('plan')) {
    return `Our plans are transparently priced in Pakistani Rupees (PKR):
• Starter Shop: ₨ 4,500/mo (₨ 3,600/mo billed annually — Save 20%)
• Growth Multi-Counter: ₨ 9,500/mo (₨ 7,600/mo billed annually)
• Enterprise Chain: ₨ 18,500/mo (₨ 14,800/mo billed annually)

All plans come with a 14-day free trial with no credit card required. We accept direct Bank Transfer, Raast ID, JazzCash, Easypaisa, and Cards.`;
  }

  if (q.includes('salon') || q.includes('parlor') || q.includes('beauty') || q.includes('barber') || q.includes('hair') || q.includes('spa')) {
    return "Our Beauty & Salon module is live and ready to deploy! It includes:\n• Visual drag-and-drop appointment calendar\n• Chair and treatment room management\n• Stylist commission calculations (e.g. 15–20% per service) and tips\n• Client service history and personalized hair/skin formulas\n• Bridal and service package bundle tracking with advance deposits.";
  }

  if (q.includes('retail') || q.includes('shop') || q.includes('cloth') || q.includes('boutique') || q.includes('jewelry') || q.includes('grocery') || q.includes('mart')) {
    return "The Shop & Retail module is live and ready to ship! Built for clothing boutiques, jewelry stores, grocery marts, and electronics outlets in Pakistan:\n• Rapid zero-latency barcode scanning & label generation\n• Customer Khata & Udhar credit ledger with WhatsApp reminders\n• Multi-branch real-time stock sync & transfer requisitions\n• WhatsApp digital PDF receipt sharing\n• FBR POS digital sales tax invoice readiness.";
  }

  if (q.includes('restaurant') || q.includes('hotel') || q.includes('food') || q.includes('cafe') || q.includes('table') || q.includes('kot')) {
    return "The Restaurant & Hotel module is currently under active development (Beta Q1 2027)! It includes:\n• Interactive floor plan & live table status\n• Kitchen Order Tickets (KOT) digital routing to kitchen screens or printers\n• Takeaway and food delivery rider management\n• Hotel guest room billing integration.\nYou can join the waitlist today for early access!";
  }

  if (q.includes('hardware') || q.includes('device') || q.includes('printer') || q.includes('machine') || q.includes('computer')) {
    return "You do NOT need to buy any expensive hardware from us! ManageO is 100% device-independent. It runs in any web browser or as an app on your existing Windows PC, laptop, Mac, iPad, Android tablet, or smartphone. It connects seamlessly with any standard 58mm or 80mm thermal receipt printer (USB, Bluetooth, LAN) and standard barcode scanners.";
  }

  if (q.includes('whatsapp') || q.includes('receipt') || q.includes('invoice') || q.includes('bill')) {
    return "Yes! ManageO allows you to send branded digital PDF invoices directly to your customer's WhatsApp (+92) with a single click at checkout. It saves thermal paper costs and lets customers easily save their receipts.";
  }

  if (q.includes('khata') || q.includes('udhar') || q.includes('credit') || q.includes('ledger')) {
    return "ManageO includes an integrated Customer Khata ledger built for Pakistan. You can set customer credit limits, track partial repayments, view outstanding receivables, and send automated WhatsApp payment reminders with the customer's balance.";
  }

  return `Assalam-o-Alaikum! ManageO is Pakistan's leading cloud & offline POS for Retail Shops, Beauty Parlors & Salons, and Restaurants.
How can I assist you? You can ask about our 100% offline mode, Pakistan PKR pricing, WhatsApp receipts, or specific modules!`;
}

/**
 * Call Google Gemini API (AI Studio)
 * Uses system_instruction to restrict scope and enforces POS specialization.
 */
export async function sendGeminiChatMessage(userQuery, chatHistory = [], customApiKey = null) {
  const apiKey = (customApiKey || DEFAULT_GEMINI_API_KEY).trim();

  // If no API key is set, immediately use our specialized local engine
  if (!apiKey) {
    return {
      text: getLocalFallbackResponse(userQuery),
      source: 'local-guard'
    };
  }

  // Build the message contents in Gemini format
  const formattedContents = chatHistory.slice(-6).map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  // Append latest user message
  formattedContents.push({
    role: 'user',
    parts: [{ text: userQuery }]
  });

  const payload = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents: formattedContents,
    generationConfig: {
      temperature: 0.25,
      maxOutputTokens: 600,
      topP: 0.95
    }
  };

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.warn("Gemini API Notice:", data.error || response.statusText);
      const fallbackText = getLocalFallbackResponse(userQuery);
      return {
        text: fallbackText,
        source: 'local-guard',
        apiError: data.error?.message || "API requires billing or key update"
      };
    }

    const candidate = data.candidates?.[0];
    const text = candidate?.content?.parts?.[0]?.text;

    if (text) {
      return {
        text: text.trim(),
        source: 'gemini-live'
      };
    }

    return {
      text: getLocalFallbackResponse(userQuery),
      source: 'local-guard'
    };
  } catch (err) {
    console.warn("Gemini fetch error, using local POS guard:", err);
    return {
      text: getLocalFallbackResponse(userQuery),
      source: 'local-guard',
      apiError: err.message
    };
  }
}
