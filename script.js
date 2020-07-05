function init() {
  new google.maps.Map(document.getElementById('map'), {
    center: { lat: 59.325, lng: 18.069 },
    zoom: 15
  });
}
function init() {
  const initialPosition = { lat: 59.325, lng: 18.069 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 15
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });
}
function init() {
  const initialPosition = { lat: 59.325, lng: 18.069 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 15
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });

  // Get user's location
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
      err => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}
navigator.geolocation.getCurrentPosition(
  // On success
  position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
  // On error
  err => alert(`Error (${err.code}): ${err.message}`)
);
const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permission denied.';
    case 2:
      return 'Position unavailable.';
    case 3:
      return 'Timeout reached.';
  }
}

function init() {
  // Omitted for brevity

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
      err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}