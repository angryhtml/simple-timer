## Project Description: Countdown Timer
This project creates a simple countdown timer using **HTML**, **CSS**, and **JavaScript**. The timer allows users to input a number of seconds, click a button to start the countdown, and displays the remaining time in a styled div. The design is enhanced with CSS for a modern, clean look.

### Technologies Used
* **HTML**: Structure of the timer interface, including input, button, and display elements.
* **CSS**: Adds visual styles such as gradients, hover effects, and responsive layouts.
* **JavaScript**: Implements the timer logic, handles user interactions, and dynamically updates the DOM.
### Key Features
#### 1. User Input: #
* A text input field for entering the countdown duration in seconds.
* A button to start or reset the countdown.
#### 2. Dynamic Countdown: #
* The timer dynamically decreases the displayed number every second.
* Proper handling of restarting the timer if the button is pressed again during an active countdown.
#### 3. Error Handling: #
* If an invalid input is given (e.g., negative number or non-numeric value), the script defaults to "0" and prompts users to enter a valid value.

### How It Works
1. Enter the desired countdown duration in seconds into the input field.
2. Press the "Start" button to begin the countdown.
3. The number displayed in the large div starts from the input value and decreases by 1 every second until it reaches 0.
4. If the "Start" button is pressed again during the countdown, the current countdown is canceled, and a new one begins with the updated input value.
