# Conversion Dashboard

A simple, frontend-only conversion tracking dashboard built with React.

## Features

- View all conversions in a clean, organized table
- Click any row to see detailed conversion information in a slide-out panel
- Filter by date range (Today, Yesterday, Last 7/30/90 Days, or Custom Range)
- Export all conversion data to CSV
- Responsive design with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
conversion_dashboard/
├── src/
│   ├── ConversionDashboard.jsx  # Main dashboard component
│   └── main.jsx                  # React entry point
├── index.html                    # HTML entry point
├── package.json                  # Dependencies
└── vite.config.js               # Vite configuration
```

## Technologies Used

- React 18
- Vite (build tool)
- Inline CSS styling
- Google Fonts (DM Sans, Instrument Serif, JetBrains Mono)
