export const INDUSTRY_CATEGORIES = [
  {
    id: 'retail',
    title: 'Shop & Retail',
    status: 'ready',
    statusLabel: 'Ready to Ship',
    statusColor: 'emerald',
    tagline: 'Clothing Boutiques, Jewelry, Grocery Marts, Cosmetics & Electronics',
    badge: 'Live & Ready to Deploy',
    description: 'Complete retail command engine for Pakistani businesses. Barcode generation, rapid offline billing, customer Khata (credit ledger), WhatsApp receipts, and real-time multi-branch stock sync.',
    heroTag: 'Engineered for High-Velocity Retail & Marts',
    icon: 'ShoppingBag',
    accentColor: 'blue',
    shopTypes: [
      'Clothing & Fashion Boutiques',
      'Gold & Jewelry Stores',
      'Cosmetics & Perfumes',
      'Supermarkets & Marts',
      'Footwear & Leather',
      'Mobile & Electronics'
    ],
    features: [
      {
        title: 'Customer Khata & Udhar Ledger',
        desc: 'Record customer credit, track pending balances, send automated payment reminders on WhatsApp, and manage customer ledgers.'
      },
      {
        title: 'Blazing Fast Barcode Scanning',
        desc: 'Zero-latency item lookups supporting standard EAN, UPC, and internal SKU weight/price barcodes.'
      },
      {
        title: 'Multi-Branch Inventory Sync',
        desc: 'Instant real-time stock balances across all locations with automated replenishment and inter-branch transfers.'
      },
      {
        title: 'WhatsApp Digital Invoices',
        desc: 'Send branded PDF receipts and invoice summaries directly to your customer’s WhatsApp with one tap.'
      }
    ],
    stats: [
      { value: '0.3s', label: 'Item Ring Time' },
      { value: '100%', label: 'Offline Resilient' },
      { value: '₨ 0', label: 'Hardware Lock-In' }
    ],
    sampleProducts: [
      { name: 'Embroidered Lawn 3-Piece', sku: 'RET-4091', price: 'Rs. 4,850', stock: '84 pcs', status: 'In Stock' },
      { name: 'Gold-Plated Designer Bangle', sku: 'JWL-1022', price: 'Rs. 8,200', stock: '12 pcs', status: 'Low Stock' },
      { name: 'Matte Liquid Lipstick Velvet', sku: 'CSM-8812', price: 'Rs. 1,650', stock: '45 pcs', status: 'In Stock' }
    ]
  },
  {
    id: 'beauty',
    title: 'Beauty & Salon',
    status: 'ready',
    statusLabel: 'Ready to Ship',
    statusColor: 'purple',
    tagline: 'Beauty Parlors, Hair Salons, Spas, Barbershops & Bridal Studios',
    badge: 'Live & Ready to Deploy',
    description: 'Tailored for parlor and salon operations. Visual appointment calendar, chair and room management, stylist commission calculations, bridal packages, and client formula histories.',
    heroTag: 'Designed for Stylists, Parlors & Wellness',
    icon: 'Sparkles',
    accentColor: 'purple',
    shopTypes: [
      'Women’s Beauty Parlors',
      'Luxury Hair Salons',
      'Gentlemen’s Barbershops',
      'Bridal Makeup Studios',
      'Day Spas & Wellness',
      'Aesthetic & Skin Clinics'
    ],
    features: [
      {
        title: 'Visual Appointment Calendar',
        desc: 'Color-coded scheduling with drag-and-drop bookings, automated WhatsApp reminders, and zero double-bookings.'
      },
      {
        title: 'Stylist Commission & Tip Tracking',
        desc: 'Automate tier-based commissions, chair splits, product sales bonuses, and tips for your beauty team.'
      },
      {
        title: 'Client Service Logs & Formulas',
        desc: 'Save personalized hair color formulas, skincare allergies, past treatment photos, and visit notes.'
      },
      {
        title: 'Bridal & Service Packages',
        desc: 'Create custom service bundles (e.g. Bridal Glow, Hair Spa + Cut) with multi-session tracking and advance deposits.'
      }
    ],
    stats: [
      { value: '94%', label: 'Fewer Client No-Shows' },
      { value: '2.4x', label: 'Retail Product Add-ons' },
      { value: '100%', label: 'Accurate Stylist Payouts' }
    ],
    sampleProducts: [
      { name: 'Keratin Smoothing Therapy', sku: 'SRV-01', price: 'Rs. 9,500', stock: '60 min', status: 'Available' },
      { name: 'Bridal HD Signature Glow', sku: 'SRV-44', price: 'Rs. 25,000', stock: '120 min', status: 'Available' },
      { name: 'Botanical Hair Serum 100ml', sku: 'RTL-88', price: 'Rs. 3,200', stock: '18 pcs', status: 'In Stock' }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Hotel',
    status: 'development',
    statusLabel: 'Under Development • Early Access',
    statusColor: 'amber',
    tagline: 'Dine-In, Cafes, Fast Food, Cloud Kitchens & Boutique Hotels',
    badge: 'Under Development (Beta)',
    description: 'Currently in active development to bring Pakistani restaurants and hotels next-level efficiency: table floor plans, Kitchen Order Tickets (KOT), rider dispatch, recipe costing, and hotel room billing.',
    heroTag: 'In Active Development — Sign Up for Early Access',
    icon: 'UtensilsCrossed',
    accentColor: 'emerald',
    shopTypes: [
      'Dine-In Restaurants',
      'Cafes & Coffee Bars',
      'Fast Food & Pizzerias',
      'Bakeries & Sweet Marts',
      'Boutique Hotels & Lodges',
      'Cloud & Dark Kitchens'
    ],
    features: [
      {
        title: 'Interactive Table & Floor Map',
        desc: 'Live table status indicators (Seated, Running KOT, Bill Requested, Available) with effortless table mergers.'
      },
      {
        title: 'Kitchen Order Tickets (KOT)',
        desc: 'Route drinks to the barista and mains to the kitchen instantly with digital KDS screens or thermal print routing.'
      },
      {
        title: 'Takeaway & Delivery Rider Tracking',
        desc: 'Manage dine-in, takeaway, and delivery orders with Foodpanda/Bykea rider assignments and delivery status.'
      },
      {
        title: 'Hotel Room Billing Integration',
        desc: 'Charge meals, laundry, and room services directly to guest room folios with centralized check-out invoice.'
      }
    ],
    stats: [
      { value: 'Beta', label: 'Current Release Stage' },
      { value: '0 Error', label: 'Target KOT Routing' },
      { value: 'Q1 2027', label: 'Public Rollout' }
    ],
    sampleProducts: [
      { name: 'Dum Pukht Mutton Karahi (1kg)', sku: 'FOD-301', price: 'Rs. 3,200', stock: 'Kitchen', status: 'Hot Line' },
      { name: 'Special Mint Margarita', sku: 'BEV-104', price: 'Rs. 450', stock: 'Barista', status: 'Beverage Bar' },
      { name: 'Deluxe Executive Suite Night', sku: 'HTL-01', price: 'Rs. 14,000', stock: 'Rooms', status: 'Reservation' }
    ]
  }
];

export const REAL_DASHBOARD_DATA = {
  storeName: "ManageO Flagship Retail",
  currentBranch: "All Authorized Branches",
  branches: [
    "All Authorized Branches",
    "Branch 01 — Mall of Islamabad",
    "Branch 02 — DHA Phase 5 Galleria (Lahore)",
    "Branch 03 — Dolmen Mall Clifton (Karachi)",
    "Branch 04 — Gulberg Boulevard (Lahore)"
  ],
  ownerName: "Demo User",
  role: "BUSINESS OWNER",
  period: "01/11/2026 to 23/11/2026",
  currency: "Rs.",
  metrics: [
    {
      id: "total_sales",
      title: "Total Sales",
      value: "Rs. 3,348,347.00",
      description: "Gross sales before discounts, returns and tax",
      icon: "Wallet",
      color: "blue",
      category: "sales"
    },
    {
      id: "total_purchases",
      title: "Total Purchases",
      value: "Rs. 4,605.00",
      description: "Purchase invoices in this period, including tax",
      icon: "Truck",
      color: "orange",
      category: "inventory"
    },
    {
      id: "total_orders",
      title: "Total Orders",
      value: "33",
      description: "Completed, paid orders in this period",
      icon: "ShoppingCart",
      color: "emerald",
      category: "sales"
    },
    {
      id: "total_customers",
      title: "Total Customers",
      value: "42",
      description: "Active registered customers; current directory",
      icon: "Users",
      color: "purple",
      category: "crm"
    },
    {
      id: "sales_returns",
      title: "Sales Returns",
      value: "Rs. 1,280.00",
      description: "3 posted returns; before reversed discounts",
      icon: "RotateCcw",
      color: "rose",
      category: "sales"
    },
    {
      id: "total_products",
      title: "Total Products",
      value: "96",
      description: "Current authorized product catalog",
      icon: "Package",
      color: "amber",
      category: "inventory"
    },
    {
      id: "stock_value",
      title: "Stock Value",
      value: "Rs. 6,401,084.00",
      description: "Current on-hand stock at configured purchase cost",
      icon: "Boxes",
      color: "cyan",
      category: "inventory"
    },
    {
      id: "low_stock_items",
      title: "Low Stock Items",
      value: "24",
      description: "Low and critical product / branch positions",
      icon: "AlertTriangle",
      color: "yellow",
      category: "inventory",
      alert: true
    },
    {
      id: "out_of_stock",
      title: "Out of Stock",
      value: "4",
      description: "Product / branch positions with no available stock",
      icon: "Ban",
      color: "red",
      category: "inventory",
      alert: true
    },
    {
      id: "total_receivables",
      title: "Khata / Receivables",
      value: "Rs. 142,500.00",
      description: "Current customer credit (Udhar) pending balances",
      icon: "HandCoins",
      color: "green",
      category: "finance"
    },
    {
      id: "total_payables",
      title: "Vendor Payables",
      value: "Rs. 85,000.00",
      description: "Current supplier invoices less confirmed payments",
      icon: "Truck",
      color: "orange",
      category: "finance"
    },
    {
      id: "tax_collection",
      title: "Tax Collection (FBR Ready)",
      value: "Rs. 18,450.00",
      description: "FBR POS sales tax registered in active branches",
      icon: "Percent",
      color: "sky",
      category: "finance"
    },
    {
      id: "discounts",
      title: "Discounts Given",
      value: "Rs. 9,202.32",
      description: "Line and invoice discounts, less return reversals",
      icon: "Tag",
      color: "pink",
      category: "sales"
    },
    {
      id: "revenue",
      title: "Net Revenue",
      value: "Rs. 3,337,864.68",
      description: "Net sales after discounts and approved returns",
      icon: "TrendingUp",
      color: "indigo",
      category: "finance"
    },
    {
      id: "gross_profit",
      title: "Gross Profit",
      value: "Rs. 573,697.68",
      description: "Gross margin 17.19% across all lines",
      icon: "BarChart3",
      color: "teal",
      category: "finance"
    },
    {
      id: "operating_expenses",
      title: "Operating Expenses",
      value: "Rs. 190,250.00",
      description: "Rent, utilities, generator fuel, salaries & recorded costs",
      icon: "CreditCard",
      color: "amber",
      category: "finance"
    },
    {
      id: "net_profit",
      title: "Net Profit",
      value: "Rs. 383,447.68",
      description: "Net margin 11.49% for selected timeline",
      icon: "Coins",
      color: "emerald",
      category: "finance"
    }
  ],
  paymentBreakdown: [
    { method: "Cash", amount: "Rs. 2,980,182.00", percentage: "89.2%", color: "#2563eb" },
    { method: "Debit / Credit Card", amount: "Rs. 248,400.00", percentage: "7.4%", color: "#06b6d4" },
    { method: "Raast / Bank Transfer", amount: "Rs. 85,200.00", percentage: "2.5%", color: "#10b981" },
    { method: "JazzCash / Easypaisa", amount: "Rs. 34,565.00", percentage: "1.0%", color: "#f59e0b" }
  ],
  categoryBreakdown: [
    { name: "Ready-to-Wear Apparel", amount: "Rs. 1,845,049.50", share: "55.28%", color: "bg-blue-600" },
    { name: "Fabrics & Unstitched", amount: "Rs. 980,398.98", share: "29.37%", color: "bg-cyan-500" },
    { name: "Accessories & Shawls", amount: "Rs. 512,416.20", share: "15.35%", color: "bg-purple-500" }
  ],
  recentActivities: [
    { time: "23 Nov at 14:28", activity: "Sale Completed", details: "INV-202611-0035 (Rs. 14,800.00) via Cash", branch: "Branch 01" },
    { time: "23 Nov at 12:15", activity: "WhatsApp Receipt Sent", details: "Receipt #1084 delivered to +92 300 8472910", branch: "Branch 02" },
    { time: "22 Nov at 18:40", activity: "Khata Udhar Recorded", details: "Tariq Mahmood: +Rs. 6,500 balance added", branch: "Branch 01" },
    { time: "22 Nov at 15:10", activity: "Purchase Received", details: "PO-4091 from Lahore Textile Hub", branch: "Central Hub" },
    { time: "21 Nov at 11:05", activity: "Stock Auto-Synced", details: "All 4 branches synced with cloud database", branch: "System" }
  ]
};

export const PRICING_PLANS = [
  {
    name: 'Starter Shop',
    badge: 'Single Counter',
    priceMonthly: '4,500',
    priceYearly: '3,600',
    periodMonthly: '₨ 4,500 / month, billed monthly',
    periodYearly: '₨ 3,600 / month (₨ 43,200 billed yearly • Save 20%)',
    description: 'Ideal for independent boutiques, single-chair salons, and neighborhood stores getting started with modern cloud POS.',
    highlighted: false,
    cta: 'Start 14-Day Free Trial',
    features: [
      '1 Store / 1 POS Register counter',
      'Unlimited products, services & barcode catalog',
      '100% Offline Mode (Keeps ringing without internet)',
      'Customer Khata & Udhar credit ledger',
      'WhatsApp digital receipt sharing',
      'Connects with any thermal printer & barcode scanner',
      'Daily cash drawer close & Z-report',
      'WhatsApp & Email support'
    ]
  },
  {
    name: 'Growth & Multi-Counter',
    badge: 'Most Popular in Pakistan',
    priceMonthly: '9,500',
    priceYearly: '7,600',
    periodMonthly: '₨ 9,500 / month, billed monthly',
    periodYearly: '₨ 7,600 / month (₨ 91,200 billed yearly • Save 20%)',
    description: 'Designed for expanding retail shops, busy multi-staff beauty parlors, and multi-counter outlets across Pakistan.',
    highlighted: true,
    cta: 'Start 14-Day Free Trial',
    features: [
      'Up to 3 Branches or 3 billing counters included',
      'Real-time multi-branch stock sync & transfers',
      'Stylist commission tracking & salon appointment calendar',
      'FBR POS digital tax invoice readiness',
      'Automated customer payment reminders on WhatsApp',
      'Supplier purchase orders & accounts payable',
      'Role-based permissions (Cashier, Manager, Owner)',
      'Priority 24/7 Phone & WhatsApp support'
    ]
  },
  {
    name: 'Enterprise Chain',
    badge: 'Custom Scale',
    priceMonthly: '18,500',
    priceYearly: '14,800',
    periodMonthly: '₨ 18,500 / month, billed monthly',
    periodYearly: '₨ 14,800 / month (₨ 177,600 billed yearly • Save 20%)',
    description: 'Tailored for nationwide retail chains, salon franchises, and multi-location businesses needing custom rollouts.',
    highlighted: false,
    cta: 'Contact Sales / Custom Plan',
    features: [
      'Unlimited branches, counters & central warehouses',
      'Inter-branch stock transfer requisition & approvals',
      'Custom accounting & ERP integration (Excel, SAP, QuickBooks)',
      'Early access to Restaurant & Hotel module',
      'Dedicated Pakistani Account Manager',
      'On-site or video staff onboarding training',
      '99.99% Cloud uptime SLA with hybrid offline backup',
      'Direct WhatsApp VIP emergency line'
    ]
  }
];

export const DEVICE_FREEDOM_HIGHLIGHTS = [
  {
    title: 'Zero Proprietary Hardware Required',
    description: 'Unlike old-fashioned POS providers charging ₨ 150,000+ for proprietary machines, ManageO runs on devices you already own.',
    icon: 'Laptop'
  },
  {
    title: '100% Offline Resilience',
    description: 'Pakistan load shedding or internet breakdown? ManageO keeps ringing sales, scanning barcodes, and printing receipts offline. Once online, it syncs automatically.',
    icon: 'WifiOff'
  },
  {
    title: 'Runs on Windows, Mac, iPad, Android & Phones',
    description: 'Open in any browser or install as a progressive web app. Use a desktop PC at the counter, an iPad for salon styling, or an Android phone on the go.',
    icon: 'Smartphone'
  },
  {
    title: 'Universal Thermal Printer & Scanner Support',
    description: 'Connect standard 58mm or 80mm thermal receipt printers (USB, Bluetooth, or LAN), USB barcode scanners, and cash drawers without driver hassles.',
    icon: 'Printer'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Switching to ManageO was the best decision for our clothing boutique in Lahore. Internet drops daily in our market, but our billing counter never stops. And customers love receiving their receipts on WhatsApp!",
    author: "Asad Rao",
    title: "Owner & Managing Director",
    company: "LINSOL Fashion Boutique (Lahore & Islamabad)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    category: "Shop & Retail",
    rating: 5
  },
  {
    quote: "Managing 8 stylists, calculating commissions, and handling bridal booking deposits was a headache before ManageO. The appointment board and stylist commission reports saved us 15 hours every week.",
    author: "Zainab Malik",
    title: "Creative Director",
    company: "Luxe Glow Salon & Spa (DHA Karachi)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    category: "Beauty & Salon",
    rating: 5
  },
  {
    quote: "We tested the beta preview of the Restaurant & Hotel POS. The table layout and KOT ticket routing to our kitchen screen is seamless. Can't wait for the official rollout!",
    author: "Hamza Farooq",
    title: "General Manager",
    company: "The Roastery & Bistro (Islamabad)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    category: "Restaurant & Hotel",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Do I need to buy any specific hardware to run ManageO?",
    answer: "No! ManageO is 100% hardware-independent. You do NOT need to buy expensive proprietary POS hardware from us. ManageO runs smoothly on any laptop, Windows PC, Mac, iPad, Android tablet, or smartphone you already own. It connects seamlessly with any standard thermal receipt printer (58mm/80mm USB, Bluetooth, or LAN) and standard USB/wireless barcode scanners."
  },
  {
    question: "What happens if our internet goes down or there is load shedding?",
    answer: "ManageO is built offline-first. Even when your Wi-Fi disconnects or power fluctuates, your cashiers can continue ringing up sales, scanning barcodes, taking cash, and issuing receipts without interruption. As soon as connectivity returns, all data automatically syncs with your central cloud database."
  },
  {
    question: "What are the three business modules supported?",
    answer: "ManageO features three specialized modules: (1) Shop & Retail (Ready to Ship) for clothing boutiques, jewelry stores, grocery marts, and electronics; (2) Beauty & Salon (Ready to Ship) for parlors, hair salons, barbershops, and spas; and (3) Restaurant & Hotel (Under Active Development / Early Access Beta) for cafes, dine-in restaurants, fast food, and boutique hotels."
  },
  {
    question: "Can I manage customer credit (Khata / Udhar) and send WhatsApp receipts?",
    answer: "Yes! In Pakistan, customer trust and credit (Khata) are essential. ManageO includes an integrated Khata ledger to track outstanding customer balances and send payment reminders. Plus, you can send instant branded PDF invoices directly to customer WhatsApp numbers with a single click."
  },
  {
    question: "Are the prices listed in PKR (Pakistani Rupees)? What payment methods are supported?",
    answer: "Yes, all our prices are shown transparently in Pakistani Rupees (₨ PKR). We support local Pakistani payment methods including direct Bank Transfer, Raast ID, JazzCash, Easypaisa, as well as Visa and Mastercard. All plans come with a 14-day free trial with zero upfront payment."
  },
  {
    question: "Can I get a demo or speak with a local Pakistani representative?",
    answer: "Absolutely! You can click the floating chat widget at the bottom right to chat instantly with our AI assistant or click to connect directly with our Pakistani support team on WhatsApp at +92 300 0000000. We also provide live remote demos and onboarding assistance."
  }
];

export const COMPANY_CONTACT = {
  phone: "+92 51 889 0000",
  whatsapp: "+92 300 0000000",
  whatsappUrl: "https://wa.me/923000000000?text=Hello%20ManageO%20POS%20Team!%20I%20would%20like%20to%20learn%20more%20about%20your%20POS%20system.",
  email: "sales@manageo-pos.com",
  supportEmail: "support@manageo-pos.com",
  offices: [
    { city: "Islamabad", address: "Evacuee Trust Complex, F-5/1, Blue Area" },
    { city: "Lahore", address: "Gulberg III, Main Boulevard, Lahore" },
    { city: "Karachi", address: "Clifton Block 4, Harbor Front, Karachi" }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@manageo.pk" },
    { name: "Facebook", url: "https://facebook.com", handle: "manageo.pakistan" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "manageo-technologies" },
    { name: "TikTok", url: "https://tiktok.com", handle: "@manageo_pos" },
    { name: "YouTube", url: "https://youtube.com", handle: "@ManageOPOS" }
  ]
};
