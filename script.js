function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error, {timeout:10000});
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
  alert("Access location denied");
}

getLocation();
