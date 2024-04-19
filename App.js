import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import ExtendedSearchBar from './Components/ExtendedSearchBar';
import PropertyListing from './Components/PropertyListing';

function App() {
  // Sample data
  const properties = [
    {
      id: 1,
      title: 'Beautiful Apartment in City Center',
      description: 'Spacious apartment with great views',
      price: '$200,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_rent.webp',
    },
    {
      id: 2,
      title: 'Cozy Cottage by the Lake',
      description: 'Quaint cottage with lakefront access',
      price: '$150,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_buy.webp',
    },
    {
      id: 3,
      title: 'Luxurious Villa with Pool',
      description: 'Stunning villa with private pool',
      price: '$500,000',
      imageUrl: 'https://static.99acres.com/universalhp/img/d_hp_plot_land.webp',
    },
  ];

  const handleSearch = (searchParams) => {
    // Handle search functionality
    console.log(searchParams);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <ExtendedSearchBar onSearch={handleSearch} /> */}
      <h1>Property Listings</h1>
      <PropertyListing properties={properties} />
    </div>
  );
}

export default App;