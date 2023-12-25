<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the 'yep' parameter is present in the POST request
    if (isset($_POST['yep'])) {
        // Perform any backend processing here
        // For now, let's send a simple response
        echo "ye ans yes";
        exit();
    }
}

// Default response if the 'yep' parameter is not present
echo "No action specified";

