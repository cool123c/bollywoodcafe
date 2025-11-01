# Restaurant Website

Welcome to the Restaurant Website project! This project is a web application built using React and TypeScript, designed to showcase a restaurant's offerings and allow users to make reservations.

## Project Structure

The project is organized as follows:

```
restaurant-website
├── public
│   └── index.html          # Main HTML file for the website
├── src
│   ├── index.tsx          # Entry point for the React application
│   ├── App.tsx            # Main App component with routing
│   ├── components          # Reusable components
│   │   ├── Header.tsx     # Header component with navigation
│   │   ├── Footer.tsx     # Footer component with copyright info
│   │   ├── Menu.tsx       # Menu component displaying menu items
│   │   └── ReservationForm.tsx # Form for making reservations
│   ├── pages              # Page components
│   │   ├── Home.tsx       # Landing page component
│   │   ├── MenuPage.tsx   # Full menu page component
│   │   └── Contact.tsx     # Contact page component
│   ├── styles             # Stylesheets
│   │   └── global.css     # Global styles for the application
│   ├── utils              # Utility functions
│   │   └── api.ts         # API utility functions
│   └── types              # TypeScript types and interfaces
│       └── index.ts
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd restaurant-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- View the restaurant's menu
- Make reservations through a user-friendly form
- Contact the restaurant for inquiries

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.