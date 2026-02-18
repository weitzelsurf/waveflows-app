const { useState, useEffect, useCallback } = React;

// Simple SVG Icons as React elements
const Heart = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('path', { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }));

const MapPin = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('path', { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), React.createElement('circle', { cx: "12", cy: "10", r: "3" }));

const TrendingUp = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('polyline', { points: "23 6 13.5 15.5 8.5 10.5 1 18" }), React.createElement('polyline', { points: "17 6 23 6 23 12" }));

const TrendingDown = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('polyline', { points: "23 18 13.5 8.5 8.5 13.5 1 6" }), React.createElement('polyline', { points: "17 18 23 18 23 12" }));

const Minus = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('line', { x1: "5", y1: "12", x2: "19", y2: "12" }));

const Bell = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('path', { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), React.createElement('path', { d: "M13.73 21a2 2 0 0 1-3.46 0" }));

const Search = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('circle', { cx: "11", cy: "11", r: "8" }), React.createElement('path', { d: "m21 21-4.35-4.35" }));

const Star = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "currentColor", ...props 
}, React.createElement('polygon', { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" }));

const Activity = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('polyline', { points: "22,12 18,12 15,21 9,3 6,12 2,12" }));

const Download = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), React.createElement('polyline', { points: "7,10 12,15 17,10" }), React.createElement('line', { x1: "12", y1: "15", x2: "12", y2: "3" }));

const Wifi = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('path', { d: "M5 12.55a11 11 0 0 1 14.08 0" }), React.createElement('path', { d: "M1.42 9a16 16 0 0 1 21.16 0" }), React.createElement('path', { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }), React.createElement('circle', { cx: "12", cy: "20", r: "1" }));

const WifiOff = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('line', { x1: "2", y1: "2", x2: "22", y2: "22" }), React.createElement('path', { d: "M8.5 16.5a5 5 0 0 1 7 0" }), React.createElement('path', { d: "M2 8.82a15 15 0 0 1 4.17-2.65" }), React.createElement('path', { d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76" }), React.createElement('path', { d: "M16.85 11.25a10 10 0 0 1 2.22 1.68" }), React.createElement('path', { d: "M5 13a10 10 0 0 1 5.24-2.76" }), React.createElement('circle', { cx: "12", cy: "20", r: "1" }));

const RefreshCw = ({ className, ...props }) => React.createElement('svg', { 
  className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, ...props 
}, React.createElement('polyline', { points: "23 4 23 10 17 10" }), React.createElement('polyline', { points: "1 20 1 14 7 14" }), React.createElement('path', { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }));

const WaveFlowsPWA = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [favorites, setFavorites] = useState(['glenwood', 'durango']);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  // --- NEW: Live flow state ---
  const [liveFlows, setLiveFlows] = useState({});      // { gaugeId: { flow, trend, lastUpdated } }
  const [isFetching, setIsFetching] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  // ─────────────────────────────────────────────────────────────────────────────
  // River spots with USGS gauge IDs added.
  // gaugeId comes from https://waterdata.usgs.gov/nwis/rt
  // Spots without a reliable nearby gauge have gaugeId: null (fall back to static data).
  // ─────────────────────────────────────────────────────────────────────────────
  const riverSpots = [
    // South Platte River System
    // All South Platte spots near Littleton/Denver share gauge 09GPR (S Platte @ Englewood)
    {
      id: 'miracle-wave',
      name: 'Miracle Wave',
      river: 'South Platte River',
      location: 'Littleton, CO',
      gaugeId: '07099970', // South Platte at Englewood
      currentFlow: 420,
      optimalRange: [300, 800],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Popular urban wave with consistent features',
      difficulty: 'Intermediate',
      recentReport: 'Clean wave today, good for practicing tricks.',
      reportTime: '2 hours ago'
    },
    {
      id: 'reynolds-landing',
      name: 'Reynolds Landing',
      river: 'South Platte River',
      location: 'Littleton, CO',
      gaugeId: '07099970',
      currentFlow: 420,
      optimalRange: [250, 700],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Beginner-friendly wave with easy access',
      difficulty: 'Beginner-Intermediate',
      recentReport: 'Perfect for learning, very forgiving.',
      reportTime: '4 hours ago'
    },
    {
      id: 'union-chutes',
      name: 'Union Chutes',
      river: 'South Platte River',
      location: 'Englewood, CO',
      gaugeId: '07099970',
      currentFlow: 420,
      optimalRange: [200, 600],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Multiple features and waves',
      difficulty: 'Intermediate',
      recentReport: 'Good variety of features working well.',
      reportTime: '5 hours ago'
    },
    {
      id: 'river-run-park',
      name: 'River Run Park',
      river: 'South Platte River',
      location: 'Commerce City, CO',
      gaugeId: '06714000', // South Platte at Denver
      currentFlow: 420,
      optimalRange: [300, 800],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Modern whitewater park with multiple features',
      difficulty: 'All Levels',
      recentReport: 'All features running nicely.',
      reportTime: '1 hour ago'
    },
    {
      id: 'beaver-wave',
      name: 'Beaver Wave',
      river: 'South Platte River',
      location: 'Littleton, CO',
      gaugeId: '07099970',
      currentFlow: 420,
      optimalRange: [250, 650],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Natural wave formation',
      difficulty: 'Intermediate',
      recentReport: 'Wave is holding shape well.',
      reportTime: '3 hours ago'
    },
    {
      id: '16th-street-wave',
      name: '16th Street Wave',
      river: 'South Platte River',
      location: 'Denver, CO',
      gaugeId: '06714000',
      currentFlow: 420,
      optimalRange: [300, 700],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Downtown Denver wave',
      difficulty: 'Intermediate',
      recentReport: 'Busy spot but wave is working.',
      reportTime: '2 hours ago'
    },
    {
      id: 'trestle-wave',
      name: 'Trestle Wave',
      river: 'South Platte River',
      location: 'Littleton, CO',
      gaugeId: '07099970',
      currentFlow: 420,
      optimalRange: [200, 600],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Wave near historic trestle bridge',
      difficulty: 'Intermediate',
      recentReport: 'Good session this morning.',
      reportTime: '4 hours ago'
    },
    {
      id: 'daves-wave',
      name: "Dave's Wave",
      river: 'South Platte River',
      location: 'Littleton, CO',
      gaugeId: '07099970',
      currentFlow: 420,
      optimalRange: [250, 650],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 410, 405, 400, 395],
      description: 'Named after local river surfer Dave',
      difficulty: 'Intermediate-Advanced',
      recentReport: 'Technical wave, requires skill.',
      reportTime: '6 hours ago'
    },

    // Arkansas River System
    {
      id: 'one-five',
      name: '1.5',
      river: 'Arkansas River',
      location: 'Canon City, CO',
      gaugeId: '07087050', // Arkansas at Canon City
      currentFlow: 890,
      optimalRange: [600, 1500],
      unit: 'cfs',
      trend: 'rising',
      status: 'good',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Classic Arkansas River wave',
      difficulty: 'Advanced',
      recentReport: 'Powerful wave, great for experienced surfers.',
      reportTime: '1 hour ago'
    },
    {
      id: 'buena-vista-park',
      name: 'Buena Vista Park',
      river: 'Arkansas River',
      location: 'Buena Vista, CO',
      gaugeId: '07087050', // Arkansas at Buena Vista
      currentFlow: 890,
      optimalRange: [400, 1200],
      unit: 'cfs',
      trend: 'rising',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Popular whitewater park with multiple features',
      difficulty: 'All Levels',
      recentReport: 'Epic conditions, all features firing!',
      reportTime: '30 min ago'
    },
    {
      id: 'canyon-doors',
      name: 'Canyon Doors',
      river: 'Arkansas River',
      location: 'Browns Canyon, CO',
      gaugeId: '07091200', // Arkansas near Nathrop
      currentFlow: 890,
      optimalRange: [500, 1500],
      unit: 'cfs',
      trend: 'rising',
      status: 'good',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Natural wave in scenic canyon setting',
      difficulty: 'Advanced',
      recentReport: 'Beautiful setting, challenging wave.',
      reportTime: '2 hours ago'
    },
    {
      id: 'salida-park',
      name: 'Salida Park',
      river: 'Arkansas River',
      location: 'Salida, CO',
      gaugeId: '07091200',
      currentFlow: 890,
      optimalRange: [300, 1000],
      unit: 'cfs',
      trend: 'rising',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Premier whitewater park in heart of Salida',
      difficulty: 'All Levels',
      recentReport: 'Perfect flows, amazing session!',
      reportTime: '45 min ago'
    },
    {
      id: 'florence-river-park',
      name: 'Florence River Park',
      river: 'Arkansas River',
      location: 'Florence, CO',
      gaugeId: '07096000',
      currentFlow: 890,
      optimalRange: [200, 800],
      unit: 'cfs',
      trend: 'rising',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Family-friendly park with beginner features',
      difficulty: 'Beginner-Intermediate',
      recentReport: 'Great for kids and beginners.',
      reportTime: '1 hour ago'
    },
    {
      id: 'pueblo-park',
      name: 'Pueblo Park',
      river: 'Arkansas River',
      location: 'Pueblo, CO',
      gaugeId: '07099970', // Arkansas at Pueblo
      currentFlow: 890,
      optimalRange: [250, 900],
      unit: 'cfs',
      trend: 'rising',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [890, 920, 950, 980, 1010],
      description: 'Urban whitewater park in Pueblo',
      difficulty: 'All Levels',
      recentReport: 'Consistent features, good variety.',
      reportTime: '2 hours ago'
    },

    // Colorado River System
    {
      id: 'pumphouse-wave',
      name: 'Pumphouse Wave',
      river: 'Colorado River',
      location: 'Kremmling, CO',
      gaugeId: '09058000', // Colorado at Kremmling
      currentFlow: 1650,
      optimalRange: [800, 2500],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'Natural wave upstream from Glenwood',
      difficulty: 'Intermediate-Advanced',
      recentReport: 'Solid wave, less crowded than Glenwood.',
      reportTime: '3 hours ago'
    },
    {
      id: 'glenwood',
      name: 'Glenwood Wave',
      river: 'Colorado River',
      location: 'Glenwood Springs, CO',
      gaugeId: '09085000', // Colorado at Glenwood Springs
      currentFlow: 1650,
      optimalRange: [1200, 2500],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'World-famous river wave, very popular',
      difficulty: 'Intermediate',
      recentReport: 'Crowded but wave is clean and powerful.',
      reportTime: '1 hour ago'
    },
    {
      id: 'big-sur',
      name: 'Big Sur',
      river: 'Colorado River',
      location: 'Glenwood Springs, CO',
      gaugeId: '09085000',
      currentFlow: 1650,
      optimalRange: [1000, 2200],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'Wave downstream from Glenwood',
      difficulty: 'Advanced',
      recentReport: 'Technical wave, challenging ride.',
      reportTime: '2 hours ago'
    },
    {
      id: 'lucky-7',
      name: 'Lucky 7',
      river: 'Colorado River',
      location: 'Rifle, CO',
      gaugeId: '09095500', // Colorado at Cameo (near Rifle)
      currentFlow: 1650,
      optimalRange: [800, 2000],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'Natural wave formation near Rifle',
      difficulty: 'Intermediate',
      recentReport: 'Good alternative to Glenwood crowds.',
      reportTime: '4 hours ago'
    },
    {
      id: 'las-colonias',
      name: 'Las Colonias',
      river: 'Colorado River',
      location: 'Grand Junction, CO',
      gaugeId: '09095500',
      currentFlow: 1650,
      optimalRange: [600, 1800],
      unit: 'cfs',
      trend: 'falling',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'Whitewater park in Grand Junction',
      difficulty: 'All Levels',
      recentReport: 'Multiple features working perfectly.',
      reportTime: '1 hour ago'
    },
    {
      id: '5th-street-wave',
      name: '5th St Wave (GJ)',
      river: 'Colorado River',
      location: 'Grand Junction, CO',
      gaugeId: '09095500',
      currentFlow: 1650,
      optimalRange: [500, 1600],
      unit: 'cfs',
      trend: 'falling',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [1650, 1620, 1590, 1560, 1530],
      description: 'Urban wave in downtown Grand Junction',
      difficulty: 'Intermediate',
      recentReport: 'Consistent wave, easy access.',
      reportTime: '2 hours ago'
    },

    // Cache la Poudre River
    {
      id: 'bto',
      name: 'BTO (Bridges Take Out)',
      river: 'Cache la Poudre River',
      location: 'Fort Collins, CO',
      gaugeId: '06752000', // Cache la Poudre at Fort Collins
      currentFlow: 320,
      optimalRange: [200, 600],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [320, 315, 310, 305, 300],
      description: 'Natural wave at popular takeout',
      difficulty: 'Intermediate',
      recentReport: 'Good wave when flows cooperate.',
      reportTime: '3 hours ago'
    },
    {
      id: 'poudre-whitewater-park',
      name: 'Poudre River Whitewater Park',
      river: 'Cache la Poudre River',
      location: 'Fort Collins, CO',
      gaugeId: '06752000',
      currentFlow: 320,
      optimalRange: [150, 500],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [320, 315, 310, 305, 300],
      description: 'Modern whitewater park in Fort Collins',
      difficulty: 'All Levels',
      recentReport: 'Well-designed features for all levels.',
      reportTime: '2 hours ago'
    },

    // Clear Creek
    {
      id: 'lawson',
      name: 'Lawson',
      river: 'Clear Creek',
      location: 'Lawson, CO',
      gaugeId: '06719505', // Clear Creek at Golden
      currentFlow: 180,
      optimalRange: [120, 350],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [180, 175, 170, 165, 160],
      description: 'Mountain wave with scenic backdrop',
      difficulty: 'Intermediate',
      recentReport: 'Beautiful setting, good wave.',
      reportTime: '4 hours ago'
    },
    {
      id: 'golden',
      name: 'Golden',
      river: 'Clear Creek',
      location: 'Golden, CO',
      gaugeId: '06719505',
      currentFlow: 180,
      optimalRange: [150, 400],
      unit: 'cfs',
      trend: 'stable',
      status: 'marginal',
      lastUpdated: '—',
      forecast: [180, 175, 170, 165, 160],
      description: 'Urban wave perfect for after-work sessions',
      difficulty: 'Intermediate',
      recentReport: 'A bit low but still surfable.',
      reportTime: '2 hours ago'
    },

    // Other Colorado Rivers
    {
      id: 'gunnison-park',
      name: 'Gunnison Park',
      river: 'Gunnison River',
      location: 'Gunnison, CO',
      gaugeId: '09114500', // Gunnison at Gunnison
      currentFlow: 450,
      optimalRange: [300, 800],
      unit: 'cfs',
      trend: 'rising',
      status: 'good',
      lastUpdated: '—',
      forecast: [450, 470, 490, 510, 530],
      description: 'Whitewater park in Gunnison',
      difficulty: 'All Levels',
      recentReport: 'Good flows, features working well.',
      reportTime: '1 hour ago'
    },
    {
      id: 'montrose-park',
      name: 'Montrose Park',
      river: 'Uncompahgre River',
      location: 'Montrose, CO',
      gaugeId: '09149500', // Uncompahgre at Montrose
      currentFlow: 220,
      optimalRange: [150, 400],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [220, 215, 210, 205, 200],
      description: 'Family-friendly whitewater park',
      difficulty: 'Beginner-Intermediate',
      recentReport: 'Great for beginners and families.',
      reportTime: '3 hours ago'
    },
    {
      id: 'm-wave',
      name: 'M-Wave',
      river: 'Uncompahgre River',
      location: 'Montrose, CO',
      gaugeId: '09149500',
      currentFlow: 220,
      optimalRange: [120, 350],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [220, 215, 210, 205, 200],
      description: 'Popular wave in Montrose area',
      difficulty: 'Intermediate',
      recentReport: 'Consistent wave, good for practice.',
      reportTime: '4 hours ago'
    },
    {
      id: 'durango',
      name: 'Durango Town Waves',
      river: 'Animas River',
      location: 'Durango, CO',
      gaugeId: '09361500', // Animas at Durango
      currentFlow: 650,
      optimalRange: [400, 1000],
      unit: 'cfs',
      trend: 'rising',
      status: 'good',
      lastUpdated: '—',
      forecast: [650, 680, 710, 740, 770],
      description: 'Multiple waves through downtown Durango',
      difficulty: 'All Levels',
      recentReport: 'Several waves to choose from.',
      reportTime: '2 hours ago'
    },
    {
      id: 'charlies-hole',
      name: "Charlie's Hole",
      river: 'Yampa River',
      location: 'Steamboat Springs, CO',
      gaugeId: '09239500', // Yampa at Steamboat Springs
      currentFlow: 380,
      optimalRange: [250, 700],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [380, 375, 370, 365, 360],
      description: 'Classic hole feature in Steamboat',
      difficulty: 'Advanced',
      recentReport: 'Retentive but fun for experienced paddlers.',
      reportTime: '5 hours ago'
    },
    {
      id: 'basalt-whitewater-park',
      name: 'Basalt Whitewater Park',
      river: 'Roaring Fork River',
      location: 'Basalt, CO',
      gaugeId: '09081600', // Roaring Fork at Basalt
      currentFlow: 290,
      optimalRange: [200, 550],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [290, 280, 270, 260, 250],
      description: 'Modern park with multiple features',
      difficulty: 'All Levels',
      recentReport: 'Well-designed features, good variety.',
      reportTime: '2 hours ago'
    },
    {
      id: 'eagle-whitewater-park',
      name: 'Eagle Whitewater Park',
      river: 'Eagle River',
      location: 'Eagle, CO',
      gaugeId: '09064600', // Eagle River at Eagle
      currentFlow: 340,
      optimalRange: [200, 600],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [340, 335, 330, 325, 320],
      description: 'Scenic park in Eagle Valley',
      difficulty: 'All Levels',
      recentReport: 'Beautiful setting, good flows.',
      reportTime: '3 hours ago'
    },
    {
      id: 'del-norte-whitewater-park',
      name: 'Del Norte Whitewater Park',
      river: 'Rio Grande',
      location: 'Del Norte, CO',
      gaugeId: '08220000', // Rio Grande at Del Norte
      currentFlow: 420,
      optimalRange: [250, 700],
      unit: 'cfs',
      trend: 'rising',
      status: 'good',
      lastUpdated: '—',
      forecast: [420, 440, 460, 480, 500],
      description: 'High-altitude whitewater park',
      difficulty: 'All Levels',
      recentReport: 'Clean features, good for training.',
      reportTime: '4 hours ago'
    },
    {
      id: 'farmington-river-wave',
      name: 'Farmington River Wave',
      river: 'Animas River',
      location: 'Farmington, NM',
      gaugeId: '09365000', // Animas at Farmington
      currentFlow: 480,
      optimalRange: [300, 800],
      unit: 'cfs',
      trend: 'stable',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [480, 475, 470, 465, 460],
      description: 'Brand new adjustable wave feature at Gateway Park - first in Four Corners region!',
      difficulty: 'All Levels',
      recentReport: 'Just opened! Amazing new feature with adjustable wave.',
      reportTime: '2 hours ago'
    },

    // Out of State Waves
    {
      id: 'skookumchuck-narrows',
      name: 'Skookumchuck Narrows',
      river: 'Sechelt Rapids',
      location: 'Egmont, BC',
      gaugeId: null, // Tidal — no USGS gauge
      currentFlow: 'Tidal',
      optimalRange: ['Incoming tide', 'High tide'],
      unit: 'tidal',
      trend: 'tidal',
      status: 'excellent',
      lastUpdated: 'Tidal data N/A',
      forecast: ['High', 'High', 'Med', 'Low', 'Med'],
      description: 'World-class tidal bore surfing',
      difficulty: 'Expert',
      recentReport: 'Epic tidal bore session this morning!',
      reportTime: '2 hours ago'
    },
    {
      id: 'sleeping-beauty',
      name: 'Sleeping Beauty',
      river: 'Rio Grande del Norte',
      location: 'Taos, NM',
      gaugeId: '08276500', // Rio Grande near Cerro
      currentFlow: 280,
      optimalRange: [200, 500],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [280, 275, 270, 265, 260],
      description: 'Beautiful wave in Taos Box canyon',
      difficulty: 'Advanced',
      recentReport: 'Stunning scenery, challenging wave.',
      reportTime: '6 hours ago'
    },
    {
      id: 'lunch-counter',
      name: 'Lunch Counter',
      river: 'Snake River',
      location: 'Alpine, WY',
      gaugeId: '13027500', // Snake River at Moran (closest reliable gauge)
      currentFlow: 1200,
      optimalRange: [800, 2000],
      unit: 'cfs',
      trend: 'rising',
      status: 'excellent',
      lastUpdated: '—',
      forecast: [1200, 1250, 1300, 1350, 1400],
      description: 'Legendary Snake River wave',
      difficulty: 'All Levels',
      recentReport: 'Perfect conditions, world-class wave!',
      reportTime: '1 hour ago'
    },
    {
      id: 'bend',
      name: 'Bend Whitewater Park',
      river: 'Deschutes River',
      location: 'Bend, OR',
      gaugeId: '14048000', // Deschutes at Bend
      currentFlow: 320,
      optimalRange: [250, 600],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [320, 315, 310, 305, 300],
      description: 'Multiple waves and features for all skill levels',
      difficulty: 'Beginner-Advanced',
      recentReport: 'All features working, great variety.',
      reportTime: '3 hours ago'
    },
    {
      id: 'lochsa-pipeline',
      name: 'Lochsa Pipeline',
      river: 'Lochsa River',
      location: 'Lowell, ID',
      gaugeId: '13340000', // Lochsa near Lowell
      currentFlow: 850,
      optimalRange: [600, 1500],
      unit: 'cfs',
      trend: 'falling',
      status: 'good',
      lastUpdated: '—',
      forecast: [850, 820, 790, 760, 730],
      description: 'Technical wave in pristine wilderness',
      difficulty: 'Expert',
      recentReport: 'Challenging but incredibly rewarding.',
      reportTime: '8 hours ago'
    },
    {
      id: 'boise-whitewater-park',
      name: 'Boise Whitewater Park',
      river: 'Boise River',
      location: 'Boise, ID',
      gaugeId: '13206000', // Boise River at Boise
      currentFlow: 450,
      optimalRange: [300, 800],
      unit: 'cfs',
      trend: 'stable',
      status: 'good',
      lastUpdated: '—',
      forecast: [450, 445, 440, 435, 430],
      description: 'Urban whitewater park in downtown Boise',
      difficulty: 'All Levels',
      recentReport: 'Consistent features, easy access.',
      reportTime: '4 hours ago'
    }
  ];

  // ─────────────────────────────────────────────────────────────────────────────
  // USGS Live Data Fetching
  // Fetches instantaneous values (parameterCd=00060 = streamflow in cfs)
  // for all gauged spots in a single API call, then computes trend by
  // comparing the most recent reading to one from ~1 hour ago.
  // ─────────────────────────────────────────────────────────────────────────────
  const fetchGaugeData = useCallback(async () => {
    if (!navigator.onLine) return;

    const spotsWithGauges = riverSpots.filter(s => s.gaugeId);
    // Deduplicate gauge IDs (multiple spots can share one gauge)
    const uniqueGaugeIds = [...new Set(spotsWithGauges.map(s => s.gaugeId))];

    setIsFetching(true);
    setFetchError(false);

    try {
      // period=PT3H fetches the last 3 hours of readings so we can compute trend
      const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${uniqueGaugeIds.join(',')}&parameterCd=00060&period=PT3H&siteStatus=active`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`USGS API error: ${res.status}`);
      const data = await res.json();

      const updates = {};

      data.value.timeSeries.forEach(series => {
        const siteCode = series.sourceInfo.siteCode[0].value;
        const values = series.values[0]?.value || [];
        if (values.length === 0) return;

        // Most recent reading
        const latest = parseFloat(values[values.length - 1].value);
        const latestTime = new Date(values[values.length - 1].dateTime);

        // Reading from ~1 hour ago (for trend)
        const oneHourAgo = new Date(latestTime.getTime() - 60 * 60 * 1000);
        const olderReading = values.find(v => new Date(v.dateTime) <= oneHourAgo);
        const older = olderReading ? parseFloat(olderReading.value) : null;

        // Compute trend
        let trend = 'stable';
        if (older !== null && !isNaN(older) && !isNaN(latest)) {
          const pctChange = ((latest - older) / older) * 100;
          if (pctChange > 5) trend = 'rising';
          else if (pctChange < -5) trend = 'falling';
        }

        // Format "X min ago"
        const minutesAgo = Math.round((Date.now() - latestTime.getTime()) / 60000);
        const lastUpdatedStr = minutesAgo <= 1
          ? 'just now'
          : minutesAgo < 60
          ? `${minutesAgo} min ago`
          : `${Math.round(minutesAgo / 60)} hr ago`;

        if (!isNaN(latest)) {
          updates[siteCode] = {
            flow: Math.round(latest),
            trend,
            lastUpdated: lastUpdatedStr
          };
        }
      });

      setLiveFlows(updates);
      setLastFetchTime(new Date());
    } catch (err) {
      console.error('Failed to fetch USGS gauge data:', err);
      setFetchError(true);
    } finally {
      setIsFetching(false);
    }
  }, []);

  // Auto-refresh: fetch on mount, then every 5 minutes
  useEffect(() => {
    fetchGaugeData();
    const interval = setInterval(fetchGaugeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchGaugeData]);

  // ─────────────────────────────────────────────────────────────────────────────
  // Helper: merge live USGS data into a spot object
  // ─────────────────────────────────────────────────────────────────────────────
  const enrichSpot = (spot) => {
    if (!spot.gaugeId || !liveFlows[spot.gaugeId]) return spot;
    const live = liveFlows[spot.gaugeId];

    // Derive status from flow vs optimal range
    const flow = live.flow;
    const [min, max] = spot.optimalRange;
    let status = spot.status;
    if (typeof min === 'number' && typeof max === 'number') {
      if (flow < min * 0.7) status = 'low';
      else if (flow < min) status = 'marginal';
      else if (flow <= max) status = flow > (max - min) * 0.6 + min ? 'excellent' : 'good';
      else if (flow <= max * 1.3) status = 'high';
      else status = 'high';
    }

    return {
      ...spot,
      currentFlow: live.flow,
      trend: live.trend,
      lastUpdated: live.lastUpdated,
      status
    };
  };

  // PWA Installation and Network Status
  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    const handleOnline = () => { setIsOnline(true); fetchGaugeData(); };
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [fetchGaugeData]);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    const result = await installPrompt.prompt();
    console.log('Install prompt result:', result);
    setInstallPrompt(null);
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotifications(true);
        new Notification('WaveFlows Notifications Enabled!', {
          body: "You'll now get alerts when your favorite spots hit optimal conditions.",
          icon: '/icon-192x192.png'
        });
      }
    }
  };

  // Load / save favorites
  useEffect(() => {
    try {
      const saved = localStorage.getItem('waveflows-favorites');
      if (saved) setFavorites(JSON.parse(saved));
    } catch (e) { console.log('Error loading favorites:', e); }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('waveflows-favorites', JSON.stringify(favorites));
    } catch (e) { console.log('Error saving favorites:', e); }
  }, [favorites]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-green-700 bg-green-50';
      case 'marginal': return 'text-yellow-700 bg-yellow-50';
      case 'low': return 'text-red-700 bg-red-50';
      case 'high': return 'text-orange-700 bg-orange-50';
      default: return 'text-gray-700 bg-gray-50';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising': return React.createElement(TrendingUp, { className: "h-4 w-4 text-blue-600" });
      case 'falling': return React.createElement(TrendingDown, { className: "h-4 w-4 text-red-600" });
      case 'stable': return React.createElement(Minus, { className: "h-4 w-4 text-gray-600" });
      case 'tidal': return React.createElement('span', { className: "text-xs text-blue-600" }, '🌊');
      default: return React.createElement(Minus, { className: "h-4 w-4 text-gray-600" });
    }
  };

  const toggleFavorite = (spotId) => {
    setFavorites(prev =>
      prev.includes(spotId) ? prev.filter(id => id !== spotId) : [...prev, spotId]
    );
  };

  // Enrich all spots with live data before filtering
  const enrichedSpots = riverSpots.map(enrichSpot);

  const filteredSpots = enrichedSpots.filter(spot =>
    spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spot.river.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spot.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteSpots = filteredSpots.filter(spot => favorites.includes(spot.id));
  const otherSpots = filteredSpots.filter(spot => !favorites.includes(spot.id));

  // Format last fetch time for display
  const lastFetchDisplay = lastFetchTime
    ? lastFetchTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null;

  return React.createElement('div', { className: "min-h-screen bg-gray-100" },
    // Header
    React.createElement('div', { className: "bg-gray-900 text-white p-4 shadow-xl" },
      React.createElement('div', { className: "max-w-6xl mx-auto" },
        React.createElement('div', { className: "flex items-center justify-between mb-4" },
          React.createElement('div', { className: "flex items-center space-x-3" },
            React.createElement('div', { className: "bg-blue-500 p-2 rounded-lg relative overflow-hidden" },
              React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600" }),
              React.createElement('div', { className: "relative" },
                React.createElement('svg', { className: "h-6 w-6 text-white", viewBox: "0 0 24 24", fill: "currentColor" },
                  React.createElement('path', { d: "M3 12c0 1.5 1 3 2.5 3.5S8 17 8 15.5s-1-3-2.5-3.5S3 10.5 3 12zm6 0c0 1.5 1 3 2.5 3.5S14 17 14 15.5s-1-3-2.5-3.5S9 10.5 9 12zm6 0c0 1.5 1 3 2.5 3.5S20 17 20 15.5s-1-3-2.5-3.5S15 10.5 15 12z" }),
                  React.createElement('path', { d: "M2 8c2 0 4 1 6 1s4-1 6-1 4 1 6 1v2c-2 0-4-1-6-1s-4 1-6 1-4-1-6-1V8z", opacity: "0.7" })
                )
              )
            ),
            React.createElement('div', null,
              React.createElement('h1', { className: "text-2xl font-bold tracking-tight" }, 'WaveFlows'),
              // Last updated timestamp
              lastFetchDisplay
                ? React.createElement('p', { className: "text-xs text-gray-400" }, `Live data • Updated ${lastFetchDisplay}`)
                : React.createElement('p', { className: "text-xs text-gray-400" }, 'Connecting to USGS...')
            )
          ),

          React.createElement('div', { className: "flex items-center space-x-2" },
            // Network Status
            React.createElement('div', { className: "flex items-center space-x-1" },
              isOnline
                ? React.createElement(Wifi, { className: "h-4 w-4 text-green-400" })
                : React.createElement(WifiOff, { className: "h-4 w-4 text-red-400" })
            ),

            // Manual refresh button
            React.createElement('button', {
              onClick: fetchGaugeData,
              disabled: isFetching || !isOnline,
              className: `p-2 rounded-lg transition-colors ${isFetching ? 'bg-gray-700 text-gray-500 cursor-wait' : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'}`,
              title: isFetching ? 'Fetching...' : 'Refresh flow data'
            }, React.createElement(RefreshCw, {
              className: `h-4 w-4 ${isFetching ? 'animate-spin' : ''}`
            })),

            // Install Button
            installPrompt && !isInstalled
              ? React.createElement('button', {
                  onClick: handleInstallClick,
                  className: "p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors",
                  title: "Install WaveFlows"
                }, React.createElement(Download, { className: "h-5 w-5" }))
              : null,

            // Notifications
            React.createElement('button', {
              onClick: notifications ? () => setNotifications(false) : requestNotificationPermission,
              className: `p-2 rounded-lg transition-colors ${notifications ? 'bg-gray-700 text-blue-400' : 'bg-gray-800 text-gray-400 hover:text-white'}`,
              title: notifications ? 'Notifications enabled' : 'Enable notifications'
            }, React.createElement(Bell, { className: "h-5 w-5" }))
          )
        ),

        // Search
        React.createElement('div', { className: "relative" },
          React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }),
          React.createElement('input', {
            type: "text",
            placeholder: "Search river spots...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          })
        ),

        // Status banners
        !isOnline
          ? React.createElement('div', { className: "mt-3 p-2 bg-yellow-600 text-yellow-100 rounded-lg text-sm text-center" },
              'Offline mode — Showing cached data'
            )
          : fetchError
          ? React.createElement('div', { className: "mt-3 p-2 bg-red-700 text-red-100 rounded-lg text-sm text-center" },
              'Could not reach USGS — showing last known flows. Will retry in 5 min.'
            )
          : null
      )
    ),

    React.createElement('div', { className: "max-w-6xl mx-auto p-4" },
      // Favorites Section
      favoriteSpots.length > 0
        ? React.createElement('div', { className: "mb-6" },
            React.createElement('h2', { className: "text-xl font-semibold mb-3 flex items-center" },
              React.createElement(Star, { className: "h-5 w-5 text-yellow-500 mr-2" }),
              'Favorite Spots'
            ),
            React.createElement('div', { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" },
              favoriteSpots.map(spot => React.createElement(SpotCard, {
                key: spot.id,
                spot,
                isFavorite: true,
                onToggleFavorite: toggleFavorite,
                onSelect: setSelectedSpot,
                getStatusColor,
                getTrendIcon,
                isLive: !!(spot.gaugeId && liveFlows[spot.gaugeId])
              }))
            )
          )
        : null,

      // All Spots Section
      React.createElement('div', { className: "mb-6" },
        React.createElement('h2', { className: "text-xl font-semibold mb-3 flex items-center" },
          React.createElement(Activity, { className: "h-5 w-5 text-blue-600 mr-2" }),
          favoriteSpots.length > 0 ? 'All Spots' : `River Surf Spots (${riverSpots.length})`
        ),
        React.createElement('div', { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" },
          otherSpots.map(spot => React.createElement(SpotCard, {
            key: spot.id,
            spot,
            isFavorite: false,
            onToggleFavorite: toggleFavorite,
            onSelect: setSelectedSpot,
            getStatusColor,
            getTrendIcon,
            isLive: !!(spot.gaugeId && liveFlows[spot.gaugeId])
          }))
        )
      )
    ),

    // Detailed Modal
    selectedSpot
      ? React.createElement(SpotModal, {
          spot: enrichSpot(selectedSpot),
          onClose: () => setSelectedSpot(null),
          isFavorite: favorites.includes(selectedSpot.id),
          onToggleFavorite: toggleFavorite,
          getStatusColor,
          getTrendIcon,
          isLive: !!(selectedSpot.gaugeId && liveFlows[selectedSpot.gaugeId])
        })
      : null
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Spot Card Component
// ─────────────────────────────────────────────────────────────────────────────
const SpotCard = ({ spot, isFavorite, onToggleFavorite, onSelect, getStatusColor, getTrendIcon, isLive }) => {
  const statusColor = getStatusColor(spot.status);
  const isInRange = spot.currentFlow >= spot.optimalRange[0] && spot.currentFlow <= spot.optimalRange[1];

  return React.createElement('div', { className: "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer" },
    React.createElement('div', { className: "flex justify-between items-start mb-3" },
      React.createElement('div', { className: "flex-1", onClick: () => onSelect(spot) },
        React.createElement('div', { className: "flex items-center gap-2" },
          React.createElement('h3', { className: "font-semibold text-lg text-gray-900" }, spot.name),
          // Live badge
          isLive
            ? React.createElement('span', { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" },
                React.createElement('span', { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 animate-pulse" }),
                'Live'
              )
            : null
        ),
        React.createElement('p', { className: "text-sm text-gray-600" }, spot.river),
        React.createElement('p', { className: "text-xs text-gray-500 flex items-center mt-1" },
          React.createElement(MapPin, { className: "h-3 w-3 mr-1" }),
          spot.location
        )
      ),
      React.createElement('button', {
        onClick: (e) => { e.stopPropagation(); onToggleFavorite(spot.id); },
        className: "p-1"
      }, React.createElement(Heart, { className: `h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}` }))
    ),

    React.createElement('div', { onClick: () => onSelect(spot) },
      React.createElement('div', { className: "flex items-center justify-between mb-2" },
        React.createElement('span', { className: `px-2 py-1 rounded-full text-xs font-medium ${statusColor}` },
          spot.status.charAt(0).toUpperCase() + spot.status.slice(1)
        ),
        React.createElement('div', { className: "flex items-center space-x-1" },
          getTrendIcon(spot.trend),
          React.createElement('span', { className: "text-xs text-gray-500" }, spot.trend)
        )
      ),

      React.createElement('div', { className: "space-y-2" },
        React.createElement('div', { className: "flex justify-between items-center" },
          React.createElement('span', { className: "text-sm text-gray-600" }, 'Current Flow:'),
          React.createElement('span', { className: "font-semibold" },
            spot.unit === 'tidal'
              ? spot.currentFlow
              : `${spot.currentFlow.toLocaleString()} ${spot.unit}`
          )
        ),

        React.createElement('div', { className: "flex justify-between items-center" },
          React.createElement('span', { className: "text-sm text-gray-600" }, 'Optimal Range:'),
          React.createElement('span', { className: "text-sm" },
            spot.unit === 'tidal'
              ? spot.optimalRange.join(' - ')
              : `${spot.optimalRange[0].toLocaleString()}–${spot.optimalRange[1].toLocaleString()} ${spot.unit}`
          )
        ),

        // Flow Range Indicator (skip for tidal)
        spot.unit !== 'tidal'
          ? React.createElement('div', { className: "w-full bg-gray-200 rounded-full h-2" },
              React.createElement('div', {
                className: `h-2 rounded-full transition-all duration-500 ${isInRange ? 'bg-green-500' : spot.currentFlow < spot.optimalRange[0] ? 'bg-red-400' : 'bg-orange-400'}`,
                style: {
                  width: `${Math.min(100, Math.max(5, (spot.currentFlow / spot.optimalRange[1]) * 100))}%`
                }
              })
            )
          : null,

        React.createElement('p', { className: "text-xs text-gray-400" },
          isLive ? `USGS • ${spot.lastUpdated}` : `Cached • ${spot.lastUpdated}`
        )
      )
    )
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Detailed Modal Component
// ─────────────────────────────────────────────────────────────────────────────
const SpotModal = ({ spot, onClose, isFavorite, onToggleFavorite, getStatusColor, getTrendIcon, isLive }) => {
  const statusColor = getStatusColor(spot.status);

  return React.createElement('div', { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" },
    React.createElement('div', { className: "bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto" },
      React.createElement('div', { className: "p-6" },
        React.createElement('div', { className: "flex justify-between items-start mb-4" },
          React.createElement('div', null,
            React.createElement('div', { className: "flex items-center gap-2 mb-1" },
              React.createElement('h2', { className: "text-2xl font-bold text-gray-900" }, spot.name),
              isLive
                ? React.createElement('span', { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" },
                    React.createElement('span', { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 animate-pulse" }),
                    'Live USGS'
                  )
                : React.createElement('span', { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500" },
                    'Cached'
                  )
            ),
            React.createElement('p', { className: "text-gray-600" }, spot.river),
            React.createElement('p', { className: "text-sm text-gray-500 flex items-center mt-1" },
              React.createElement(MapPin, { className: "h-4 w-4 mr-1" }),
              spot.location
            )
          ),
          React.createElement('div', { className: "flex space-x-2" },
            React.createElement('button', {
              onClick: () => onToggleFavorite(spot.id),
              className: "p-2 hover:bg-gray-100 rounded-lg"
            }, React.createElement(Heart, { className: `h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}` })),
            React.createElement('button', { onClick: onClose, className: "p-2 hover:bg-gray-100 rounded-lg" },
              React.createElement('span', { className: "text-2xl text-gray-500" }, '×')
            )
          )
        ),

        // Current Status
        React.createElement('div', { className: "bg-gray-50 rounded-lg p-4 mb-6" },
          React.createElement('div', { className: "grid grid-cols-2 gap-4" },
            React.createElement('div', null,
              React.createElement('div', { className: "flex items-center justify-between mb-2" },
                React.createElement('span', { className: `px-3 py-1 rounded-full text-sm font-medium ${statusColor}` },
                  spot.status.charAt(0).toUpperCase() + spot.status.slice(1)
                ),
                React.createElement('div', { className: "flex items-center space-x-1" },
                  getTrendIcon(spot.trend),
                  React.createElement('span', { className: "text-sm text-gray-600 capitalize" }, spot.trend)
                )
              ),
              React.createElement('div', { className: "space-y-1" },
                React.createElement('div', { className: "flex justify-between" },
                  React.createElement('span', { className: "text-sm text-gray-600" }, 'Current:'),
                  React.createElement('span', { className: "font-semibold" },
                    spot.unit === 'tidal'
                      ? spot.currentFlow
                      : `${spot.currentFlow.toLocaleString()} ${spot.unit}`
                  )
                ),
                React.createElement('div', { className: "flex justify-between" },
                  React.createElement('span', { className: "text-sm text-gray-600" }, 'Optimal:'),
                  React.createElement('span', { className: "text-sm" },
                    spot.unit === 'tidal'
                      ? spot.optimalRange.join(' - ')
                      : `${spot.optimalRange[0].toLocaleString()}–${spot.optimalRange[1].toLocaleString()} ${spot.unit}`
                  )
                ),
                React.createElement('div', { className: "flex justify-between" },
                  React.createElement('span', { className: "text-sm text-gray-600" }, 'Data source:'),
                  React.createElement('span', { className: "text-xs text-gray-500" },
                    isLive ? `USGS Gauge ${spot.gaugeId}` : 'Static / Cached'
                  )
                )
              )
            ),

            React.createElement('div', null,
              React.createElement('p', { className: "text-sm text-gray-600 mb-2" }, '5-Day Forecast'),
              React.createElement('div', { className: "flex items-end space-x-1 h-12" },
                spot.forecast.map((flow, index) =>
                  React.createElement('div', {
                    key: index,
                    className: "flex-1 bg-blue-200 rounded-t",
                    style: spot.unit === 'tidal' ? { height: '20px' } : {
                      height: `${(flow / Math.max(...spot.forecast)) * 100}%`,
                      minHeight: '4px'
                    }
                  })
                )
              ),
              React.createElement('div', { className: "flex justify-between text-xs text-gray-500 mt-1" },
                React.createElement('span', null, 'Today'),
                React.createElement('span', null, '+4 days')
              )
            )
          )
        ),

        // Spot Info
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', null,
            React.createElement('h3', { className: "font-semibold text-gray-900 mb-2" }, 'Spot Information'),
            React.createElement('p', { className: "text-gray-700 mb-2" }, spot.description),
            React.createElement('div', { className: "flex items-center space-x-4 text-sm" },
              React.createElement('span', { className: "text-gray-600" }, 'Difficulty: ',
                React.createElement('span', { className: "font-medium" }, spot.difficulty)
              ),
              React.createElement('span', { className: "text-gray-500" }, `Updated ${spot.lastUpdated}`)
            )
          ),

          React.createElement('div', { className: "bg-blue-50 rounded-lg p-4" },
            React.createElement('h4', { className: "font-medium text-gray-900 mb-2" }, 'Latest Report'),
            React.createElement('p', { className: "text-gray-700 mb-1" }, `"${spot.recentReport}"`),
            React.createElement('p', { className: "text-xs text-gray-500" }, spot.reportTime)
          ),

          React.createElement('div', { className: "flex space-x-3 pt-4" },
            React.createElement('button', { className: "flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" }, 'Get Directions'),
            React.createElement('button', { className: "flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors" }, 'Share Report')
          )
        )
      )
    )
  );
};

// Render the app
ReactDOM.render(React.createElement(WaveFlowsPWA), document.getElementById('root'));
