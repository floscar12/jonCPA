// Initialize and add the map
function initMap() {
  // The location of business
  const business = { lat: 33.81280352493202, lng: -118.34995828606509 };
  // The map, centered at location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: business,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });
  // The marker, positioned at business location
  const marker = new google.maps.Marker({
    position: business,
    map: map,
  });
  // Marker info
  const markerInfo =
    "<h6>Jonathon P. Reuben, CPA </h6>" +
    "<p>(310) 378-3609</p>" +
    "<p>23430 Hawthorne Blvd #290, Torrance, CA 90505</p>" +
    "<a href='https://www.google.com/maps/dir//jonathon+p+reuen/@34.5971659,-119.2479826,9z/data=!3m1!5s0x80dd4b1ee4ffb67f:0xecd26fd9bd8492d9!4m8!4m7!1m0!1m5!1m1!1s0x80dd4b1ee51e5bc3:0xe2386bf8b8e5ebd3!2m2!1d-118.349959!2d33.8127716'><p>Get Directions</p></a>";

  const infowindow = new google.maps.InfoWindow({
    content: markerInfo,
  });

  // Open info window by default
  infowindow.open({
    anchor: marker,
    map,
  });
}

// Init. Google Maps
window.initMap = initMap;

// 'Read More' button to 'Close' (vice versa) when clicked
const readMore = document.getElementById("read-more-btn");
readMore.addEventListener("click", updateButton);
let buttonClicked = true;
// if button clicked, change inner text
function updateButton() {
  if (buttonClicked) {
    readMore.innerHTML = "Close";
    buttonClicked = false;
  } else {
    readMore.innerHTML = "Read More";
    buttonClicked = true;
  }
}
