const EVENTS = [{
        id: 1,
        title: "Street Taco Throwdown",
        category: "competition",
        date: "Sat, 12 July 2025",
        time: "11:00 AM – 4:00 PM",
        location: "Harbour Plaza, Belmopan",
        spots: 8,
        total: 40,
        price: "$25",
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
        desc: "Teams of two battle it out to craft the most creative street taco. Three rounds, blind judging by local celebrity chefs. All ingredients provided. Spectators welcome."
    },
    {
        id: 2,
        title: "Caribbean Spice Workshop",
        category: "workshop",
        date: "Sun, 20 July 2025",
        time: "10:00 AM – 1:00 PM",
        location: "Quick-Bite Studio, Belize City",
        spots: 14,
        total: 20,
        price: "$40",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
        desc: "Dive into Caribbean spice blending with Chef Miriam Castillo. You'll leave with three hand-blended spice jars and a recipe booklet. All skill levels welcome."
    },
    {
        id: 3,
        title: "Rum & Chocolate Pairing",
        category: "tasting",
        date: "Fri, 25 July 2025",
        time: "7:00 PM – 9:30 PM",
        location: "The Caye Lounge, San Pedro",
        spots: 3,
        total: 30,
        price: "$55",
        img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80",
        desc: "Six pairings of single-origin Belizean cacao chocolates with artisanal Caribbean rums, guided by our sommelier. Charcuterie board included. Strictly 18+."
    },
    {
        id: 4,
        title: "Sunrise Brunch Social",
        category: "social",
        date: "Sat, 2 Aug 2025",
        time: "8:00 AM – 11:30 AM",
        location: "Rooftop Garden, Corozal Town",
        spots: 22,
        total: 50,
        price: "$18",
        img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80",
        desc: "Relaxed rooftop brunch with local breakfast staples, fresh juices, a coffee bar, and live acoustic sets. Great way to meet fellow food lovers. All ages welcome."
    },
    {
        id: 5,
        title: "Ceviche Masterclass",
        category: "workshop",
        date: "Sun, 10 Aug 2025",
        time: "2:00 PM – 5:00 PM",
        location: "Fisherman's Wharf, Dangriga",
        spots: 16,
        total: 24,
        price: "$35",
        img: "https://www.feastingathome.com/wp-content/uploads/2015/04/Ceviche-Recipe.jpg",
        desc: "Chef Ernesto Puc shares a four-generation family ceviche recipe. Covers conch ceviche, lime shrimp, and a citrus tiradito. Hands-on and beginner friendly."
    },
    {
        id: 6,
        title: "Craft Beer Festival",
        category: "tasting",
        date: "Sat, 16 Aug 2025",
        time: "3:00 PM – 8:00 PM",
        location: "Central Park, Orange Walk",
        spots: 60,
        total: 200,
        price: "$30",
        img: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
        desc: "12+ local microbreweries, a souvenir tasting glass, 10 tokens, food trucks, and live reggae. VIP early access at 2 PM for $15 extra. Strictly 18+."
    }
];

function spotsInfo(spots, total) {
    const r = spots / total;
    if (r > 0.5) return { cls: 'high', label: spots + ' spots left' };
    if (r > 0.2) return { cls: 'medium', label: spots + ' spots left' };
    return { cls: 'low', label: 'Only ' + spots + ' left!' };
}

function icon(type) {
    const map = {
        cal: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
        clock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        pin: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        ticket: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>'
    };
    return map[type] || '';
}

function renderCards() {
    const grid = document.getElementById('events-grid');
    grid.innerHTML = '';

    EVENTS.forEach(function(ev, i) {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 d-flex';

        col.innerHTML =
            '<div class="card w-100 h-100 shadow-sm">' +
            '<img class="card-img-top" src="' + ev.img + '" alt="' + ev.title + '" loading="lazy">' +
            '<div class="card-body d-flex flex-column">' +
            '<h5 class="card-title">' + ev.title + '</h5>' +
            '<p class="card-text mb-1"><strong>Date & Time:</strong> ' + ev.date + ', ' + ev.time + '</p>' +
            '<p class="card-text mb-2"><strong>Venue:</strong> ' + ev.location + '</p>' +
            '<p class="card-text text-muted mb-4">' + ev.desc + '</p>' +
            '<a href="registration.html" class="btn btn-primary mt-auto">Register</a>' +
            '</div>' +
            '</div>';

        grid.appendChild(col);

        setTimeout(function() {
            col.querySelector('.card').classList.add('visible');
        }, i * 80);
    });
}

document.getElementById('events-grid').addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-details');
    if (!btn) return;
    openModal(parseInt(btn.dataset.id));
});

function openModal(id) {
    const ev = EVENTS.find(e => e.id === id);
    if (!ev) return;

    const s = spotsInfo(ev.spots, ev.total);

    document.getElementById('modal-img').src = ev.img;
    document.getElementById('modal-img').alt = ev.title;
    document.getElementById('modal-cat').textContent = ev.category;
    document.getElementById('modal-title').textContent = ev.title;
    document.getElementById('modal-desc').textContent = ev.desc;

    document.getElementById('modal-meta').innerHTML =
        '<div class="modal-info-row">' + icon('cal') + ev.date + '</div>' +
        '<div class="modal-info-row">' + icon('clock') + ev.time + '</div>' +
        '<div class="modal-info-row">' + icon('pin') + ev.location + '</div>' +
        '<div class="modal-info-row">' + icon('ticket') + ev.price + ' per person &nbsp;·&nbsp; <span class="spots ' + s.cls + '">&#11044; ' + s.label + '</span></div>';

    const modal = document.getElementById('event-modal');
    const backdrop = modal.querySelector('.modal-backdrop-custom');
    const panel = modal.querySelector('.modal-panel');

    modal.style.display = 'flex';
    requestAnimationFrame(function() {
        backdrop.classList.add('show');
        panel.classList.add('show');
    });
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('event-modal');
    const backdrop = modal.querySelector('.modal-backdrop-custom');
    const panel = modal.querySelector('.modal-panel');
    backdrop.classList.remove('show');
    panel.classList.remove('show');
    setTimeout(function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 320);
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

renderCards();