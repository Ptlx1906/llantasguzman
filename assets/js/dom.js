window.onload = specialsDomIncial;
let map, marker, watchID, geoLoc;

function initMap() {

    const myLatLng = { lat: 10.473850123516781, lng: -84.9695379596777 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Tasty Bites"
  });
  getPosition();
}

function getPosition() {
  if(navigator.geolocation) {
    geoLoc = navigator.geolocation;
    watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler);
  } else {
    alert("Lo sentimos, el navegador no soporta geolocalización");
  }
}

function showLocationOnMap(position) {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();

  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  const myLatLng = {lat: latitud, lng: longitud};
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng);
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Acceso denegado!");
  } else if (err.code == 2) {
    alert("Error: Posición no existe o no se encuentra!");
  }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng) {
  directionsService.route(
    {
      origin: {lat: myLatLng.lat, lng: myLatLng.lng},
      destination: { lat: 10.473850123516781, lng: -84.9695379596777 },
      // tambien se puede usar de otro modo WALKING - BICYCLING - TRANSIT
      travelMode: google.maps.TravelMode["DRIVING"]
    },
    (response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}



window.initMap = initMap;


function specialsDom(){
    let specialDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let tab = parseInt(this.name);
    let urlImage = "";
    let htmlDinamico = "";
    switch (tab) {
        case 1:
            htmlDinamico += "<p>Somos una empresa comprometida con la economía de nuestros clientes, contamos con productos y servicios de excelente calidad. Visítenos y viva la experiencia Llantas Guzmán.</p>";
            break;
        case 2:
            htmlDinamico += "<p>Somos una empresa especializada en la venta de llantas, tramado y alineado vehicular con la mejor calidad y servicio, comprometidos con el ambiente y al mejor precio del mercado en la zona alta de Guanacaste.</p>";
            break;
        case 3:
            htmlDinamico += "<p>Ser la empresa líder en la venta de llantas, tramado y alineado vehicular, en toda la zona de Guanacaste para generar mayor comodidad a nuestros clientes.</p>";
            break;
        case 4:
            
            htmlDinamico += "<div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel'>";
            htmlDinamico += "<div class='carousel-inner'>";

            htmlDinamico += "<div  class='carousel-item active'>";
            htmlDinamico += "<h2>Compromiso: </h2>";
            htmlDinamico += "<p>Estamos comprometidos con la calidad, el cliente y el medio ambiente.</p>";
            htmlDinamico += "</div>";

            htmlDinamico += "<div  class='carousel-item'>";
            htmlDinamico += "<h2>Trabajo en equipo: </h2>";
            htmlDinamico += "<p>Nuestro personal está altamente capacitado para realizar cualquiera de las funciones.</p>";
            htmlDinamico += "</div>";

            htmlDinamico += "<div  class='carousel-item'>";
            htmlDinamico += "<h2>Honradez: </h2>";
            htmlDinamico += "<p>Inculcamos la honradez como un pilar fundamental en nuestra empresa ya que nuestros clientes merecen un trabajo de calidad a un precio justo. </p>";
            htmlDinamico += "</div>";

            htmlDinamico += "<div  class='carousel-item'>";
            htmlDinamico += "<h2>Calidad total: </h2>";
            htmlDinamico += "<p>Todos nuestros productos y servicios cumplen con estándares de excelencia, generando así confianza en nuestros clientes.</p>";
            htmlDinamico += "</div>";

            htmlDinamico += "</div>";
            htmlDinamico += "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>";
            htmlDinamico += "<span class='carousel-control-prev-icon' aria-hidden='true'></span>";
            htmlDinamico += "<span class='visually-hidden'>Previous</span>";
            htmlDinamico += "</button>";
            htmlDinamico += "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>";
            htmlDinamico += "<span class='carousel-control-next-icon' aria-hidden='true'></span>";
            htmlDinamico += "<span class='visually-hidden'>Next</span>";
            htmlDinamico += "</button>";
            htmlDinamico += "</div>";
            break;
    }

    specialDatos.innerHTML = "";
    specialDatos.innerHTML = htmlDinamico;
    specialImg.src = "";
    specialImg.src = urlImage;
}

function agregarEventos(){
    let listItems = document.getElementsByClassName("specialsPer-listItem");
    for (const item in listItems) {
        if(listItems[item].nodeName === "A"){
            listItems[item].onclick = specialsDom;
        }
    }
}

function specialsDomIncial(){
    let specialDatos = document.getElementById("row-specials-datos");
    let specialImg = document.getElementById("row-specials-img");
    let urlImage = "";
    let htmlDinamico = "";

    htmlDinamico += "<p>Somos una empresa comprometida con la economía de nuestros clientes, contamos con productos y servicios de excelente calidad. Visítenos y viva la experiencia Llantas Guzmán.</p>";
    specialDatos.innerHTML = "";
    specialDatos.innerHTML = htmlDinamico;
    specialImg.src = "";
    specialImg.src = urlImage;
    agregarEventos();
    callService();
}
