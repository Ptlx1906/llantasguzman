var datos;
var urlApp = "https://ptlx1906.github.io/llantasguzmancr/llantas.json";

function callService () {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess (data) {
    datos = data;
    procesarDatosAT();
    procesarDatosMT();
    procesarDatosHT();
}

function onError (jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}

function procesarDatosAT() {
    let menuContainer = document.getElementById("AT");
    let html = "";
    datos.llantas.forEach(llanta => {
        if(llanta.clasificacion == 'AT'){
            html += "<div class='col-md-6 col-lg-4 menu-item allLlantas " + llanta.clasificacion +" '>";
            html += "<img src=" + llanta.imagen + " class='menu-img' alt=''>";
            html += "<div class='menu-ingredients'>";
            html += llanta.nombre;
            html += "</div>";
            html += "</div>";
        }
        
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}

function procesarDatosMT() {
    let menuContainer = document.getElementById("MT");
    let html = "";
    datos.llantas.forEach(llanta => {
        if(llanta.clasificacion == 'MT'){
            html += "<div class='col-md-6  menu-item allLlantas " + llanta.clasificacion +" '>";
            html += "<img src=" + llanta.imagen + " class='menu-img' alt=''>";
            html += "<div class='menu-ingredients'>";
            html += llanta.nombre;
            html += "</div>";
            html += "</div>";
        }
        
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}

function procesarDatosHT() {
    let menuContainer = document.getElementById("HT");
    let html = "";
    datos.llantas.forEach(llanta => {
        if(llanta.clasificacion == 'HT'){
            html += "<div class='col-md-6 col-lg-4 menu-item allLlantas " + llanta.clasificacion +" '>";
            html += "<img src=" + llanta.imagen + " class='menu-img' alt=''>";
            html += "<div class='menu-ingredients'>";
            html += llanta.nombre;
            html += "</div>";
            html += "</div>";
        }
        
    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
    console.log(html);
}
