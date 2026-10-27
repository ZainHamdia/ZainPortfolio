/**
 * Zain Hamdia - Global Travel Map
 * Interactive Leaflet Map with CartoDB Dark Matter Tiles
 * 100% Grounded in Visited Locations List
 */

const VISITED_LOCATIONS = [
  {
    id: "orosi",
    name: "Orosi Valley, Costa Rica",
    city: "Orosi Valley",
    country: "Costa Rica",
    region: "Americas",
    lat: 9.7997,
    lng: -83.8567,
    flag: "🇨🇷",
    description: "Lush volcanic coffee valley, Cartago Province cloud forests, and colonial heritage.",
    tag: "Central America"
  },
  {
    id: "london",
    name: "London, UK",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    lat: 51.5074,
    lng: -0.1278,
    flag: "🇬🇧",
    description: "Historic cultural center, world-renowned engineering museums, and urban exploration.",
    tag: "Western Europe"
  },
  {
    id: "paris",
    name: "Paris, France",
    city: "Paris",
    country: "France",
    region: "Europe",
    lat: 48.8566,
    lng: 2.3522,
    flag: "🇫🇷",
    description: "Iconic architecture, classical bridges across the Seine, and global art collections.",
    tag: "Western Europe"
  },
  {
    id: "cairo",
    name: "Cairo, Egypt",
    city: "Cairo",
    country: "Egypt",
    region: "Middle East & Africa",
    lat: 30.0444,
    lng: 31.2357,
    flag: "🇪🇬",
    description: "Exhibited the ~5-foot humanoid robot Zainiac 19 at Cairo Maker Faire; historic pyramids and ancient civil engineering.",
    tag: "Maker Faire & Heritage"
  },
  {
    id: "el-gouna",
    name: "El Gouna, Egypt",
    city: "El Gouna",
    country: "Egypt",
    region: "Middle East & Africa",
    lat: 27.3949,
    lng: 33.6765,
    flag: "🇪🇬",
    description: "Red Sea lagoon town celebrated for sustainable coastal architecture and marine engineering.",
    tag: "Red Sea Coast"
  },
  {
    id: "milan",
    name: "Milan, Italy",
    city: "Milan",
    country: "Italy",
    region: "Europe",
    lat: 45.4642,
    lng: 9.1900,
    flag: "🇮🇹",
    description: "Global capital of industrial design, Italian precision engineering, and Lombardy architecture.",
    tag: "Design & Technology"
  },
  {
    id: "pisa",
    name: "Pisa, Italy",
    city: "Pisa",
    country: "Italy",
    region: "Europe",
    lat: 43.7228,
    lng: 10.4017,
    flag: "🇮🇹",
    description: "Piazza dei Miracoli and the world-renowned structural engineering study, the Leaning Tower.",
    tag: "Historic Engineering"
  },
  {
    id: "venice",
    name: "Venice, Italy",
    city: "Venice",
    country: "Italy",
    region: "Europe",
    lat: 45.4408,
    lng: 12.3155,
    flag: "🇮🇹",
    description: "Lagoon maritime navigation, tidal civil defense engineering, and Venetian Gothic architecture.",
    tag: "Maritime & Canals"
  },
  {
    id: "florence",
    name: "Florence, Italy",
    city: "Florence",
    country: "Italy",
    region: "Europe",
    lat: 43.7696,
    lng: 11.2558,
    flag: "🇮🇹",
    description: "Birthplace of the Renaissance; Brunelleschi’s revolutionary cathedral dome engineering.",
    tag: "Renaissance Engineering"
  },
  {
    id: "brussels",
    name: "Brussels, Belgium",
    city: "Brussels",
    country: "Belgium",
    region: "Europe",
    lat: 50.8503,
    lng: 4.3517,
    flag: "🇧🇪",
    description: "Presented Zainiac 19 at Brussels Maker Faire; featured on Belgian National TV News and invited to join Brussels leadership at the opening ceremony.",
    tag: "Maker Faire Exhibition"
  },
  {
    id: "sarajevo",
    name: "Sarajevo, Bosnia & Herzegovina",
    city: "Sarajevo",
    country: "Bosnia & Herzegovina",
    region: "Europe",
    lat: 43.8563,
    lng: 18.4131,
    flag: "🇧🇦",
    description: "Historic valley crossroads connecting Ottoman, Austro-Hungarian, and modern Balkan architecture.",
    tag: "Balkan History"
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    lat: 35.6762,
    lng: 139.6503,
    flag: "🇯🇵",
    description: "Global center of cutting-edge humanoid robotics, Shinkansen high-speed rail, and futuristic city planning.",
    tag: "Robotics & Innovation"
  },
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    city: "Kyoto",
    country: "Japan",
    region: "Asia",
    lat: 35.0116,
    lng: 135.7681,
    flag: "🇯🇵",
    description: "Ancient imperial capital; master carpentry, joinery without nails, and classical Zen temple architecture.",
    tag: "Timber Architecture"
  },
  {
    id: "kanazawa",
    name: "Kanazawa, Japan",
    city: "Kanazawa",
    country: "Japan",
    region: "Asia",
    lat: 36.5613,
    lng: 136.6562,
    flag: "🇯🇵",
    description: "Hokuriku cultural heritage, Edo-period samurai preservation, and contemporary art curation.",
    tag: "Art & Craftsmanship"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("travel-map");
  if (!mapElement || typeof L === "undefined") return;

  // Initialize Leaflet Map with a world overview
  const map = L.map("travel-map", {
    center: [25, 10],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: false,
    scrollWheelZoom: true
  });

  // Position Zoom Control top-left
  L.control.zoom({ position: "topleft" }).addTo(map);

  // 1. Esri World Dark Gray (Base + Reference) — Free, no API key, no watermark
  const esriDarkBase = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: '&copy; <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer">Esri</a> &mdash; DeLorme, NAVTEQ',
    maxZoom: 16
  });
  const esriDarkRef = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16
  });
  const darkLayer = L.layerGroup([esriDarkBase, esriDarkRef]);

  // 2. Esri World Imagery (Satellite + Boundaries/Places) — High-res satellite
  const satBase = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    attribution: '&copy; <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer">Esri</a>, Earthstar Geographics',
    maxZoom: 18
  });
  const satRef = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 18
  });
  const satelliteLayer = L.layerGroup([satBase, satRef]);

  // Layer lookup
  const mapLayers = {
    dark: darkLayer,
    satellite: satelliteLayer
  };

  let activeLayer = darkLayer;
  activeLayer.addTo(map);

  // Map style switcher listener
  const styleButtons = document.querySelectorAll("[data-map-style]");
  styleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.mapStyle;
      if (!mapLayers[chosen] || mapLayers[chosen] === activeLayer) return;

      styleButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      map.removeLayer(activeLayer);
      activeLayer = mapLayers[chosen];
      map.addLayer(activeLayer);
    });
  });

  // Store marker references
  const markerMap = new Map();
  const allLatLngs = [];

  // SVG Pin Markup matching the user's screenshot
  const pinSvg = `
    <svg viewBox="0 0 24 24" class="pin-svg-icon" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `;

  // Create custom marker icons and popups
  VISITED_LOCATIONS.forEach((loc) => {
    const latLng = [loc.lat, loc.lng];
    allLatLngs.push(latLng);

    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: `<div class="pin-pulse"></div>${pinSvg}`,
      iconSize: [26, 26],
      iconAnchor: [13, 24],
      popupAnchor: [0, -22]
    });

    const popupContent = `
      <div class="travel-popup">
        <div class="travel-popup-tag">${loc.region} • ${loc.tag}</div>
        <h4 class="travel-popup-title">${loc.flag} ${loc.name}</h4>
        <p class="travel-popup-desc">${loc.description}</p>
        <div class="travel-popup-meta">Coordinates: ${loc.lat.toFixed(4)}°, ${loc.lng.toFixed(4)}°</div>
      </div>
    `;

    const marker = L.marker(latLng, { icon: customIcon }).addTo(map);
    marker.bindPopup(popupContent);

    // Marker click event
    marker.on("click", () => {
      highlightListItem(loc.id);
    });

    markerMap.set(loc.id, marker);
  });

  // Fit bounds initially to comfortably show all destinations
  if (allLatLngs.length > 0) {
    const bounds = L.latLngBounds(allLatLngs);
    map.fitBounds(bounds, { padding: [60, 60] });
  }

  // Render Sidebar List Items
  const listContainer = document.getElementById("visited-locations-list");
  let currentFilter = "all";
  let currentSearch = "";

  function renderList() {
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const filtered = VISITED_LOCATIONS.filter((loc) => {
      const matchRegion = currentFilter === "all" || loc.region.toLowerCase() === currentFilter.toLowerCase();
      const matchSearch =
        currentSearch === "" ||
        loc.name.toLowerCase().includes(currentSearch) ||
        loc.country.toLowerCase().includes(currentSearch) ||
        loc.tag.toLowerCase().includes(currentSearch);
      return matchRegion && matchSearch;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <li style="padding: 20px; text-align: center; color: #94a3b8; font-size: 0.9rem;">
          No matching destinations found
        </li>
      `;
      return;
    }

    filtered.forEach((loc) => {
      const li = document.createElement("li");
      li.className = "visited-location-item";
      li.dataset.locationId = loc.id;
      li.innerHTML = `
        <svg viewBox="0 0 24 24" class="location-pin-icon" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span style="flex: 1;">${loc.name}</span>
        <span style="font-size: 0.8rem; opacity: 0.7;">${loc.flag}</span>
      `;

      li.addEventListener("click", () => {
        focusLocation(loc.id);
      });

      listContainer.appendChild(li);
    });
  }

  renderList();

  // Focus and Zoom on Location
  function focusLocation(locId) {
    const loc = VISITED_LOCATIONS.find((l) => l.id === locId);
    const marker = markerMap.get(locId);
    if (!loc || !marker) return;

    // Highlight in list
    highlightListItem(locId);

    // Fly map to coordinate
    map.flyTo([loc.lat, loc.lng], 9, {
      animate: true,
      duration: 1.2
    });

    // Open Popup after slight delay
    setTimeout(() => {
      marker.openPopup();
    }, 400);
  }

  function highlightListItem(locId) {
    const items = document.querySelectorAll(".visited-location-item");
    items.forEach((item) => {
      if (item.dataset.locationId === locId) {
        item.classList.add("active");
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });

    // Also highlight pin
    markerMap.forEach((m, id) => {
      const el = m.getElement();
      if (el) {
        if (id === locId) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });
  }

  // Search input handler
  const searchInput = document.getElementById("visited-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderList();
    });
  }

  // Filter Buttons
  const filterButtons = document.querySelectorAll(".visited-filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.region || "all";
      renderList();

      // Adjust map view to filtered markers if specific region selected
      if (currentFilter === "all") {
        map.flyToBounds(L.latLngBounds(allLatLngs), { padding: [60, 60], duration: 1 });
      } else {
        const regionLocs = VISITED_LOCATIONS.filter(
          (l) => l.region.toLowerCase() === currentFilter.toLowerCase()
        ).map((l) => [l.lat, l.lng]);
        if (regionLocs.length > 0) {
          map.flyToBounds(L.latLngBounds(regionLocs), { padding: [80, 80], maxZoom: 8, duration: 1 });
        }
      }
    });
  });
});
