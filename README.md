[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hy8NMZUz)
# Rice Cooker Simulation in PHP

This PHP script simulates the behavior of a rice cooker. Users can set the type of rice, adjust the water level, and start the cooking process. The application includes error handling for invalid inputs.

## Usage

Follow these steps to use the Rice Cooker:

1. **Setting the Rice Type:**
    - Use the `setRiceType` function to set the type of rice.
    - Example: `$riceCooker->setRiceType('white rice');`

2. **Adjusting Water Level:**
    - Use the `setWaterLevel` function to set the water level.
    - Example: `$riceCooker->setWaterLevel(50);`

3. **Starting Cooking:**
    - Call the `startCooking` function to begin the cooking process.
    - Example: `$riceCooker->startCooking();`

4. **Checking Cooking Status:**
    - Use the `checkCookingStatus` function to view the cooking status.
    - Example: `$riceCooker->checkCookingStatus();`

### Example

```php
<?php

// Instantiate the RiceCooker class
$riceCooker = new RiceCooker();

try {
    // Set rice type, adjust water level, start cooking, and check status
    $riceCooker->setRiceType('white rice');
    $riceCooker->setWaterLevel(50);
    $riceCooker->startCooking();
    $riceCooker->checkCookingStatus();
} catch (Exception $error) {
    echo "Error: {$error->getMessage()}\n";
}

?>



This updated README now includes information about using PHP CodeSniffer as a linter for maintaining code quality in your PHP project. Adjust it according to your specific needs or preferences.

