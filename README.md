# Ryde Expo


Ryde Expo is a ride-hailing app that connects riders with drivers, similar to Uber. It offers a convenient and efficient way for users to book rides, track drivers, and make payments seamlessly.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Examples](#examples)

## Introduction

Ryde Expo is designed to provide a seamless experience for both drivers and riders. With features like real-time tracking, in-app payments, and ride history, Ryde Expo aims to deliver a top-tier user experience in the ride-sharing industry.

![App Overview](/assets/readme_Images/1.2%20Onboarding.png)

## Features

- **User Registration**: Easy sign-up and sign-in options for both riders and drivers.
- **Real-time GPS Tracking**: Track the driver's location in real-time as they approach the pickup location.
- **Ride Scheduling**: Option to schedule rides for a future date and time.
- **In-App Payments**: Secure payment options including credit card, debit card, and mobile wallets.
- **Ride History**: View past rides, including details like route, fare, and time.
- **Ratings and Reviews**: Riders can rate their experience with drivers and vice versa.
- **Notifications**: Push notifications for ride status, driver arrival, and promotions.

![Features](</assets/readme_Images/Home%20Page%20(Ride).png>)

## Installation

To set up Ryde Expo locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EL-Mehdiri/RYDE
   cd RYDE
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the required configuration. Example:

   ```plaintext
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
   DATABASE_URL=
   EXPO_PUBLIC_SERVER_URL=
   EXPO_PUBLIC_GEOAPIFY_API_KEY=
   EXPO_PUBLIC_GOOGLE_API_KEY=
   EXPO_PUBLIC_STRIPE_PUBLISHABEL_KEY=
   STRIPE_SECRET_KEY=
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open the app in your browser or mobile simulator.**

## Usage

- **For Riders:**

  1. Open the Ryde Expo app.
  2. Register or log in using your credentials.
  3. Enter your pickup location and destination.
  4. Choose your ride type (e.g., standard, luxury, etc.).
  5. Confirm the ride and wait for a driver to accept the request.
  6. Track your driver's location in real-time and get notifications about their arrival.
  7. At the end of the trip, pay using the in-app payment options.

  ![Rider Usage](/assets/readme_Images/Ride%20Available%20Car%20list.png)
  <!-- - **For Drivers:**

    1. Open the Ryde Expo driver app.
    2. Log in using your driver credentials.
    3. Start accepting ride requests.
    4. Navigate to the rider's pickup location using the in-app navigation.
    5. Complete the ride and receive payment directly through the app.

    ![Driver Usage](/assets/)  -->

## Dependencies

- **Frontend**: React Native (for mobile app), Redux (state management)
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: Stripe or other payment gateways
- **Real-Time Tracking**: Google Maps API or Mapbox API
- **Push Notifications**: Firebase Cloud Messaging (FCM)

## Examples

### Booking a Ride

![Booking a Ride](/assets/readme_Images/Ride%20Information.png)

## Contributing

We welcome contributions to improve Ryde Expo! If you have suggestions or want to report an issue, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

---

Thank you for using Ryde Expo! We hope you have a great experience
