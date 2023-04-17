<?php
  // retrieve data from the request
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$google_maps_url = $_POST['google_maps_url'];

  // build the data as a string
$data = "Latitude: " . $latitude . ", Longitude: " . $longitude . ", Google Maps URL: " . $google_maps_url . "\n";

$file = fopen("locations.txt", "a");
fwrite($file, $data);
fclose($file);

echo "Location data saved to .txt file on server";
?>