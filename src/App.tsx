import React from 'react';
import Header from './components/Header';
import CarSection from './components/CarSection';
import GrokChat from './components/GrokChat';
import { Car } from './types';

const classicCars: Car[] = [
  {
    era: 'classic',
    name: '1967 Ford Mustang',
    year: 1967,
    description: 'An icon of American muscle cars, featuring a powerful V8 engine and timeless design.',
    imageUrl: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?auto=format&fit=crop&q=80'
  },
  {
    era: 'classic',
    name: '1957 Chevrolet Bel Air',
    year: 1957,
    description: 'The quintessential 50s automobile with its distinctive fins and chrome trim.',
    imageUrl: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?auto=format&fit=crop&q=80'
  }
];

const modernCars: Car[] = [
  {
    era: 'modern',
    name: 'Tesla Model S Plaid',
    year: 2023,
    description: 'Electric luxury sedan with unprecedented acceleration and range.',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80'
  },
  {
    era: 'modern',
    name: 'Porsche 911 GT3',
    year: 2023,
    description: 'Track-focused sports car with naturally aspirated engine and precise handling.',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80'
  }
];

const futureCars: Car[] = [
  {
    era: 'future',
    name: 'Lucid Air',
    year: 2024,
    description: 'Next-generation electric luxury vehicle with advanced autonomous capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Discover Automotive Excellence</h1>
          <p className="text-xl text-gray-600">From classic beauties to future innovations</p>
        </section>

        <div id="classic">
          <CarSection title="Classic Legends" cars={classicCars} />
        </div>
        
        <div id="modern">
          <CarSection title="Modern Masterpieces" cars={modernCars} />
        </div>
        
        <div id="future">
          <CarSection title="Future of Automotive" cars={futureCars} />
        </div>
      </main>

      <GrokChat />
    </div>
  );
}

export default App;