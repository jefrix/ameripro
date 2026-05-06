(function () {
  const BOUNDS = { minLon: -85.62, maxLon: -80.84, minLat: 30.36, maxLat: 35.01 };
  const MIN_POPULATION = 3000;
  const CITIES = [
    { name: 'Atlanta', pop: 510823, lat: 33.7490, lon: -84.3880 },
    { name: 'Columbus', pop: 206922, lat: 32.4610, lon: -84.9877 },
    { name: 'Augusta', pop: 202096, lat: 33.4735, lon: -82.0105 },
    { name: 'Macon', pop: 157346, lat: 32.8407, lon: -83.6324, service: true },
    { name: 'Savannah', pop: 148004, lat: 32.0809, lon: -81.0912, service: true },
    { name: 'Athens', pop: 128561, lat: 33.9519, lon: -83.3576 },
    { name: 'Sandy Springs', pop: 108080, lat: 33.9304, lon: -84.3733 },
    { name: 'South Fulton', pop: 107436, lat: 33.6269, lon: -84.5800 },
    { name: 'Roswell', pop: 92833, lat: 34.0232, lon: -84.3616 },
    { name: 'Johns Creek', pop: 82453, lat: 34.0289, lon: -84.1986 },
    { name: 'Warner Robins', pop: 82175, lat: 32.6130, lon: -83.6242, service: true },
    { name: 'Mableton', pop: 78000, lat: 33.8187, lon: -84.5824 },
    { name: 'Albany', pop: 68509, lat: 31.5785, lon: -84.1557 },
    { name: 'Alpharetta', pop: 66836, lat: 34.0754, lon: -84.2941 },
    { name: 'Marietta', pop: 60972, lat: 33.9526, lon: -84.5499 },
    { name: 'Stonecrest', pop: 59636, lat: 33.7085, lon: -84.1349 },
    { name: 'Smyrna', pop: 55989, lat: 33.8839, lon: -84.5144 },
    { name: 'Valdosta', pop: 55961, lat: 30.8327, lon: -83.2785 },
    { name: 'Brookhaven', pop: 55293, lat: 33.8651, lon: -84.3366 },
    { name: 'Dunwoody', pop: 51683, lat: 33.9462, lon: -84.3346 },
    { name: 'Gainesville', pop: 44700, lat: 34.2979, lon: -83.8241 },
    { name: 'Newnan', pop: 42900, lat: 33.3807, lon: -84.7997 },
    { name: 'Peachtree Corners', pop: 42108, lat: 33.9699, lon: -84.2216 },
    { name: 'Milton', pop: 41156, lat: 34.1322, lon: -84.3007 },
    { name: 'Peachtree City', pop: 38500, lat: 33.3968, lon: -84.5958 },
    { name: 'East Point', pop: 38358, lat: 33.6796, lon: -84.4394 },
    { name: 'Rome', pop: 37391, lat: 34.2570, lon: -85.1647 },
    { name: 'Tucker', pop: 37300, lat: 33.8545, lon: -84.2171 },
    { name: 'Woodstock', pop: 36300, lat: 34.1015, lon: -84.5194 },
    { name: 'Hinesville', pop: 35100, lat: 31.8469, lon: -81.5959 },
    { name: 'Douglasville', pop: 35000, lat: 33.7515, lon: -84.7477 },
    { name: 'Dalton', pop: 34417, lat: 34.7698, lon: -84.9702 },
    { name: 'Canton', pop: 34600, lat: 34.2368, lon: -84.4908 },
    { name: 'Statesboro', pop: 33900, lat: 32.4488, lon: -81.7832, service: true },
    { name: 'Kennesaw', pop: 33700, lat: 34.0234, lon: -84.6155 },
    { name: 'Duluth', pop: 31600, lat: 34.0029, lon: -84.1446 },
    { name: 'LaGrange', pop: 31200, lat: 33.0393, lon: -85.0313 },
    { name: 'Lawrenceville', pop: 31000, lat: 33.9562, lon: -83.9879 },
    { name: 'Chamblee', pop: 31000, lat: 33.8920, lon: -84.2988 },
    { name: 'Stockbridge', pop: 29700, lat: 33.5443, lon: -84.2338 },
    { name: 'McDonough', pop: 29500, lat: 33.4473, lon: -84.1469 },
    { name: 'Pooler', pop: 29200, lat: 32.1155, lon: -81.2471 },
    { name: 'Union City', pop: 27000, lat: 33.5871, lon: -84.5424 },
    { name: 'Carrollton', pop: 27400, lat: 33.5801, lon: -85.0766 },
    { name: 'Sugar Hill', pop: 25000, lat: 34.1065, lon: -84.0335 },
    { name: 'Decatur', pop: 24600, lat: 33.7748, lon: -84.2963 },
    { name: 'Cartersville', pop: 24100, lat: 34.1651, lon: -84.7999 },
    { name: 'Griffin', pop: 23800, lat: 33.2468, lon: -84.2641 },
    { name: 'Perry', pop: 23700, lat: 32.4582, lon: -83.7316 },
    { name: 'Snellville', pop: 22500, lat: 33.8573, lon: -84.0199 },
    { name: 'Suwanee', pop: 22200, lat: 34.0515, lon: -84.0713 },
    { name: 'Acworth', pop: 22900, lat: 34.0659, lon: -84.6769 },
    { name: 'Forest Park', pop: 19600, lat: 33.6221, lon: -84.3691 },
    { name: 'Fayetteville', pop: 19000, lat: 33.4487, lon: -84.4549 },
    { name: 'Winder', pop: 18400, lat: 33.9926, lon: -83.7202 },
    { name: 'Thomasville', pop: 18800, lat: 30.8366, lon: -83.9788 },
    { name: 'St. Marys', pop: 18700, lat: 30.7305, lon: -81.5465 },
    { name: 'Milledgeville', pop: 17800, lat: 33.0801, lon: -83.2321 },
    { name: 'Villa Rica', pop: 17900, lat: 33.7321, lon: -84.9191 },
    { name: 'Norcross', pop: 17400, lat: 33.9412, lon: -84.2135 },
    { name: 'Conyers', pop: 17400, lat: 33.6676, lon: -84.0177 },
    { name: 'Tifton', pop: 17200, lat: 31.4505, lon: -83.5085 },
    { name: 'Calhoun', pop: 17000, lat: 34.5026, lon: -84.9511 },
    { name: 'Holly Springs', pop: 17300, lat: 34.1737, lon: -84.5013 },
    { name: 'Buford', pop: 17500, lat: 34.1207, lon: -84.0044 },
    { name: 'Fairburn', pop: 16600, lat: 33.5671, lon: -84.5810 },
    { name: 'Americus', pop: 16000, lat: 32.0724, lon: -84.2327 },
    { name: 'Powder Springs', pop: 16000, lat: 33.8595, lon: -84.6838 },
    { name: 'Dublin', pop: 15900, lat: 32.5404, lon: -82.9038, service: true },
    { name: 'Riverdale', pop: 15600, lat: 33.5726, lon: -84.4133 },
    { name: 'Brunswick', pop: 15100, lat: 31.1499, lon: -81.4915 },
    { name: 'Monroe', pop: 15000, lat: 33.7948, lon: -83.7132 },
    { name: 'Braselton', pop: 15000, lat: 34.1093, lon: -83.7627 },
    { name: 'Dallas', pop: 14900, lat: 33.9237, lon: -84.8408 },
    { name: 'Covington', pop: 14800, lat: 33.5968, lon: -83.8602 },
    { name: 'Loganville', pop: 14800, lat: 33.8390, lon: -83.9007 },
    { name: 'Lilburn', pop: 14800, lat: 33.8901, lon: -84.1429 },
    { name: 'Clarkston', pop: 14700, lat: 33.8095, lon: -84.2396 },
    { name: 'Moultrie', pop: 14700, lat: 31.1799, lon: -83.7891 },
    { name: 'Bainbridge', pop: 14200, lat: 30.9038, lon: -84.5755 },
    { name: 'Waycross', pop: 13900, lat: 31.2136, lon: -82.3540 },
    { name: 'Jefferson', pop: 13700, lat: 34.1171, lon: -83.5724 },
    { name: 'College Park', pop: 13400, lat: 33.6534, lon: -84.4494 },
    { name: 'Douglas', pop: 11600, lat: 31.5088, lon: -82.8499 },
    { name: 'Fort Oglethorpe', pop: 10800, lat: 34.9489, lon: -85.2569 },
    { name: 'Flowery Branch', pop: 10600, lat: 34.1851, lon: -83.9252 },
    { name: 'Doraville', pop: 10500, lat: 33.8982, lon: -84.2833 },
    { name: 'Cordele', pop: 10500, lat: 31.9635, lon: -83.7824 },
    { name: 'Lovejoy', pop: 10400, lat: 33.4362, lon: -84.3144 },
    { name: 'Vidalia', pop: 10300, lat: 32.2177, lon: -82.4135 },
    { name: 'Cedartown', pop: 10200, lat: 34.0112, lon: -85.2559 },
    { name: 'Cairo', pop: 10000, lat: 30.8776, lon: -84.2013 },
    { name: 'Jesup', pop: 9800, lat: 31.6074, lon: -81.8854 },
    { name: 'Toccoa', pop: 9200, lat: 34.5773, lon: -83.3324 },
    { name: 'Fitzgerald', pop: 9200, lat: 31.7149, lon: -83.2527 },
    { name: 'Hampton', pop: 8500, lat: 33.3871, lon: -84.2829 },
    { name: 'Fort Valley', pop: 8500, lat: 32.5538, lon: -83.8874 },
    { name: 'Austell', pop: 7700, lat: 33.8126, lon: -84.6344 },
    { name: 'Dahlonega', pop: 7600, lat: 34.5261, lon: -83.9844 },
    { name: 'Auburn', pop: 7600, lat: 34.0137, lon: -83.8277 },
    { name: 'Tyrone', pop: 7400, lat: 33.4712, lon: -84.5972 },
    { name: 'Swainsboro', pop: 7400, lat: 32.5974, lon: -82.3337 },
    { name: 'Bremen', pop: 7400, lat: 33.7212, lon: -85.1455 },
    { name: 'Commerce', pop: 7200, lat: 34.2037, lon: -83.4571 },
    { name: 'Dacula', pop: 7200, lat: 33.9887, lon: -83.8977 },
    { name: 'Stone Mountain', pop: 6700, lat: 33.8082, lon: -84.1702 },
    { name: 'Hapeville', pop: 6500, lat: 33.6601, lon: -84.4102 },
    { name: 'Morrow', pop: 6500, lat: 33.5832, lon: -84.3394 },
    { name: 'Sylvester', pop: 5900, lat: 31.5307, lon: -83.8355 },
    { name: 'Sandersville', pop: 5600, lat: 32.9815, lon: -82.8101 },
    { name: 'Adel', pop: 5500, lat: 31.1374, lon: -83.4235 },
    { name: 'Temple', pop: 5300, lat: 33.7371, lon: -85.0324 },
    { name: 'Camilla', pop: 5200, lat: 31.2313, lon: -84.2105 },
    { name: 'Palmetto', pop: 5200, lat: 33.5179, lon: -84.6697 },
    { name: 'Oakwood', pop: 5200, lat: 34.2276, lon: -83.8844 },
    { name: 'Eastman', pop: 5200, lat: 32.1977, lon: -83.1777 },
    { name: 'Cochran', pop: 5100, lat: 32.3868, lon: -83.3546 },
    { name: 'Blakely', pop: 5000, lat: 31.3777, lon: -84.9341 },
    { name: 'Baxley', pop: 5000, lat: 31.7783, lon: -82.3485 },
    { name: 'Adairsville', pop: 5000, lat: 34.3687, lon: -84.9341 },
    { name: 'Cornelia', pop: 4900, lat: 34.5115, lon: -83.5271 },
    { name: 'Nashville', pop: 4800, lat: 31.2074, lon: -83.2501 },
    { name: 'Grayson', pop: 4800, lat: 33.8943, lon: -83.9557 },
    { name: 'Jasper', pop: 4700, lat: 34.4679, lon: -84.4291 },
    { name: 'Jonesboro', pop: 4700, lat: 33.5215, lon: -84.3538 },
    { name: 'Euharlee', pop: 4700, lat: 34.1448, lon: -84.9344 },
    { name: 'Rockmart', pop: 4700, lat: 34.0026, lon: -85.0416 },
    { name: 'Hartwell', pop: 4500, lat: 34.3529, lon: -82.9321 },
    { name: 'Summerville', pop: 4400, lat: 34.4806, lon: -85.3477 },
    { name: 'Lyons', pop: 4300, lat: 32.2044, lon: -82.3218 },
    { name: 'Hazlehurst', pop: 4200, lat: 31.8696, lon: -82.5943 },
    { name: 'Metter', pop: 4200, lat: 32.3971, lon: -82.0601 },
    { name: 'Ashburn', pop: 4100, lat: 31.7058, lon: -83.6532 },
    { name: 'Dawson', pop: 4100, lat: 31.7735, lon: -84.4466 },
    { name: 'Glennville', pop: 3800, lat: 31.9366, lon: -81.9287 },
    { name: 'Ringgold', pop: 3700, lat: 34.9159, lon: -85.1091 },
    { name: 'Avondale Estates', pop: 3600, lat: 33.7715, lon: -84.2671 },
    { name: 'Dawsonville', pop: 3800, lat: 34.4212, lon: -84.1191 },
    { name: 'Cuthbert', pop: 3400, lat: 31.7713, lon: -84.7894 },
    { name: 'Soperton', pop: 3100, lat: 32.3771, lon: -82.5924 },
  ].filter(city => city.pop > MIN_POPULATION);

  let lastViewBox = '';
  let selectedCity = null;

  function ensureStyle() {
    if (document.querySelector('[data-local-cities-style]')) return;
    const style = document.createElement('style');
    style.dataset.localCitiesStyle = '1';
    style.textContent = `
      .local-city-orbit {
        fill: rgba(207,226,255,0.08);
        stroke: rgba(207,226,255,0.38);
        stroke-width: 0.75;
        vector-effect: non-scaling-stroke;
        opacity: 0.78;
      }
      .local-city-dot {
        fill: rgba(207,226,255,0.88);
        stroke: rgba(4,14,28,0.92);
        stroke-width: 0.85;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 2px rgba(207,226,255,0.62));
      }
      .local-city-marker {
        cursor: pointer;
        pointer-events: all;
      }
      .local-city-hit {
        fill: transparent;
        pointer-events: all;
      }
      .local-city-dot.major {
        fill: #ff8a3d;
        stroke: rgba(255,255,255,0.82);
        filter: drop-shadow(0 0 4px rgba(255,138,61,0.78));
      }
      .local-city-dot.service {
        fill: #5bd7ff;
        stroke: rgba(255,255,255,0.88);
        filter: drop-shadow(0 0 4px rgba(91,215,255,0.86));
      }
      .local-city-label {
        font-family: var(--mono);
        font-size: 7.4px;
        letter-spacing: 0.07em;
        fill: rgba(224,238,255,0.88);
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0,0,0,0.78);
        stroke-width: 2.5;
        pointer-events: none;
      }
      .local-city-selected {
        display: none;
        fill: none;
        stroke: #f5d142;
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 7px rgba(245,209,66,0.82));
      }
      .local-city-marker:hover .local-city-selected,
      .local-city-marker.selected .local-city-selected {
        display: block;
      }
      .local-city-marker.selected .local-city-dot {
        stroke: #fff6cf;
        stroke-width: 1.35;
      }
      .feed.city-feed-mode > .feed-head,
      .feed.city-feed-mode > .feed-list,
      .feed.city-feed-mode > [data-ameripro-tank-board],
      .feed.city-feed-mode > [data-restaurant-feed-board],
      .feed.city-feed-mode > [data-opportunity-board],
      .feed.city-feed-mode > [data-county-drilldown-board] {
        display: none;
      }
      .feed:not(.city-feed-mode) > [data-city-feed-board] {
        display: none;
      }
      .city-feed-board {
        height: 100%;
        min-height: 0;
        overflow: hidden;
        display: grid;
        grid-template-rows: auto auto minmax(0, 1fr);
        gap: 8px;
        padding: 10px 12px;
        font-family: var(--mono);
        color: var(--text);
      }
      .city-feed-head {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        color: #cfe2ff;
        font-size: 10px;
        letter-spacing: 0.18em;
      }
      .city-selected-card {
        border: 1px solid rgba(207,226,255,0.48);
        background: rgba(0,10,22,0.64);
        padding: 8px;
        box-shadow: inset 0 0 18px rgba(207,226,255,0.05);
      }
      .city-title {
        color: #f5d142;
        font-size: 11px;
        letter-spacing: 0.1em;
        margin-bottom: 7px;
      }
      .city-row {
        display: grid;
        grid-template-columns: 90px minmax(0, 1fr);
        gap: 8px;
        align-items: start;
        font-size: 9px;
        line-height: 1.35;
        margin-bottom: 2px;
      }
      .city-row span:first-child {
        color: var(--text-dim);
        letter-spacing: 0.12em;
      }
      .city-row b {
        color: #cfe2ff;
        overflow-wrap: anywhere;
      }
      .city-list {
        min-height: 0;
        overflow-y: auto;
        border-top: 1px solid rgba(26,49,83,0.75);
      }
      .city-list button {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(0,1fr) auto;
        gap: 8px;
        padding: 7px 0;
        border: 0;
        border-bottom: 1px solid rgba(26,49,83,0.55);
        background: transparent;
        color: var(--text);
        text-align: left;
        font-family: var(--mono);
        cursor: pointer;
      }
      .city-list button:hover,
      .city-list button.active {
        color: #f5d142;
      }
      .city-list strong,
      .city-list small {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .city-list strong {
        font-size: 9px;
        letter-spacing: 0.1em;
      }
      .city-list small {
        color: var(--text-dim);
        font-size: 8px;
        letter-spacing: 0.08em;
        margin-top: 2px;
      }
      .city-pop {
        color: rgba(207,226,255,0.72);
        font-size: 7px;
        letter-spacing: 0.12em;
        align-self: center;
      }
      .local-placeholder-layer[data-local-placeholder="cities"] .local-placeholder-badge {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }

  function projectFactory(svg) {
    const box = (svg.getAttribute('viewBox') || '0 0 900 620').split(/\s+/).map(Number);
    const width = box[2] || 900;
    const height = box[3] || 620;
    const pad = Math.max(16, Math.min(width, height) * 0.04);
    const spanLon = BOUNDS.maxLon - BOUNDS.minLon;
    const spanLat = BOUNDS.maxLat - BOUNDS.minLat;
    const scale = Math.min((width - pad * 2) / spanLon, (height - pad * 2) / spanLat);
    const mapW = spanLon * scale;
    const mapH = spanLat * scale;
    const ox = (width - mapW) / 2;
    const oy = (height - mapH) / 2;
    return ([lon, lat]) => [
      ox + (lon - BOUNDS.minLon) * scale,
      oy + (BOUNDS.maxLat - lat) * scale,
    ];
  }

  function cityRadius(population) {
    return Math.max(2.1, Math.min(17, Math.sqrt(population) / 42));
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]));
  }

  function formatPop(value) {
    return Number(value || 0).toLocaleString();
  }

  function customers() {
    return window.GlobalDataRestaurants?.getCustomers?.() || [];
  }

  function miles(a, b) {
    const earthRadius = 3958.8;
    const deg = Math.PI / 180;
    const dLat = (b.lat - a.lat) * deg;
    const dLon = (b.lon - a.lon) * deg;
    const lat1 = a.lat * deg;
    const lat2 = b.lat * deg;
    const h = Math.sin(dLat / 2) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return earthRadius * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }

  function isClient(item) {
    return item?.customer !== false;
  }

  function isScheduled(item) {
    return Boolean(item?.ameriproSchedule?.serviceTypes?.length || item?.ameriproSchedule?.services?.length);
  }

  function nearbyRestaurants(city, radius = 18) {
    return customers()
      .filter(item => Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lon)))
      .filter(item => miles(city, { lat: Number(item.lat), lon: Number(item.lon) }) <= radius);
  }

  function marketEstimate(city, known) {
    if (city.pop >= 100000) return Math.max(known, Math.round(city.pop / 950));
    if (city.pop >= 30000) return Math.max(known, Math.round(city.pop / 750));
    return Math.max(known, Math.round(city.pop / 620));
  }

  function cityClass(city) {
    if (city.service) return 'AMERIPRO SERVICE HUB';
    if (city.pop >= 100000) return 'MAJOR CITY';
    if (city.pop >= 30000) return 'REGIONAL CITY';
    return 'LOCAL MARKET';
  }

  function selected() {
    return CITIES.find(city => city.name === selectedCity) || null;
  }

  function row(label, value, color) {
    const style = color ? ` style="color:${escapeHtml(color)}"` : '';
    return `<div class="city-row"><span>${escapeHtml(label)}</span><b${style}>${escapeHtml(value || '--')}</b></div>`;
  }

  function shouldLabel(city) {
    if (window.AmeriproPerformance?.isActive?.()) return false;
    return city.service || city.pop >= 50000 || [
      'Gainesville',
      'Rome',
      'LaGrange',
      'Brunswick',
      'Tifton',
      'Douglas',
      'Perry',
      'Waycross',
      'Milledgeville',
    ].includes(city.name);
  }

  function addLabel(group, city, x, y, radius) {
    if (!shouldLabel(city)) return;
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('class', 'local-city-label');
    label.setAttribute('x', x.toFixed(2));
    label.setAttribute('y', (y - radius - 3.8).toFixed(2));
    label.textContent = city.name.toUpperCase();
    group.appendChild(label);
  }

  function drawCities(svg, project) {
    svg.querySelectorAll('[data-local-cities]').forEach(node => node.remove());
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.dataset.localCities = '1';

    CITIES.forEach(city => {
      const [x, y] = project([city.lon, city.lat]);
      const radius = cityRadius(city.pop);
      const wrap = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      wrap.setAttribute('class', `local-city-marker ${city.name === selectedCity ? 'selected' : ''}`);
      wrap.dataset.cityName = city.name;
      wrap.dataset.population = String(city.pop);
      wrap.setAttribute('tabindex', '0');
      wrap.setAttribute('role', 'button');
      wrap.setAttribute('aria-label', city.name);

      const hit = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      hit.setAttribute('class', 'local-city-hit');
      hit.setAttribute('cx', x.toFixed(2));
      hit.setAttribute('cy', y.toFixed(2));
      hit.setAttribute('r', Math.max(9, radius * 1.8).toFixed(2));
      wrap.appendChild(hit);

      const selectedRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      selectedRing.setAttribute('class', 'local-city-selected');
      selectedRing.setAttribute('cx', x.toFixed(2));
      selectedRing.setAttribute('cy', y.toFixed(2));
      selectedRing.setAttribute('r', (Math.max(8, radius * 1.95)).toFixed(2));
      wrap.appendChild(selectedRing);

      if (city.pop >= 30000 || city.service) {
        const orbit = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        orbit.setAttribute('class', 'local-city-orbit');
        orbit.setAttribute('cx', x.toFixed(2));
        orbit.setAttribute('cy', y.toFixed(2));
        orbit.setAttribute('r', (radius * 1.65).toFixed(2));
        wrap.appendChild(orbit);
      }

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('class', `local-city-dot ${city.pop >= 100000 ? 'major' : ''} ${city.service ? 'service' : ''}`);
      dot.setAttribute('cx', x.toFixed(2));
      dot.setAttribute('cy', y.toFixed(2));
      dot.setAttribute('r', radius.toFixed(2));

      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = `${city.name}: ${city.pop.toLocaleString()} people`;
      dot.appendChild(title);
      wrap.appendChild(dot);
      wrap.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        pickCity(city.name, { focusPanel: true });
      });
      wrap.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        event.stopPropagation();
        pickCity(city.name, { focusPanel: true });
      });
      group.appendChild(wrap);
      addLabel(group, city, x, y, radius);
    });

    svg.appendChild(group);
  }

  function placeholderActive(name) {
    const node = document.querySelector(`[data-local-placeholder="${name}"]`);
    return Boolean(node && node.style.display !== 'none');
  }

  function renderBoard() {
    const feed = document.querySelector('.rail-right .feed');
    if (!feed || !placeholderActive('cities')) return;
    if (window.GlobalDataLocalEventOwner && window.GlobalDataLocalEventOwner !== 'cities') return;
    ensureStyle();
    const current = selected() || CITIES[0];
    if (!current) return;
    selectedCity = current.name;
    const nearby = nearbyRestaurants(current);
    const clients = nearby.filter(isClient);
    const scheduled = nearby.filter(isScheduled);
    const estimate = marketEstimate(current, nearby.length);
    feed.classList.remove('ameripro-feed-mode', 'restaurant-feed-mode', 'county-drilldown-mode', 'opportunity-feed-mode');
    feed.classList.add('city-feed-mode');
    feed.querySelector('[data-restaurant-feed-board]')?.remove();
    feed.querySelector('[data-opportunity-board]')?.remove();
    feed.querySelector('[data-ameripro-tank-board]')?.remove();
    feed.querySelector('[data-county-drilldown-board]')?.remove();
    let board = feed.querySelector('[data-city-feed-board]');
    if (!board) {
      board = document.createElement('div');
      board.className = 'city-feed-board';
      board.dataset.cityFeedBoard = '1';
      feed.appendChild(board);
    }
    const key = `${current.name}:${CITIES.length}`;
    if (board.dataset.renderKey === key) return;
    board.dataset.renderKey = key;
    board.innerHTML = [
      '<div class="city-feed-head">',
      '<span>CITIES</span>',
      `<span>${CITIES.length} MARKETS</span>`,
      '</div>',
      '<div class="city-selected-card">',
      `<div class="city-title">${escapeHtml(current.name.toUpperCase())}</div>`,
      row('CLASS', cityClass(current), current.service ? '#5bd7ff' : current.pop >= 100000 ? '#ff8a3d' : '#cfe2ff'),
      row('POPULATION', formatPop(current.pop)),
      row('RESTAURANTS', `${nearby.length} known / ${estimate} est. market`, '#f5d142'),
      row('CLIENTS', `${clients.length} Ameripro / ${scheduled.length} scheduled`, clients.length ? '#73ff9a' : '#7a94b8'),
      row('COORD', `${current.lat.toFixed(4)}, ${current.lon.toFixed(4)}`),
      row('SERVICE', current.service ? 'Ameripro office/service-area city' : 'Mapped Georgia municipality'),
      row('SOURCE', 'Static Georgia municipal seed data'),
      '</div>',
      '<div class="city-list" data-city-list>',
      CITIES.map(city => [
        `<button class="${city.name === selectedCity ? 'active' : ''}" data-city-row="${escapeHtml(city.name)}">`,
        '<span>',
        `<strong>${escapeHtml(city.name)}</strong>`,
        `<small>${escapeHtml(cityClass(city))}</small>`,
        '</span>',
        `<span class="city-pop">${formatPop(city.pop)}</span>`,
        '</button>',
      ].join('')).join(''),
      '</div>',
    ].join('');
    board.querySelectorAll('[data-city-row]').forEach(button => {
      button.addEventListener('click', () => pickCity(button.dataset.cityRow, { focusPanel: true }));
    });
  }

  function focusPanel() {
    const list = document.querySelector('[data-city-list]');
    const row = list?.querySelector('button.active');
    if (!list || !row) return;
    const rowTop = row.offsetTop - list.offsetTop;
    list.scrollTop = Math.max(0, rowTop - (list.clientHeight / 2) + (row.clientHeight / 2));
  }

  function resetBoard() {
    const feed = document.querySelector('.rail-right .feed.city-feed-mode');
    if (!feed) return;
    feed.classList.remove('city-feed-mode');
    feed.querySelector('[data-city-feed-board]')?.remove();
  }

  function pickCity(name, options = {}) {
    selectedCity = name || selectedCity || CITIES[0]?.name || '';
    window.GlobalDataLocalEventOwner = 'cities';
    document.querySelectorAll('.local-city-marker').forEach(node => {
      node.classList.toggle('selected', node.dataset.cityName === selectedCity);
    });
    renderBoard();
    if (options.focusPanel) focusPanel();
  }

  function syncLayer() {
    const svg = document.querySelector('[data-local-map-svg]');
    if (!svg) return;
    ensureStyle();
    const viewBox = svg.getAttribute('viewBox') || '';
    const exists = Boolean(svg.querySelector('[data-local-cities]'));
    if (viewBox !== lastViewBox || !exists) {
      lastViewBox = viewBox;
      drawCities(svg, projectFactory(svg));
    }

    const active = placeholderActive('cities');
    svg.querySelectorAll('[data-local-cities]').forEach(node => {
      node.style.display = active ? '' : 'none';
    });
    if (active && (!window.GlobalDataLocalEventOwner || window.GlobalDataLocalEventOwner === 'cities')) renderBoard();
    if (!active) resetBoard();

    const sub = document.querySelector('[data-local-menu-layer="cities"] .layer-sub');
    if (sub) sub.textContent = `${CITIES.length} CITIES / POP > 3K / SCALED`;
  }

  window.GlobalDataCities = {
    setActive(active) {
      if (active) {
        if (!selectedCity) selectedCity = CITIES[0]?.name || '';
        if (!window.GlobalDataLocalEventOwner) window.GlobalDataLocalEventOwner = 'cities';
        renderBoard();
      } else {
        if (window.GlobalDataLocalEventOwner === 'cities') window.GlobalDataLocalEventOwner = '';
        resetBoard();
      }
      syncLayer();
    },
    selectCity: pickCity,
    getCities: () => CITIES.slice(),
  };

  setInterval(syncLayer, window.AmeriproPerformance?.interval?.(300) || 300);
})();
