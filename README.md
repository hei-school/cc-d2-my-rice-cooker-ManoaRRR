[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hy8NMZUz)

# Rice Cooker Simulation in C++

This C++ program simulates the behavior of a rice cooker. Users can set the type of rice, adjust the water level, and start the cooking process. The application includes error handling for invalid inputs.

## Usage

Follow these steps to use the Rice Cooker:

1. **Setting the Rice Type:**
    - Use the `setRiceType` method to set the type of rice.
    - Example: `riceCooker.setRiceType("white rice");`

2. **Adjusting Water Level:**
    - Use the `setWaterLevel` method to set the water level.
    - Example: `riceCooker.setWaterLevel(50);`

3. **Starting Cooking:**
    - Call the `startCooking` method to begin the cooking process.
    - Example: `riceCooker.startCooking();`

4. **Checking Cooking Status:**
    - Use the `checkCookingStatus` method to view the cooking status.
    - Example: `riceCooker.checkCookingStatus();`

## Linter (C++ Code Quality Checker)

To maintain code quality and adhere to best practices, it's recommended to use a linter for C++. [Clang](https://clang.llvm.org/) is a powerful compiler that includes a linter for C++.

### Installation

Ensure that Clang is installed on your system. You can install it using package managers like `apt` (for Debian/Ubuntu) or `brew` (for macOS).

Example for Ubuntu:

```bash
sudo apt-get install clang
