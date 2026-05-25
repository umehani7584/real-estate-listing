# 🏠 EstateHub - Premium Real Estate Listing Platform

A modern, responsive React-based real estate web application that helps users browse, search, filter, and manage premium properties across Pakistan.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

---

## 🎯 Features

✅ **Advanced Property Search** - Search by title or location in real-time

✅ **Smart Filtering System** - Price range, location, bedrooms with instant updates

✅ **Multiple Sorting Options** - Price low/high, newest first, largest area

✅ **Favorites System** - Save properties to favorites with localStorage persistence

✅ **Property Details Modal** - View complete property information

✅ **Dark/Light Mode** - Complete theme switching with CSS variables

✅ **Responsive Design** - Fully optimized for mobile, tablet, and desktop

✅ **Professional Navigation** - Smooth page transitions with scroll-to-top

✅ **Contact Management** - Functional contact form with office locations

✅ **Newsletter Signup** - Subscribe to updates

✅ **Social Integration** - Links to social media platforms

---

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Hooks** - State management (useState, useEffect)
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables for theming
- **localStorage API** - Persistent favorites storage
- **Create React App** - Project setup

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository
```bash
   git clone https://github.com/umehani7584/real-estate-listing.git
   cd real-estate-listing
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm start
```

4. Open in browser
http://localhost:3000
---

## 🚀 Usage

### Searching Properties
Navigate to Listings page and use the search bar to find properties by title or location. Results update instantly as you type.

### Filtering Properties
Open the Filters sidebar and adjust your preferences including price range (200K - 1500K), location, bedrooms, and sorting options. Properties update in real-time. Click Reset All Filters to clear selections.

### Saving Favorites
Click the heart icon on any property card to save it. View all favorites on the Favorites page. Favorites are automatically saved to your browser.

### Viewing Property Details
Click any property card to open a modal with complete information. Close the modal by clicking the X or outside the modal.

---

## 📄 Pages Overview

**Home Page** - Hero section with background image, statistics cards showing 500+ properties, 10K+ happy clients, 5-star ratings, and 24/7 support. Features featured properties showcase.

**Listings Page** - Complete property catalog with real-time search, advanced filters (price, location, bedrooms), multiple sorting options, and property grid display. Shows total properties found.

**Favorites Page** - Displays all saved properties with persistent localStorage storage. Users can add/remove favorites anytime.

**About Page** - Company story, team members, core values, and presence across 6 Pakistani cities (Karachi, Lahore, Islamabad, Multan, Peshawar, Quetta).

**Contact Page** - Contact form with success message, office locations for all cities with contact details, business hours, and embedded Google Map.

---

## 🔍 Filter & Search Logic

All filters use AND logic - properties must match all selected criteria. Price range converts thousands to actual values. Search works on property titles and locations. Sorting applies instantly on selection. Reset button restores all filters to default values (200K-1500K price range, all locations, all bedrooms, default sort).

---

## 🎨 Theme System

The app includes a complete light and dark mode system using CSS variables. Toggle between themes with the moon/sun icon in the header. Theme preference is saved to localStorage and loads automatically on next visit.

Light Mode Colors:
- Primary: #2563eb (Blue)
- Background: #ffffff (White)
- Text: #1f2937 (Dark Gray)

Dark Mode Colors:
- Primary: #3b82f6 (Light Blue)
- Background: #0f172a (Navy)
- Text: #f8fafc (Light Gray)

---

## 💾 Data Management

The app uses mock JSON data with 20 sample properties. Properties include ID, title, price, location, bedrooms, bathrooms, area, image, and description. Price range spans $250K to $1.2M. Locations include major Pakistani cities. Bedrooms range from 1 to 4+ options.

Favorites are stored in localStorage with key "favorites" containing JSON array of property IDs. Theme preference stored with key "theme" as "light" or "dark".

---

## 📱 Responsive Design

Desktop (1024px+) - Full sidebar filters with all features visible, sticky filter sidebar, property grid shows multiple columns.

Tablet (768px - 1023px) - Optimized sidebar layout, adjusted spacing, 2-column property grid.

Mobile (480px - 767px) - Stacked layout, compact filters, single-column property grid, touch-optimized buttons.

Small Mobile (< 480px) - Minimal padding, optimized font sizes, full-width elements, easy-to-tap buttons.

---

## 🎓 Key Implementation Details

Real-time filtering uses useEffect hook to apply filters instantly when any filter changes without requiring a button click. Theme switching uses CSS variables that automatically update based on selected theme. Favorites persistence uses localStorage to save and retrieve user preferences across sessions. Price conversion multiplies thousands by 1000 for actual property values.

---

## 🐛 Issues Fixed

Stats numbers were invisible in light mode - fixed by using explicit hex colors (#2563eb). Page scroll position wasn't resetting on navigation - added window.scrollTo(0, 0) in useEffect. Price filter wasn't working - converted thousands to actual price values. Reset filters showed no properties - ensured reset sets correct default range [200, 1500]. Footer links were unclickable - converted to navigation buttons with proper callbacks.

---

## 🚀 Future Enhancements

Backend API integration with Node.js/Express, MongoDB database for properties, user authentication with JWT, admin panel for property management, payment gateway integration with Stripe/PayPal, email notifications, property pagination, agent directory with profiles, property reviews and ratings, advanced search with saved filters, multiple property images, property comparison tool, blog/news section, toast notifications, virtual property tours, AI chatbot support, mobile app with React Native, SEO optimization, Google Analytics integration, and Progressive Web App features.

---

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a feature branch, commit changes, push to branch, and open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Umehani**
- GitHub: [@umehani7584](https://github.com/umehani7584)
- Email: umehani7584@gmail.com

---

## 📞 Support

For support, email umehani7584@gmail.com or open an issue on GitHub.

---

## 🙏 Acknowledgments

React community for excellent documentation, Unsplash for property images, React Icons for beautiful icons, and all contributors and testers.

---

**Made with ❤️ by Umehani**

⭐ If you found this helpful, please consider giving it a star!
