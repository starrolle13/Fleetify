import React from 'react';

export default function Benefits() {
  const data = [
    { title: 'Dashboard View' },
    { title: 'Calendar Tracking' },
    { title: 'Track Expenses' }
  ];
  return (
    <div className="benefitsContainer">
      {data.map((item, i) => {
        return (
          <div className="cardBox" key={i}>
            <h3 className="benefitTitle">{item.title}</h3>
            <p className="benefitDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        );
      })}
    </div>
  );
}
