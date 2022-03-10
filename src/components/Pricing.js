import React from 'react';

export default function Pricing() {
  const price = [
    { plan: 'BASIC', price: 10, cars: 5, storage: 2 },
    { plan: 'STANDARD', price: 20, cars: 10, storage: 20 },
    { plan: 'UNLIMITED', price: 30, cars: 50, storage: 200 }
  ];
  return (
    <div className="pricingContainer">
      {price.map((item, i) => {
        return (
          <div className="pricingCard" key={i}>
            <div className="plan">{item.plan}</div>
            <div className="price">{item.price}</div>
            <div className="cars">{item.cars} Vehicles</div>
            <div className="storage">{item.storage} GB Storage</div>
          </div>
        );
      })}{' '}
    </div>
  );
}
