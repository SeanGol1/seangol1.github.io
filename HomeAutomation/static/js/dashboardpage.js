document.addEventListener("DOMContentLoaded", function () {
    let isEditing = false;

    document.getElementById('editLayoutBtn').addEventListener('click', function () {
        isEditing = !isEditing;

        grid.enableMove(isEditing);
        grid.enableResize(isEditing);
        grid.setStatic(!isEditing);

        this.textContent = isEditing ? 'Lock Layout' : 'Edit Layout';
        this.classList.toggle('btn-warning', !isEditing);
        this.classList.toggle('btn-success', isEditing);
    });

    

function updateClock() {
    const now = new Date();

    const est = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const gmt = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Dublin" }));

    document.getElementById("est-time").textContent = est.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("gmt-time").textContent = gmt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 30000);
updateClock();


let map;
let directionsService;
let directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 40.7128, lng: -74.0060 }
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Autocomplete for home and work
    const homeInput = document.getElementById("home");
    const workInput = document.getElementById("work");

    new google.maps.places.Autocomplete(homeInput, {
        types: ["geocode"],
        componentRestrictions: { country: "ca" }
    });

    new google.maps.places.Autocomplete(workInput, {
        types: ["geocode"],
        componentRestrictions: { country: "ca" }
    });


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                map.setZoom(12);
            },
            () => console.warn("Geolocation failed or denied.")
        );
    }
}

});


function spotifyControl(action) {
    // fetch(`/spotify/${action}`, { method: 'POST' });
}

function toggleAllLights() {
    // fetch('/lightson', { method: 'POST' });
}

function playPause() {
    // fetch('/playpause', { method: 'POST' });
}

function turnOffAll() {
    // fetch('/lightsoff', { method: 'POST' });
    // fetch('/poweroff', { method: 'POST' });
}

function firestickCommand(endpoint) {
    // fetch(`/${endpoint}`, { method: 'POST' });
}