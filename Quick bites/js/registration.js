document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');
    var container = document.getElementById('savedRegistrations');
    var emptyState = document.getElementById('emptyState');
    var toast = document.getElementById('toast');

    function getSavedRegistrations() {
        var saved = localStorage.getItem('eventRegistrations');
        return saved ? JSON.parse(saved) : [];
    }

    function saveRegistrations(registrations) {
        localStorage.setItem('eventRegistrations', JSON.stringify(registrations));
    }

    function updateEmptyState() {
        var registrations = getSavedRegistrations();
        if (registrations.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    }

    function displayRegistration(registration) {
        var item = document.createElement('div');
        item.className = 'registration-item';
        item.setAttribute('data-id', registration.id);

        item.innerHTML = `
            <div class="item-header">
                <div class="item-name">${registration.firstName} ${registration.lastName}</div>
                <button class="delete-btn" aria-label="Delete registration">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
            <div class="item-email">${registration.email}</div>
            <div class="item-event">${registration.event}</div>
        `;

        container.prepend(item);
    }

    function loadAllRegistrations() {
        var registrations = getSavedRegistrations();
        for (var i = 0; i < registrations.length; i++) {
            displayRegistration(registrations[i]);
        }
        updateEmptyState();
    }

    function showSuccessMessage() {
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var firstName = document.getElementById('firstName').value.trim();
        var lastName = document.getElementById('lastName').value.trim();
        var email = document.getElementById('email').value.trim();
        var event = document.getElementById('event').value.trim();

        if (firstName && lastName && email && event) {
            var registration = {
                id: Date.now().toString(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                event: event
            };

            var allRegistrations = getSavedRegistrations();
            allRegistrations.push(registration);
            saveRegistrations(allRegistrations);

            displayRegistration(registration);
            updateEmptyState();

            showSuccessMessage();

            form.reset();
        }
    });

    container.addEventListener('click', function(e) {
        var deleteButton = e.target.closest('.delete-btn');
        if (deleteButton) {
            var item = deleteButton.closest('.registration-item');
            var id = item.getAttribute('data-id');

            item.remove();

            var registrations = getSavedRegistrations();
            var updated = registrations.filter(function(reg) {
                return reg.id !== id;
            });
            saveRegistrations(updated);

            updateEmptyState();
        }
    });

    loadAllRegistrations();
});