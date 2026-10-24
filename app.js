// AutoPool India - Core Application Logic with Deal Pass & Handover Protocol

// Seed Data representing active Indian automotive pools
const INITIAL_POOLS = [
  {
    id: "pool-1",
    model: "Hyundai Creta",
    variant: "SX(O) 1.5 Turbo Petrol DCT",
    city: "Delhi-NCR",
    targetMembers: 5,
    currentMembers: 4,
    exShowroom: 1980000,
    targetDiscount: 85000,
    status: "pooling", // 'pooling' | 'auction' | 'finalized'
    timeLeft: "22h 15m",
    winningDealer: null,
    members: [
      { name: "Rahul Sharma (Noida)", color: "Titan Grey", mode: "Pre-Approved Bank Auto Loan", rto: "UP-16 Noida" },
      { name: "Amit Verma (Gurgaon)", color: "Abyss Black", mode: "Direct Cash / RTGS", rto: "HR-26 Gurgaon" },
      { name: "Vikas Malhotra (Delhi)", color: "Atlas White", mode: "Pre-Approved Bank Auto Loan", rto: "DL-03 South Delhi" },
      { name: "Pooja Kapoor (Faridabad)", color: "Ranger Khaki", mode: "Pre-Approved Bank Auto Loan", rto: "HR-51 Faridabad" }
    ],
    bids: []
  },
  {
    id: "pool-2",
    model: "Tata Nexon EV",
    variant: "Empowered+ 45 Long Range",
    city: "Bengaluru",
    targetMembers: 5,
    currentMembers: 5,
    exShowroom: 1699000,
    targetDiscount: 95000,
    status: "auction",
    timeLeft: "14h 40m",
    winningDealer: {
      name: "Prerana Motors (Lalbagh Road, Bengaluru)",
      executive: "Mr. Shridhar Rao (GM - Fleet Operations)",
      phone: "+91 98450 12345",
      discount: 92000,
      perks: "Zero handling charge + Free 7.2kW AC Fast Charger installation + 3-yr RSA"
    },
    members: [
      { name: "Karthik R. (Indiranagar)", color: "Empowered Oxide", mode: "Direct Cash / RTGS", rto: "KA-03 Indiranagar" },
      { name: "Suresh Nair (Whitefield)", color: "Pristine White", mode: "Pre-Approved Bank Auto Loan", rto: "KA-53 KR Puram" },
      { name: "Ananya Bhat (HSR Layout)", color: "Daytona Grey", mode: "Pre-Approved Bank Auto Loan", rto: "KA-01 Koramangala" },
      { name: "Deepak Somani (Koramangala)", color: "Ocean Blue", mode: "Corporate Car Lease", rto: "KA-01 Koramangala" },
      { name: "Prashanth M. (JP Nagar)", color: "Flame Red", mode: "Pre-Approved Bank Auto Loan", rto: "KA-05 Jayanagar" }
    ],
    bids: [
      {
        dealer: "Prerana Motors (Lalbagh Road)",
        discount: 92000,
        perks: "Zero handling charge + Free 7.2kW AC Fast Charger installation + Floor Mats",
        verified: true,
        timestamp: "2 hours ago"
      },
      {
        dealer: "KHT Motors (Whitefield)",
        discount: 85000,
        perks: "Matching online insurance + 3-year Extended Warranty included",
        verified: true,
        timestamp: "4 hours ago"
      },
      {
        dealer: "Kropex Tata (Hosur Road)",
        discount: 78000,
        perks: "Immediate vehicle dispatch from stockyard within 4 days",
        verified: true,
        timestamp: "5 hours ago"
      }
    ]
  },
  {
    id: "pool-3",
    model: "Mahindra Scorpio-N",
    variant: "Z8 L 2.2 Diesel 4WD AT",
    city: "Mumbai-MMR",
    targetMembers: 5,
    currentMembers: 3,
    exShowroom: 2450000,
    targetDiscount: 110000,
    status: "pooling",
    timeLeft: "36h 10m",
    winningDealer: null,
    members: [
      { name: "Nitin Patil (Thane)", color: "Deep Forest", mode: "Pre-Approved Bank Auto Loan", rto: "MH-04 Thane" },
      { name: "Rohan Deshmukh (Bandra)", color: "Napoli Black", mode: "Direct Cash / RTGS", rto: "MH-02 Mumbai West" },
      { name: "Aditya Sawant (Navi Mumbai)", color: "Everest White", mode: "Pre-Approved Bank Auto Loan", rto: "MH-43 Vashi" }
    ],
    bids: []
  },
  {
    id: "pool-4",
    model: "Maruti Grand Vitara",
    variant: "Alpha+ Strong Hybrid e-CVT",
    city: "Hyderabad",
    targetMembers: 5,
    currentMembers: 4,
    exShowroom: 1995000,
    targetDiscount: 90000,
    status: "pooling",
    timeLeft: "18h 55m",
    winningDealer: null,
    members: [
      { name: "Sai Krishna (Gachibowli)", color: "Nexa Blue", mode: "Pre-Approved Bank Auto Loan", rto: "TS-09 Hyderabad Central" },
      { name: "Venkat P. (Madhapur)", color: "Arctic White", mode: "Pre-Approved Bank Auto Loan", rto: "TS-10 Secunderabad" },
      { name: "Srinivas G. (Secunderabad)", color: "Grandeur Grey", mode: "Direct Cash / RTGS", rto: "TS-08 Medchal" },
      { name: "Harish M. (Kukatpally)", color: "Splendid Silver", mode: "Corporate Car Lease", rto: "TS-07 Cyberabad" }
    ],
    bids: []
  },
  {
    id: "pool-5",
    model: "Kia Seltos",
    variant: "GTX+ 1.5 Turbo Petrol DCT",
    city: "Pune",
    targetMembers: 5,
    currentMembers: 5,
    exShowroom: 1999000,
    targetDiscount: 80000,
    status: "auction",
    timeLeft: "08h 12m",
    winningDealer: {
      name: "Crystal Kia (Bavdhan, Pune)",
      executive: "Mr. Amol Kulkarni (GM - Corporate Sales)",
      phone: "+91 98220 88776",
      discount: 88000,
      perks: "Dealer insurance markup eliminated + Free 3-year scheduled service package"
    },
    members: [
      { name: "Swapnil Joshi (Kothrud)", color: "Pewter Olive", mode: "Pre-Approved Bank Auto Loan", rto: "MH-12 Pune" },
      { name: "Gaurav Tiwari (Viman Nagar)", color: "Aurora Black Pearl", mode: "Direct Cash / RTGS", rto: "MH-12 Pune" },
      { name: "Mandar Kulkarni (Baner)", color: "Glacier White Pearl", mode: "Pre-Approved Bank Auto Loan", rto: "MH-14 Pimpri Chinchwad" },
      { name: "Pooja Deshpande (Wakad)", color: "Imperial Blue", mode: "Pre-Approved Bank Auto Loan", rto: "MH-14 Pimpri Chinchwad" },
      { name: "Sachin Navale (Hinjewadi)", color: "Gravity Grey", mode: "Corporate Car Lease", rto: "MH-12 Pune" }
    ],
    bids: [
      {
        dealer: "Crystal Kia (Bavdhan)",
        discount: 88000,
        perks: "Dealer insurance markup eliminated + Free 3-year scheduled service package",
        verified: true,
        timestamp: "1 hour ago"
      },
      {
        dealer: "Bhandari Kia (Hadapsar)",
        discount: 82000,
        perks: "Free Ceramic Coating + OEM Door Visors + Zero handling fees",
        verified: true,
        timestamp: "3 hours ago"
      }
    ]
  },
  {
    id: "pool-6",
    model: "Toyota Innova Hycross",
    variant: "VX(O) 8-Str Strong Hybrid",
    city: "All-India-BH",
    targetMembers: 5,
    currentMembers: 2,
    exShowroom: 2790000,
    targetDiscount: 120000,
    status: "pooling",
    timeLeft: "48h 00m",
    winningDealer: null,
    members: [
      { name: "Col. Sanjeev Verma (Army Officer)", color: "Attitude Black", mode: "Direct Cash / RTGS", rto: "BH Series (Central)" },
      { name: "Rajesh Sharma (TCS Executive)", color: "Super White", mode: "Pre-Approved Bank Auto Loan", rto: "BH Series (Corporate)" }
    ],
    bids: []
  }
];

// Application State
let pools = [];
let currentPersona = 'buyer'; // 'buyer' or 'dealer'
let selectedPoolForAuction = null;
let currentActivePassPool = null;

// Initialize App
function initApp() {
  const stored = localStorage.getItem('autopool_data_v2');
  if (stored) {
    try {
      pools = JSON.parse(stored);
    } catch (e) {
      pools = INITIAL_POOLS;
    }
  } else {
    pools = INITIAL_POOLS;
    savePools();
  }

  renderPools();
  updateCalculator();
  startTimerTicker();
}

function savePools() {
  localStorage.setItem('autopool_data_v2', JSON.stringify(pools));
}

// Persona Management
function setPersona(persona) {
  currentPersona = persona;
  const buyerBtn = document.getElementById('personaBuyerBtn');
  const dealerBtn = document.getElementById('personaDealerBtn');
  const roleBanner = document.getElementById('roleBanner');
  const roleBannerText = document.getElementById('roleBannerText');

  if (persona === 'buyer') {
    buyerBtn.classList.add('active');
    dealerBtn.classList.remove('active', 'dealer-active');
    roleBanner.className = 'role-banner buyer-mode';
    roleBannerText.innerHTML = `<strong>🚗 You are in Buyer Mode:</strong> Browse pools, join 4 other buyers in your city, pledge a refundable ₹5,000 token, and trigger a dealer reverse auction.`;
  } else {
    dealerBtn.classList.add('active', 'dealer-active');
    buyerBtn.classList.remove('active');
    roleBanner.className = 'role-banner dealer-mode';
    roleBannerText.innerHTML = `<strong>🏢 You are in Dealer Portal:</strong> View pools of 5 committed buyers with verified pre-approvals. Bid wholesale cash discounts to secure bulk allocations and hit your monthly OEM sales quotas.`;
  }

  renderPools();
}

function togglePersona() {
  setPersona(currentPersona === 'buyer' ? 'dealer' : 'buyer');
}

// Format INR Currency
function formatINR(amount) {
  return "₹" + amount.toLocaleString('en-IN');
}

// Render Pools based on Filters
function renderPools() {
  const container = document.getElementById('poolsContainer');
  const search = document.getElementById('searchInput').value.toLowerCase().trim();
  const city = document.getElementById('cityFilter').value;
  const status = document.getElementById('statusFilter').value;

  const filtered = pools.filter(p => {
    const matchesSearch = p.model.toLowerCase().includes(search) || 
                          p.variant.toLowerCase().includes(search) ||
                          p.city.toLowerCase().includes(search);
    const matchesCity = (city === 'all') || (p.city === city);
    const matchesStatus = (status === 'all') || (p.status === status);
    return matchesSearch && matchesCity && matchesStatus;
  });

  document.getElementById('poolCountBadge').innerText = `${filtered.length} Active Pools`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🚗</div>
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 6px;">No Pools Found Matching Filters</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 400px; margin: 0 auto 18px;">
          Be the pioneer! Create a new pool for your car model in your city and invite other buyers.
        </p>
        <button class="btn-create-pool" style="margin: 0 auto;" onclick="openCreatePoolModal()">
          + Start a New Pool
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isFull = p.currentMembers >= p.targetMembers;
    const percent = Math.min(100, Math.round((p.currentMembers / p.targetMembers) * 100));
    const leadingBid = p.bids && p.bids.length > 0 ? p.bids[0] : null;

    let statusBadge = '';
    if (p.status === 'auction') {
      statusBadge = `<span class="badge badge-status-auction">🔥 Reverse Auction Live (${p.currentMembers}/${p.targetMembers})</span>`;
    } else if (p.status === 'pooling') {
      statusBadge = `<span class="badge badge-status-pooling">👥 Pooling (${p.currentMembers}/${p.targetMembers})</span>`;
    } else {
      statusBadge = `<span class="badge badge-status-closed">✅ Finalized</span>`;
    }

    // Dealer preview or Buyer action
    let actionButtons = '';
    if (currentPersona === 'dealer') {
      actionButtons = `
        <button class="btn-dealer-bid" onclick="openAuctionModal('${p.id}')">
          🏢 Submit Fleet Bid (${isFull ? '5 Units' : `${p.currentMembers} Interested`})
        </button>
        ${isFull ? `
          <button class="btn-deal-pass" onclick="openDealPassModal('${p.id}')">
            📋 View 5-Buyer Allocation Dossier
          </button>
        ` : ''}
      `;
    } else {
      if (isFull) {
        actionButtons = `
          <button class="btn-view-auction" onclick="openAuctionModal('${p.id}')">
            ⚡ View Live Dealer Bids (${p.bids.length})
          </button>
          <button class="btn-deal-pass" onclick="openDealPassModal('${p.id}')">
            🎟️ View Deal Pass & Booking Docket
          </button>
        `;
      } else {
        actionButtons = `
          <div style="display: flex; gap: 8px;">
            <button class="btn-join" onclick="openJoinModal('${p.id}')">
              🤝 Join Pool (${p.targetMembers - p.currentMembers} left)
            </button>
            <button class="btn-view-auction" style="flex: 0.5; background: #f1f5f9; color: #475569;" onclick="openAuctionModal('${p.id}')">
              Bids
            </button>
          </div>
        `;
      }
    }

    return `
      <div class="pool-card">
        <div class="card-top">
          <div class="card-tags">
            <span class="badge badge-city">📍 ${p.city}</span>
            ${statusBadge}
          </div>
          <h4 class="car-title">${p.model}</h4>
          <div class="car-variant">${p.variant}</div>
        </div>

        <div class="card-body">
          <!-- Progress -->
          <div class="progress-section">
            <div class="progress-header">
              <span>Pool Formation</span>
              <span><strong>${p.currentMembers}</strong> of <strong>${p.targetMembers}</strong> Buyers</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${isFull ? 'full' : ''}" style="width: ${percent}%;"></div>
            </div>
            <div class="progress-footer">
              <span>${isFull ? '🔒 Pool Locked! 5 Orders Ready' : `${p.targetMembers - p.currentMembers} more needed to trigger auction`}</span>
              <span>⏱ ${p.timeLeft} left</span>
            </div>
          </div>

          <!-- Financials -->
          <div class="financial-grid">
            <div class="fin-box">
              <div class="fin-label">Ex-Showroom Base</div>
              <div class="fin-value">${formatINR(p.exShowroom)}</div>
            </div>
            <div class="fin-box">
              <div class="fin-label">Est. Group Discount</div>
              <div class="fin-value discount">${formatINR(leadingBid ? leadingBid.discount : p.targetDiscount)}/car</div>
            </div>
          </div>

          <!-- Dealer Bidding Preview if Active -->
          ${isFull && leadingBid ? `
            <div class="bidding-preview">
              <div class="bidding-header">
                <span>Top Dealer: ${leadingBid.dealer}</span>
                <span class="good-text">${formatINR(leadingBid.discount)} Off</span>
              </div>
              <div class="bidding-top-offer">
                "${leadingBid.perks}"
              </div>
            </div>
          ` : `
            <div style="font-size: 0.78rem; color: var(--text-muted); background: #f8fafc; padding: 8px 12px; border-radius: 6px;">
              💡 <strong>Handover Security:</strong> Dealers only receive buyer names and RTO city when all 5 spots are locked.
            </div>
          `}
        </div>

        <div class="card-footer">
          ${actionButtons}
        </div>
      </div>
    `;
  }).join('');
}

// Modal Helpers
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Open Create Pool Modal
function openCreatePoolModal() {
  openModal('createPoolModal');
}

function handleCreatePool(e) {
  e.preventDefault();
  const model = document.getElementById('poolCarModel').value.trim();
  const variant = document.getElementById('poolVariant').value.trim();
  const city = document.getElementById('poolCity').value;
  const exShowroom = parseInt(document.getElementById('poolExShowroom').value, 10);
  const creator = document.getElementById('poolCreatorName').value.trim();

  const newPool = {
    id: "pool-" + Date.now(),
    model: model,
    variant: variant,
    city: city,
    targetMembers: 5,
    currentMembers: 1,
    exShowroom: exShowroom,
    targetDiscount: Math.round(exShowroom * 0.055), // approx 5.5% wholesale discount
    status: "pooling",
    timeLeft: "48h 00m",
    winningDealer: null,
    members: [
      { name: creator, color: "Any OEM Color", mode: "Pre-Approved Bank Auto Loan", rto: city }
    ],
    bids: []
  };

  pools.unshift(newPool);
  savePools();
  closeModal('createPoolModal');
  document.getElementById('createPoolForm').reset();
  renderPools();
  showToast(`🎉 Pool created for ${model}! You are Member #1. Invite 4 friends or let others join.`);
}

// Open Join Pool Modal
function openJoinModal(poolId) {
  const p = pools.find(item => item.id === poolId);
  if (!p) return;

  document.getElementById('joinPoolId').value = p.id;
  document.getElementById('joinModalTitle').innerText = `Join ${p.model} Pool`;
  document.getElementById('joinModalSummary').innerHTML = `
    <div style="font-weight: 700; font-size: 1.05rem; color: var(--primary);">${p.model} - ${p.variant}</div>
    <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">📍 Cluster: ${p.city} | Base: ${formatINR(p.exShowroom)}</div>
    <div style="font-size: 0.85rem; color: var(--emerald-dark); font-weight: 600; margin-top: 4px;">
      Expected Group Discount: ${formatINR(p.targetDiscount)} off ex-showroom + zero forced accessories!
    </div>
  `;

  openModal('joinPoolModal');
}

function handleJoinPool(e) {
  e.preventDefault();
  const poolId = document.getElementById('joinPoolId').value;
  const name = document.getElementById('joinBuyerName').value.trim();
  const phone = document.getElementById('joinBuyerPhone').value.trim();
  const color = document.getElementById('joinColorPreference').value.trim();
  const mode = document.getElementById('joinPaymentMode').value;

  const pool = pools.find(p => p.id === poolId);
  if (!pool) return;

  if (pool.currentMembers >= pool.targetMembers) {
    alert("This pool is already full! Please join another or start a new pool.");
    closeModal('joinPoolModal');
    return;
  }

  pool.currentMembers += 1;
  pool.members.push({ name: name, phone: phone, color: color, mode: mode, rto: pool.city });

  if (pool.currentMembers >= pool.targetMembers) {
    pool.status = 'auction';
    pool.timeLeft = '24h 00m';
    if (!pool.bids || pool.bids.length === 0) {
      pool.bids = [
        {
          dealer: `Authorized ${pool.model.split(' ')[0]} Hub (${pool.city})`,
          discount: pool.targetDiscount + 5000,
          perks: "Zero accessory bundling + Fast track chassis allocation",
          verified: true,
          timestamp: "Just now"
        }
      ];
    }
    pool.winningDealer = {
      name: `Authorized ${pool.model.split(' ')[0]} Hub (${pool.city})`,
      executive: "Mr. Rajesh Kumar (GM - Corporate Sales)",
      phone: "+91 98110 54321",
      discount: pool.targetDiscount + 5000,
      perks: "Zero accessory bundling + Fast track stockyard delivery"
    };
  }

  savePools();
  closeModal('joinPoolModal');
  document.getElementById('joinPoolForm').reset();
  renderPools();

  if (pool.status === 'auction') {
    showToast(`🔥 5/5 Buyers Reached! Pool locked & dealer reverse auction is now live!`);
    openDealPassModal(pool.id);
  } else {
    showToast(`✅ You joined the pool! (${pool.currentMembers}/${pool.targetMembers} joined)`);
  }
}

// Open Auction Room & Dealer Bidding Modal
function openAuctionModal(poolId) {
  const p = pools.find(item => item.id === poolId);
  if (!p) return;

  selectedPoolForAuction = p;
  document.getElementById('dealerBidPoolId').value = p.id;
  document.getElementById('auctionModalTitle').innerText = `${p.model} - 5 Car Bulk Pool`;
  document.getElementById('auctionModalSubtitle').innerText = `Cluster: ${p.city} | Pool ID: #${p.id.toUpperCase()}`;
  document.getElementById('auctionTimer').innerText = p.timeLeft || '18h 30m';

  renderAuctionBids(p);
  openModal('auctionModal');
}

function renderAuctionBids(p) {
  const list = document.getElementById('auctionBidsList');
  if (!p.bids || p.bids.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); background: var(--surface-subtle); border-radius: 8px;">
        No bids submitted yet. Dealerships in ${p.city} are reviewing the buyer requests.
      </div>
    `;
    return;
  }

  // Sort bids by highest discount
  const sorted = [...p.bids].sort((a, b) => b.discount - a.discount);

  list.innerHTML = sorted.map((bid, index) => {
    const isLeading = index === 0;
    return `
      <div class="bid-item ${isLeading ? 'leading' : ''}">
        <div class="bid-item-top">
          <div class="bid-dealer">
            ${isLeading ? '👑 <strong>LEADER:</strong> ' : `#${index + 1} `}
            ${bid.dealer}
            ${bid.verified ? '<span style="color: var(--accent); font-size: 0.8rem;" title="Verified OEM Authorized Dealer">✓ Verified Dealer</span>' : ''}
          </div>
          <div class="bid-amount">${formatINR(bid.discount)} Cash Off</div>
        </div>
        <div class="bid-perks">
          📦 <strong>Perks Included:</strong> ${bid.perks}
        </div>
        <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 4px;">
          Submitted: ${bid.timestamp || 'Recent'}
        </div>
      </div>
    `;
  }).join('');
}

// Handle Dealer Bid Submission
function handleDealerBid(e) {
  e.preventDefault();
  const poolId = document.getElementById('dealerBidPoolId').value;
  const dealerName = document.getElementById('bidDealerName').value.trim();
  const discount = parseInt(document.getElementById('bidCashDiscount').value, 10);
  const perks = document.getElementById('bidPerks').value.trim();

  const p = pools.find(item => item.id === poolId);
  if (!p) return;

  if (!p.bids) p.bids = [];

  const newBid = {
    dealer: dealerName,
    discount: discount,
    perks: perks,
    verified: true,
    timestamp: "Just now"
  };

  p.bids.push(newBid);
  // Re-sort
  p.bids.sort((a, b) => b.discount - a.discount);

  p.winningDealer = {
    name: dealerName,
    executive: "Authorized GM (Corporate Sales)",
    phone: "+91 98XXX XXXXX",
    discount: discount,
    perks: perks
  };

  savePools();
  renderAuctionBids(p);
  renderPools();
  document.getElementById('dealerBidForm').reset();
  showToast(`⚡ Dealer Bid of ${formatINR(discount)}/car submitted by ${dealerName}!`);
}

// Open Deal Pass & Handover Docket Modal
function openDealPassModal(poolId) {
  const p = pools.find(item => item.id === poolId);
  if (!p) return;

  currentActivePassPool = p;
  const topBid = (p.bids && p.bids.length > 0) ? p.bids[0] : { dealer: `Authorized ${p.model.split(' ')[0]} Showroom`, discount: p.targetDiscount };
  const leadMember = p.members && p.members.length > 0 ? p.members[0] : { name: "Rohit Sharma", rto: p.city };

  // Fill Buyer Pass
  document.getElementById('passCarModel').innerText = `${p.model} - ${p.variant}`;
  document.getElementById('passBookingId').innerText = `AP-${p.city.substring(0,3).toUpperCase()}-${p.id.slice(-4).toUpperCase()}-B1`;
  document.getElementById('passBuyerName').innerText = leadMember.name;
  document.getElementById('passBuyerRTO').innerText = leadMember.rto || p.city;
  document.getElementById('passDealerName').innerText = topBid.dealer;
  document.getElementById('passDiscountAmount').innerText = `${formatINR(topBid.discount)} Off Ex-Showroom`;

  // Fill Dealer GM Dossier Table
  const tbody = document.getElementById('dossierBuyersBody');
  tbody.innerHTML = (p.members || []).map((m, idx) => `
    <tr>
      <td><strong>${idx + 1}</strong></td>
      <td><strong>${m.name}</strong></td>
      <td>${m.rto || p.city}</td>
      <td>${m.color}</td>
      <td><span style="font-size: 0.75rem; background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">${m.mode}</span></td>
    </tr>
  `).join('');

  const totalValue = p.exShowroom * (p.members ? p.members.length : 5);
  const totalDiscount = topBid.discount * (p.members ? p.members.length : 5);
  document.getElementById('dossierTotalValue').innerText = formatINR(totalValue);
  document.getElementById('dossierTotalDiscount').innerText = `-${formatINR(totalDiscount)}`;

  switchDocketTab('buyer');
  openModal('dealPassModal');
}

function switchDocketTab(tab) {
  const bTab = document.getElementById('tabBuyerPassBtn');
  const dTab = document.getElementById('tabDealerDossierBtn');
  const bView = document.getElementById('buyerPassView');
  const dView = document.getElementById('dealerDossierView');

  if (tab === 'buyer') {
    bTab.classList.add('active');
    dTab.classList.remove('active');
    bView.style.display = 'block';
    dView.style.display = 'none';
  } else {
    dTab.classList.add('active');
    bTab.classList.remove('active');
    bView.style.display = 'none';
    dView.style.display = 'block';
  }
}

// Share on WhatsApp
function shareOnWhatsApp() {
  if (!currentActivePassPool) return;
  const p = currentActivePassPool;
  const topBid = (p.bids && p.bids.length > 0) ? p.bids[0] : { discount: p.targetDiscount, dealer: "Authorized Dealership" };
  const leadMember = p.members && p.members.length > 0 ? p.members[0] : { name: "Rohit Sharma" };

  const message = `🚗 *AutoPool India - Official Booking Pass*\n\n` +
    `*Car:* ${p.model} (${p.variant})\n` +
    `*Cluster:* ${p.city}\n` +
    `*Buyer:* ${leadMember.name}\n` +
    `*Guaranteed Bulk Discount:* ${formatINR(topBid.discount)} Off Ex-Showroom\n` +
    `*Allocated Dealership:* ${topBid.dealer}\n` +
    `*Terms:* ₹0 mandatory accessories + Open-market insurance match.\n\n` +
    `_Present this voucher at the dealership billing desk to invoice at wholesale pricing._`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Savings Calculator Dynamic Engine
function updateCalculator() {
  const slider = document.getElementById('carPriceSlider');
  const price = parseInt(slider.value, 10);
  document.getElementById('carPriceDisplay').innerText = formatINR(price);

  const soloAccessories = Math.min(45000, Math.max(25000, Math.round(price * 0.022)));
  const showroomInsuranceFluff = Math.round(price * 0.022);
  const soloDiscount = Math.round(price * 0.01);
  const bulkCashDiscount = Math.round(price * 0.055);

  const totalSavings = soloAccessories + showroomInsuranceFluff + (bulkCashDiscount - soloDiscount);

  document.getElementById('calcBulkDiscount').innerText = `-${formatINR(bulkCashDiscount)} (Bulk Bid)`;
  document.getElementById('calcEffectiveSavings').innerText = `Save ${formatINR(totalSavings)}`;
  document.getElementById('calcTotalSavingsBadge').innerText = formatINR(totalSavings);
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Simulated countdown clock tick
function startTimerTicker() {
  setInterval(() => {
    const timerElem = document.getElementById('auctionTimer');
    if (!timerElem) return;
  }, 1000);
}

// Close modals when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    event.target.classList.remove('open');
  }
};

// Run on load
document.addEventListener('DOMContentLoaded', initApp);
