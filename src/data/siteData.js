const img = (id, extra = '') =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80${extra}`

export const categories = [
  {
    id: 'educational',
    name: 'Educational Toys',
    count: 48,
    color: 'from-sky-400 to-blue-500',
    image: img('photo-1503676260728-1c00da094a0b'),
  },
  {
    id: 'soft',
    name: 'Soft Toys',
    count: 36,
    color: 'from-pink-400 to-rose-500',
    image: img('photo-1558060370-d644479cb6f7'),
  },
  {
    id: 'outdoor',
    name: 'Outdoor Games',
    count: 29,
    color: 'from-lime-400 to-green-500',
    image: img('photo-1471295253337-3ceaaedca402'),
  },
  {
    id: 'blocks',
    name: 'Building Blocks',
    count: 41,
    color: 'from-amber-400 to-orange-500',
    image: img('photo-1587654780291-39c9404d746b'),
  },
  {
    id: 'rc',
    name: 'Remote Control Toys',
    count: 22,
    color: 'from-violet-400 to-purple-600',
    image: img('photo-1558618666-fcd25c85cd64'),
  },
  {
    id: 'baby',
    name: 'Baby Toys',
    count: 33,
    color: 'from-cyan-400 to-teal-500',
    image: img('photo-1515488042361-ee00e0ddd4e4'),
  },
]

export const products = [
  {
    id: 1,
    name: 'Rainbow Wooden Blocks',
    price: 1299,
    originalPrice: 1699,
    rating: 4.8,
    reviews: 214,
    category: 'blocks',
    badge: 'Bestseller',
    image: img('photo-1587654780291-39c9404d746b'),
    gallery: [img('photo-1566576912321-d58ddd7a6088'), img('photo-1596461404969-9ae70f2830c1')],
    description:
      'Bright, stackable wooden blocks that spark creativity and early STEM skills. Smooth edges, non-toxic paints, and 60 colorful pieces in a cotton storage bag.',
  },
  {
    id: 2,
    name: 'Cuddle Cloud Teddy',
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 482,
    category: 'soft',
    badge: 'New',
    image: img('photo-1558060370-d644479cb6f7'),
    gallery: [img('photo-1535572290543-960a8046f5af'), img('photo-1516627145497-ae6968895b74')],
    description:
      'Ultra-soft plush teddy with hypoallergenic filling. Perfect hug companion for bedtime stories and daytime adventures.',
  },
  {
    id: 3,
    name: 'Junior Science Lab Kit',
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 156,
    category: 'educational',
    badge: 'STEM',
    image: img('photo-1532094349884-543bc11b234d'),
    gallery: [img('photo-1503676260728-1c00da094a0b'), img('photo-1582719471384-894fbb16e074')],
    description:
      'Safe, parent-approved experiments that make chemistry feel like magic. Includes goggles, test tubes, and 20 guided activities for ages 8+.',
  },
  {
    id: 4,
    name: 'Turbo RC Stunt Car',
    price: 2499,
    originalPrice: 3199,
    rating: 4.6,
    reviews: 301,
    category: 'rc',
    badge: 'Hot',
    image: img('photo-1581235720704-06d3acfcb36f'),
    gallery: [img('photo-1558618666-fcd25c85cd64'), img('photo-1473968512647-3e447244af8f')],
    description:
      '360° flips, LED headlights, and all-terrain tires. Rechargeable battery with 20 minutes of high-speed fun indoors or outdoors.',
  },
  {
    id: 5,
    name: 'Melody Baby Rattle Set',
    price: 649,
    originalPrice: 799,
    rating: 4.8,
    reviews: 198,
    category: 'baby',
    badge: 'Safe',
    image: img('photo-1515488042361-ee00e0ddd4e4'),
    gallery: [img('photo-1516627145497-ae6968895b74'), img('photo-1503454537195-1dcabb73ffb9')],
    description:
      'A 5-piece sensory set with gentle chimes, teething-safe silicone, and high-contrast colors designed for tiny hands.',
  },
  {
    id: 6,
    name: 'Backyard Bubble Soccer',
    price: 1599,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 88,
    category: 'outdoor',
    badge: 'Summer',
    image: img('photo-1471295253337-3ceaaedca402'),
    gallery: [img('photo-1518611012118-696072aa579a'), img('photo-1503454537195-1dcabb73ffb9')],
    description:
      'Inflatable bubble kit for backyard matches, races, and giggles. Includes pump, repair patch, and a family-friendly rule card.',
  },
  {
    id: 7,
    name: 'Space Explorer Puzzle',
    price: 749,
    originalPrice: 999,
    rating: 4.7,
    reviews: 267,
    category: 'educational',
    badge: '200 pcs',
    image: img('photo-1596461404969-9ae70f2830c1'),
    gallery: [img('photo-1503676260728-1c00da094a0b'), img('photo-1532094349884-543bc11b234d')],
    description:
      'A glow-in-the-dark solar system puzzle that teaches planet names while building focus and patience. Ages 6+.',
  },
  {
    id: 8,
    name: 'Pastel Unicorn Plush',
    price: 1099,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 390,
    category: 'soft',
    badge: 'Loved',
    image: img('photo-1535572290543-960a8046f5af'),
    gallery: [img('photo-1558060370-d644479cb6f7'), img('photo-1516627145497-ae6968895b74')],
    description:
      'Sparkly horn, silky mane, and extra-squishy body. Machine-washable cover and embroidered (not plastic) eyes.',
  },
  {
    id: 9,
    name: 'Mega Castle Builder',
    price: 2199,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 144,
    category: 'blocks',
    badge: '-18%',
    image: img('photo-1566576912321-d58ddd7a6088'),
    gallery: [img('photo-1587654780291-39c9404d746b'), img('photo-1596461404969-9ae70f2830c1')],
    description:
      '312 interlocking bricks with turrets, a drawbridge, and mini figures. Compatible with most popular brick systems.',
  },
  {
    id: 10,
    name: 'Sky Drone Mini',
    price: 3299,
    originalPrice: 3999,
    rating: 4.4,
    reviews: 76,
    category: 'rc',
    badge: 'Limited',
    image: img('photo-1473968512647-3e447244af8f'),
    gallery: [img('photo-1581235720704-06d3acfcb36f'), img('photo-1558618666-fcd25c85cd64')],
    description:
      'Beginner drone with altitude hold, one-key return, and propeller guards. Ideal first flight for curious kids (with adult help).',
  },
  {
    id: 11,
    name: 'Tiny Tunes Piano',
    price: 1399,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 121,
    category: 'baby',
    badge: 'Music',
    image: img('photo-1511379938547-c1f69419868d'),
    gallery: [img('photo-1515488042361-ee00e0ddd4e4'), img('photo-1503454537195-1dcabb73ffb9')],
    description:
      '25 light-up keys, animal sounds, and volume control for living-room sanity. Encourages rhythm and early language.',
  },
  {
    id: 12,
    name: 'Adventure Jump Rope Set',
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviews: 64,
    category: 'outdoor',
    badge: 'Active',
    image: img('photo-1518611012118-696072aa579a'),
    gallery: [img('photo-1471295253337-3ceaaedca402'), img('photo-1503454537195-1dcabb73ffb9')],
    description:
      'Adjustable ropes, colorful handles, and a challenge card of 12 playground games. Great for coordination and energy burns.',
  },
]

export const whyChoose = [
  {
    title: 'Safe & Child-Friendly',
    text: 'Every toy is tested for non-toxic materials, rounded edges, and age-appropriate design.',
    accent: 'bg-coral',
    image: img('photo-1503454537195-1dcabb73ffb9'),
  },
  {
    title: 'Quality Toys',
    text: 'We partner with trusted makers so pieces last through siblings, cousins, and playdates.',
    accent: 'bg-sun',
    image: img('photo-1566576912321-d58ddd7a6088'),
  },
  {
    title: 'Fast Delivery',
    text: 'Most orders ship within 24 hours with real-time tracking from our warehouse to your door.',
    accent: 'bg-mint',
    image: img('photo-1581235720704-06d3acfcb36f'),
  },
  {
    title: 'Educational Value',
    text: 'Play that builds motor skills, curiosity, and confidence — not just screen time substitutes.',
    accent: 'bg-sky',
    image: img('photo-1503676260728-1c00da094a0b'),
  },
  {
    title: 'Happy Customers',
    text: 'Thousands of parents rate IDEALS 4.8★ for packaging, support, and smile-at-unboxing moments.',
    accent: 'bg-grape',
    image: img('photo-1516627145497-ae6968895b74'),
  },
]

export const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Mom of two, Pune',
    rating: 5,
    quote:
      'The wooden blocks became our evening ritual. Quality feels premium and the colors still look new after months of stacking towers.',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Rahul Mehta',
    role: 'Dad, Bengaluru',
    rating: 5,
    quote:
      'Ordered the RC car as a birthday surprise. It arrived a day early, packed beautifully, and my son has not stopped grinning.',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'Priya Nair',
    role: 'Preschool teacher',
    rating: 4,
    quote:
      'We use IDEALS puzzles in class. Kids stay engaged, and parents keep asking where we sourced them. Super helpful customer chat too.',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    name: 'Vikram Joshi',
    role: 'Parent, Jaipur',
    rating: 5,
    quote:
      'Wishlisted a few toys, compared prices, and checked out in minutes. The teddy is even softer than the photos suggested.',
    avatar: 'https://i.pravatar.cc/120?img=15',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
