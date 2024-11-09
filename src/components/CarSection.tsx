import React from 'react';
import { Car } from '../types';

interface CarSectionProps {
  title: string;
  cars: Car[];
}

export default function CarSection({ title, cars }: CarSectionProps) {
  return (
    <section className="py-16">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.name} className="car-card group">
            <div className="relative overflow-hidden">
              <img
                src={car.imageUrl}
                alt={car.name}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                {car.name}
              </h3>
              <p className="text-red-500 font-medium">Year: {car.year}</p>
              <p className="text-slate-300">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}