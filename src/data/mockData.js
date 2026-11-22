export const INDUSTRY_CATEGORIES = [
  {
    id: 'retail',
    title: 'Shop & Retail',
    tagline: 'Supermarkets, Boutiques, Electronics & Department Stores',
    badge: 'High-Volume Retail',
    description: 'Command multi-branch inventory, rapid barcode checkout, vendor POs, and real-time gross margin audits built for modern retailers.',
    heroTag: 'Engineered for High-Velocity Retail',
    icon: 'ShoppingBag',
    accentColor: 'blue',
    features: [
      {
        title: 'Multi-Branch Inventory Sync',
        desc: 'Instant real-time stock balances across all locations with automated replenishment and inter-branch transfers.'
      },
      {
        title: 'Blazing Fast Barcode Scanning',
        desc: 'Zero-latency item lookups supporting standard EAN, UPC, and internal SKU weight/price barcodes.'
      },
      {
        title: 'Purchase Orders & Supplier Tracking',
        desc: 'Manage supplier bills, purchase invoices, received goods, and accounts payable effortlessly.'
      },
      {
        title: 'Margin & Profit Auditing',
        desc: 'Track Cost of Goods Sold (COGS), discounts, tax collections, and net profit margins in real-time.'
      }
    ],
    stats: [
      { value: '0.4s', label: 'Average Item Ring Time' },
      { value: '100%', label: 'Multi-branch Stock Accuracy' },
      { value: '38%', label: 'Reduction in Shrinkage & Loss' }
    ],
    sampleProducts: [
      { name: 'Organic Cotton Polo', sku: 'RET-4091', price: 'Rs. 2,450', stock: '84 pcs', status: 'In Stock' },
      { name: 'Cold Brew Blend 500g', sku: 'BEV-1022', price: 'Rs. 1,180', stock: '12 pcs', status: 'Low Stock' },
      { name: 'Wireless Bluetooth Earbuds', sku: 'ELC-8812', price: 'Rs. 5,990', stock: '31 pcs', status: 'In Stock' }
    ]
  },
  {
    id: 'beauty',
    title: 'Parlor & Beauty',
    tagline: 'Hair Salons, Spas, Barbershops & Aesthetic Clinics',
    badge: 'Appointments & Services',
    description: 'Transform client experiences with smart appointment booking, chair-side checkout, stylist commission tracking, and treatment histories.',
    heroTag: 'Designed for Stylists, Spas & Wellness',
    icon: 'Sparkles',
    accentColor: 'purple',
    features: [
      {
        title: 'Visual Appointment Calendar',
        desc: 'Color-coded scheduling with drag-and-drop bookings, automated SMS reminders, and zero double-bookings.'
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
        title: 'Retail Beauty Shelf Integration',
        desc: 'Sell shampoos, conditioners, and aftercare packages seamlessly during checkout.'
      }
    ],
    stats: [
      { value: '92%', label: 'Fewer Client No-Shows' },
      { value: '2.4x', label: 'Higher Retail Product Add-ons' },
      { value: '100%', label: 'Transparent Stylist Payouts' }
    ],
    sampleProducts: [
      { name: 'Keratin Smoothing Therapy', sku: 'SRV-01', price: 'Rs. 8,500', stock: '60 min', status: 'Available' },
      { name: 'Botanical Hair Serum 100ml', sku: 'RTL-88', price: 'Rs. 3,200', stock: '18 pcs', status: 'In Stock' },
      { name: 'Hydra-Facial Glow Package', sku: 'SRV-44', price: 'Rs. 6,000', stock: '45 min', status: 'Available' }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Dining',
    tagline: 'Dine-In, Cafes, Quick-Service, Bakeries & Cloud Kitchens',
    badge: 'Hospitality & Dining',
    description: 'Keep floor and kitchen in perfect harmony with drag-and-drop table layouts, real-time KDS, modifiers, split billing, and recipe costing.',
    heroTag: 'Crafted for Fast Kitchens & Busy Tables',
    icon: 'UtensilsCrossed',
    accentColor: 'emerald',
    features: [
      {
        title: 'Interactive Table & Floor Map',
        desc: 'Live table status indicators (Seated, Appetizers, Check Dropped, Vacant) with effortless table transfers.'
      },
      {
        title: 'Kitchen Display System (KDS)',
        desc: 'Route drinks to the bar and mains to the hot line instantly with color-coded preparation timers.'
      },
      {
        title: 'Flexible Bill Splitting & Modifiers',
        desc: 'Split by seat, split evenly, add cooking notes (no onions, extra spicy), and manage combos with ease.'
      },
      {
        title: 'Ingredient 86 & Recipe Costing',
        desc: 'Auto-disable out-of-stock dishes when ingredients run dry and protect food cost percentages.'
      }
    ],
    stats: [
      { value: '12 min', label: 'Faster Average Table Turns' },
      { value: '0 Error', label: 'Kitchen Ticket Accuracy' },
      { value: '24%', label: 'Average Ticket Value Increase' }
    ],
    sampleProducts: [
      { name: 'Wood-Fired Truffle Pizza', sku: 'FOD-301', price: 'Rs. 1,850', stock: '42 portions', status: 'Hot Kitchen' },
      { name: 'Artisan Vanilla Bean Latte', sku: 'BEV-104', price: 'Rs. 650', stock: 'Ready', status: 'Barista Bar' },
      { name: 'Smoked Beef Brisket Burger', sku: 'FOD-220', price: 'Rs. 1,420', stock: '15 portions', status: 'Low Stock' }
    ]
  }
];

export const REAL_DASHBOARD_DATA = {
  storeName: "ManageO Flagship Retail",
  currentBranch: "All Authorized Branches",
  branches: [
    "All Authorized Branches",
    "Branch 01 — Mall of Islamabad",
    "Branch 02 — DHA Phase 5 Galleria",
    "Branch 03 — Gulberg Boulevard",
    "Branch 04 — Clifton Harbor Center"
  ],
  ownerName: "Asad Rao",
  role: "BUSINESS OWNER",
  period: "01/11/2026 to 22/11/2026",
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
      title: "Total Receivables",
      value: "Rs. 0.00",
      description: "Current unpaid customer invoice balances",
      icon: "HandCoins",
      color: "green",
      category: "finance"
    },
    {
      id: "total_payables",
      title: "Total Payables",
      value: "Rs. 0.00",
      description: "Current supplier invoices less confirmed payments",
      icon: "Truck",
      color: "orange",
      category: "finance"
    },
    {
      id: "tax_collection",
      title: "Tax Collection",
      value: "Rs. 0.00",
      description: "Tax disabled in all selected branches",
      icon: "Percent",
      color: "sky",
      category: "finance"
    },
    {
      id: "discounts",
      title: "Discounts",
      value: "Rs. 9,202.32",
      description: "Line and invoice discounts, less return reversals",
      icon: "Tag",
      color: "pink",
      category: "sales"
    },
    {
      id: "revenue",
      title: "Revenue",
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
      description: "Rent, utilities, salaries and other recorded costs",
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
    { method: "Cash", amount: "Rs. 3,333,182.00", percentage: "99.8%", color: "#2563eb" },
    { method: "Card Payments", amount: "Rs. 4,400.68", percentage: "0.13%", color: "#06b6d4" },
    { method: "Mobile Wallets", amount: "Rs. 2,100.00", percentage: "0.07%", color: "#10b981" },
    { method: "Bank Transfer", amount: "Rs. 0.00", percentage: "0.0%", color: "#94a3b8" },
    { method: "Store Credit", amount: "Rs. 0.00", percentage: "0.0%", color: "#e2e8f0" }
  ],
  categoryBreakdown: [
    { name: "Daily Use Goods", amount: "Rs. 2,525,049.50", share: "75.61%", color: "bg-blue-600" },
    { name: "Beverages & Drinks", amount: "Rs. 780,398.98", share: "23.37%", color: "bg-cyan-500" },
    { name: "Packed Grocery Items", amount: "Rs. 34,309.22", share: "1.03%", color: "bg-amber-400" }
  ],
  recentActivities: [
    { time: "21 Nov at 14:28", activity: "Sale Completed", details: "INV-202611-0030 (Rs. 12,450.00) via Cash", branch: "Branch 01" },
    { time: "21 Nov at 12:15", activity: "Stock Adjusted", details: "SKU-9901 (+25 units verified by Asad Rao)", branch: "Branch 02" },
    { time: "20 Nov at 18:40", activity: "Sale Completed", details: "INV-202611-0029 (Rs. 3,890.00) via Card", branch: "Branch 01" },
    { time: "20 Nov at 15:10", activity: "Purchase Received", details: "PO-4091 from Prime Wholesale Supplies", branch: "Central Hub" },
    { time: "19 Nov at 11:05", activity: "Return Processed", details: "RET-0003 (Rs. 1,280.00) Restocked to Branch 01", branch: "Branch 01" }
  ]
};

export const HARDWARE_PRODUCTS = [
  {
    id: 'handheld',
    name: 'ManageO Mobile Terminal',
    badge: 'Best Seller',
    tagline: 'Pocket-sized powerhouse with high-speed built-in thermal printer',
    price: '$249',
    monthlyPrice: 'or $24/mo',
    features: [
      '5.5-inch HD IPS touchscreen display',
      'Built-in 58mm high-speed thermal receipt printer',
      'Integrated chip, swipe & contactless tap payments',
      'High-speed 1D/2D optical barcode scanner',
      'All-day battery life (5200 mAh)'
    ],
    idealFor: 'Line busting, tableside dining, retail curbside & mobile staff',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'register',
    name: 'ManageO Dual-Screen Register',
    badge: 'Enterprise Flagship',
    tagline: 'Dual full-HD displays with dedicated interactive customer checkout screen',
    price: '$699',
    monthlyPrice: 'or $65/mo',
    features: [
      '15.6-inch primary clerk touch display + 10.1-inch customer display',
      'Customer-facing tip selection, digital signature & receipt options',
      'Heavy-duty cast aluminum swivel body with cable concealment',
      'Universal port hub (USB, RJ11 cash drawer, Ethernet, HDMI)',
      'Instant sync with cash drawer and thermal kitchen printers'
    ],
    idealFor: 'Busy checkout counters, luxury boutiques, upscale dining & full-service salons',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'stand',
    name: 'ManageO Tablet Stand & Base',
    badge: 'Flexible & Sleek',
    tagline: 'Rotates 360° smoothly to let customers sign and tip right on screen',
    price: '$149',
    monthlyPrice: 'or $15/mo',
    features: [
      'Universal precision-milled aluminum lock mount (iPad & Android)',
      'Smooth 360-degree customer swivel mechanism',
      'Integrated contactless NFC card tap & chip insert dock',
      'Anti-theft Kensington lock slot and secure counter clamp',
      'Continuous power charging passthrough'
    ],
    idealFor: 'Cafes, specialty bakeries, barbershops & pop-up markets',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'kds',
    name: 'ManageO Kitchen / Salon Display Hub',
    badge: 'Heavy-Duty Display',
    tagline: 'Spill-resistant, heat-tested digital kitchen & service queue monitor',
    price: '$349',
    monthlyPrice: 'or $32/mo',
    features: [
      '21.5-inch rugged industrial multi-touch screen',
      'IP54 water, flour and grease-resistant front enclosure',
      'Color-coded ticket alerts (Normal, Approaching, Overdue)',
      'Custom loud buzzer audio cues for order arrival',
      'Standard VESA 100 mount compatible'
    ],
    idealFor: 'Commercial restaurant kitchens, bar dispatch & salon appointment boards',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=700&q=80'
  }
];

export const PRICING_PLANS = [
  {
    name: 'ManageO Starter',
    badge: '14-Day Free Trial',
    priceMonthly: 0,
    priceYearly: 0,
    period: 'Free forever for 1 register',
    description: 'Perfect for single stores and boutique salons getting started with modern cloud POS.',
    highlighted: false,
    cta: 'Start Free Trial',
    features: [
      '1 Register / Branch license',
      'Unlimited products & barcode catalog',
      'Standard inventory tracking & low stock alerts',
      'Accept cash, card, and digital QR payments',
      'Basic sales & daily cash-up reports',
      'Email & community support'
    ]
  },
  {
    name: 'ManageO Professional',
    badge: 'Most Popular',
    priceMonthly: 49,
    priceYearly: 39,
    period: 'per branch / month, billed annually',
    description: 'Comprehensive solution for growing retail stores, busy restaurants, and multi-staff salons.',
    highlighted: true,
    cta: 'Get Started with Pro',
    features: [
      'Up to 3 Branches & unlimited registers',
      'Real-time multi-branch inventory sync',
      'Supplier POs, vendor bills & COGS tracking',
      'Kitchen Display System (KDS) & table map',
      'Appointment calendar & stylist commission tiers',
      'Granular employee roles & audit logs',
      'Comprehensive gross & net profit accounting',
      '24/7 Priority phone & WhatsApp support'
    ]
  },
  {
    name: 'ManageO Enterprise',
    badge: 'Custom Rollout',
    priceMonthly: 129,
    priceYearly: 99,
    period: 'per branch / month, volume discounts',
    description: 'Tailored for retail chains, franchise restaurant networks, and luxury salon groups.',
    highlighted: false,
    cta: 'Talk to Sales',
    features: [
      'Unlimited branches & central warehouse management',
      'Centralized purchasing & inter-branch transfer approval',
      'Dedicated Customer Success Manager & onboarding engineer',
      'Custom ERP, accounting (SAP, QuickBooks) API integration',
      'Custom hardware provisioning & on-site staff training',
      '99.99% Guaranteed uptime SLA & data backups'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Switching to ManageO was the highest ROI decision we made this year. Tracking Rs. 6.4M in stock across 4 retail branches used to take two days of manual counting. Now it's synchronized to the second.",
    author: "Asad Rao",
    title: "Founder & Managing Director",
    company: "LINSOL Retail Group",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    category: "Shop & Retail",
    rating: 5
  },
  {
    quote: "Managing 14 hair stylists, fluctuating product commissions, and weekend walk-ins was chaos before ManageO. Our no-show rate dropped to near zero with their WhatsApp reminders, and stylist payout takes 5 minutes.",
    author: "Elena Rostova",
    title: "Creative Director & Salon Owner",
    company: "Luxe Atelier Hair & Wellness",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    category: "Parlor & Beauty",
    rating: 5
  },
  {
    quote: "Our bistro turns 180 tables on Friday nights. The Kitchen Display System routing and split billing are rock solid. Tickets never get lost and our food cost percentage is down 4% with live ingredient tracking.",
    author: "Marcus Chen",
    title: "Executive Chef & Partner",
    company: "Osteria 19 Bistro & Bar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    category: "Restaurant & Dining",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "How does ManageO handle different industries like Retail, Salons, and Restaurants?",
    answer: "When you sign up for ManageO, you choose your primary business service category (Shop & Retail, Parlor & Beauty, or Restaurant & Dining). The entire interface, navigation modules, and workflows automatically adjust! For example, Restaurants unlock visual table layouts and Kitchen Display Systems (KDS); Salons receive appointment scheduling and stylist commission splits; and Retail gets deep multi-branch inventory, barcode management, and vendor purchase orders."
  },
  {
    question: "How does the onboarding and account approval process work?",
    answer: "Creating your account takes less than 2 minutes. Once you submit your business details, branch count, and service category on the signup page, our onboarding system verifies your setup. You receive instant demo access to explore the complete dashboard immediately, and our team provides active branch credentials and optional hardware configuration assistance."
  },
  {
    question: "Can ManageO work offline if the internet connection drops?",
    answer: "Yes, 100%! ManageO features an offline-first architecture. If your local store or restaurant Wi-Fi goes down, you can keep ringing up sales, scanning barcodes, printing receipts, and taking offline card/cash transactions without interruption. As soon as connectivity restores, all transactions, stock adjustments, and sales figures automatically sync with your cloud dashboard."
  },
  {
    question: "What hardware does ManageO support?",
    answer: "ManageO is hardware-flexible. It runs seamlessly on modern iPads, Android tablets, Windows PCs, and dedicated POS terminals. We support standard thermal receipt printers (ESC/POS via USB, Bluetooth, or LAN), USB and wireless barcode scanners, cash drawers (RJ11), and customer-facing secondary displays. We also provide official ManageO all-in-one hardware kits."
  },
  {
    question: "Can I manage multiple stores or branches from one central dashboard?",
    answer: "Yes. ManageO was built specifically for multi-branch scalability. From a single owner login, you can compare branch performance, track inter-branch stock transfers, audit inventories, set branch-specific pricing or taxes, and grant granular role-based permissions to store managers and cashiers."
  },
  {
    question: "Can I migrate existing product catalogs and customer lists from Excel or another POS?",
    answer: "Absolutely. ManageO provides 1-click CSV and Excel import templates for your products, categories, SKU barcodes, supplier profiles, and customer directories. Our support team can also assist with automated migration from Square, Lightspeed, Shopify POS, or legacy systems."
  }
];

