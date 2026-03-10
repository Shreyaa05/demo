export interface Project {
  id: string
  name: string
  shortName: string
  category: string
  categoryTag: string
  image: string
  description: string
  fullDescription: string
  colSpan: string
  gradient: string
  tags: string[]
  year: string
  client: string
  duration: string
  results: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: 'nova',
    name: 'Nova Analytics Dashboard',
    shortName: 'NOVA',
    category: 'SaaS Platform',
    categoryTag: 'SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time analytics platform with custom dashboards, data visualization, and AI-powered insights for enterprise teams.',
    fullDescription: 'Nova Analytics is a comprehensive SaaS platform built for enterprise teams to monitor, analyze, and act on real-time data. We designed and developed the entire product from scratch — from initial wireframes through to a fully deployed, scalable application serving thousands of concurrent users. The platform features custom dashboard builders, advanced charting libraries, AI-powered anomaly detection, and seamless integrations with 40+ data sources.',
    colSpan: 'c7',
    gradient: 'g1',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS'],
    year: '2025',
    client: 'TechNova Inc.',
    duration: '16 weeks',
    results: ['3x faster data insights', '99.99% uptime achieved', '40+ integrations built', '12,000 daily active users'],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ]
  },
  {
    id: 'bloom',
    name: 'Bloom Beauty Store',
    shortName: 'BLOOM',
    category: 'E-Commerce',
    categoryTag: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    description: 'Luxury beauty e-commerce with AR try-on features, subscription management, and seamless Shopify integration.',
    fullDescription: 'Bloom Beauty is a premium e-commerce experience built for a fast-growing direct-to-consumer beauty brand. The project included a fully custom Shopify headless storefront with AR-powered virtual try-on for cosmetics, a subscription box management system, and an influencer referral engine. The design language reflects the brand\'s luxury positioning with elegant typography, soft gradients, and cinematic product photography.',
    colSpan: 'c5',
    gradient: 'g2',
    tags: ['Next.js', 'Shopify Hydrogen', 'Three.js', 'Stripe', 'Sanity CMS'],
    year: '2025',
    client: 'Bloom Beauty Co.',
    duration: '12 weeks',
    results: ['142% increase in conversions', 'AR try-on used by 67% of visitors', '$2.4M revenue in first quarter', '4.9★ average customer rating'],
    gallery: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
    ]
  },
  {
    id: 'base',
    name: 'Base CRM System',
    shortName: 'BASE',
    category: 'Web App',
    categoryTag: 'Web App',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    description: 'Custom CRM platform with AI-powered lead scoring, pipeline automation, and real-time team collaboration.',
    fullDescription: 'Base CRM was designed and built as a replacement for off-the-shelf CRM tools that couldn\'t meet the client\'s specific workflow requirements. Features include AI-powered lead scoring, automated pipeline management, real-time collaboration tools, custom reporting dashboards, and deep integration with the client\'s existing tech stack. The system handles over 50,000 contacts and processes hundreds of deals daily.',
    colSpan: 'c4',
    gradient: 'g3',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI API'],
    year: '2024',
    client: 'Meridian Group',
    duration: '14 weeks',
    results: ['50% faster deal closure', '35% increase in qualified leads', '98% team adoption rate', 'ROI positive in 3 months'],
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    ]
  },
  {
    id: 'vela',
    name: 'Vela Fashion Brand',
    shortName: 'VELA',
    category: 'Branding + Web',
    categoryTag: 'Branding',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    description: 'Complete brand identity and immersive website for a luxury sustainable fashion label launching globally.',
    fullDescription: 'Vela Fashion required a complete brand overhaul and digital presence for their global launch. We developed the full brand identity — logo, typography system, color palette, photography direction — alongside an immersive website experience featuring parallax storytelling, lookbook galleries, and an integrated e-commerce platform. The site was designed to evoke the brand\'s commitment to sustainable luxury.',
    colSpan: 'c4',
    gradient: 'g4',
    tags: ['Figma', 'GSAP', 'Next.js', 'Shopify', 'Prismic CMS'],
    year: '2025',
    client: 'Vela Fashion House',
    duration: '10 weeks',
    results: ['Brand recognition up 280%', 'Featured in Vogue Digital', '95% positive brand sentiment', '60K followers in first month'],
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    ]
  },
  {
    id: 'koda',
    name: 'Koda App Launch',
    shortName: 'KODA',
    category: 'Landing Page',
    categoryTag: 'Landing',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    description: 'High-conversion product launch landing page with animated interactions and waitlist management system.',
    fullDescription: 'Koda needed a stunning product launch page to generate buzz and collect waitlist signups before their mobile app launch. We created an animated, conversion-optimized landing page featuring scroll-driven animations, interactive product previews, a gamified referral system, and real-time waitlist counter. The page was built for speed and SEO performance from day one.',
    colSpan: 'c4',
    gradient: 'g5',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Supabase'],
    year: '2024',
    client: 'Koda Technologies',
    duration: '3 weeks',
    results: ['48,000 waitlist signups', '12% viral referral rate', '0.8s page load time', 'Featured on Product Hunt #1'],
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    ]
  },
  {
    id: 'drift',
    name: 'Drift Project Management',
    shortName: 'DRIFT',
    category: 'SaaS',
    categoryTag: 'SaaS',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    description: 'Modern project management SaaS with Kanban boards, time tracking, resource allocation, and client portals.',
    fullDescription: 'Drift is a project management platform designed for creative agencies. It features Kanban boards with custom workflows, integrated time tracking, resource allocation with capacity planning, automated client reporting, and branded client portals. The platform was built to replace a patchwork of tools the agency was using, consolidating everything into one beautiful, fast interface.',
    colSpan: 'c6',
    gradient: 'g6',
    tags: ['React', 'TypeScript', 'GraphQL', 'Prisma', 'Vercel'],
    year: '2025',
    client: 'Craftware Agency',
    duration: '20 weeks',
    results: ['Replaced 5 separate tools', '28% productivity increase', '3,400 active users', '$480K ARR in first year'],
    gallery: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    ]
  },
  {
    id: 'orion',
    name: 'Orion Marketplace',
    shortName: 'ORION',
    category: 'E-Commerce',
    categoryTag: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    description: 'Multi-vendor marketplace with real-time inventory, smart search, vendor dashboards, and payment splitting.',
    fullDescription: 'Orion Marketplace is a multi-vendor e-commerce platform connecting independent sellers with conscious consumers. We built a complete marketplace ecosystem including vendor onboarding, real-time inventory management, AI-powered product recommendations, smart search with natural language processing, automated payment splitting, and comprehensive analytics dashboards for both vendors and the platform admin.',
    colSpan: 'c6',
    gradient: 'g7',
    tags: ['Next.js', 'Stripe Connect', 'Algolia', 'Redis', 'Docker'],
    year: '2024',
    client: 'Orion Commerce Ltd.',
    duration: '18 weeks',
    results: ['240 vendors onboarded', '$3.2M GMV in 6 months', '4.7★ app store rating', '89% vendor retention'],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ]
  },
]
