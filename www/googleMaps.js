var marker; // Marcador Global


window.onload = function()
{
    cargarMaapa();
}

function cargarMaapa() {
    
    var myLatlng = new google.maps.LatLng(-34.5408359, -55.1571293); 

    var mapOptions = {
        center: myLatlng, // cordenadas donde inicializa el Mapa
        zoom: 8, // nivel de zoom
        mapTypeId: google.maps.MapTypeId.TERRAIN  // tipo de Mapa
    };


    var map = new google.maps.Map(document.getElementById("divMapa"), mapOptions);
    
    
    // evento clik sobre el Mapa
    google.maps.event.addListener(map,'click', function(event) {
        
        if(marker){
            marker.setMap(null);
        }
                
        marker = new google.maps.Marker({
             position: event.latLng,
             map:map
         });
         
        $('#txtLatitudPropiedad').val(event.latLng.lat());
        $('#txtLongitudPropiedad').val(event.latLng.lng());  
        
                var geocoder = new google.maps.Geocoder();
                var yourLocation = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
                geocoder.geocode({'latLng': yourLocation}, processGeocoder);     


    });

    
  
  function processGeocoder(results, status) {

        if (status == google.maps.GeocoderStatus.OK)
        {
            if (results[0]) {

                document.forms[0].dir.value = results[0].formatted_address;
                $('#txtDireccion').val(results[0].formatted_address);

            }
            else
            {
                error('Google no retornó resultado alguno.');
            }
        }
        else
        {
            error("Geocoding falló debido a : " + status);
        }
    }

}




function initialize() {

    var myLatlng = new google.maps.LatLng(-34.970011, -54.952053);

    var mapOptions = {
        center: myLatlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var map = new google.maps.Map(document.getElementById("divMapPropiedades"),
            mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        draggable: false,
        title: "Proyecto las Tarariras"
    });


    // To add the marker to the map, call setMap();
    marker.setMap(map);

}
