import React, { Fragment } from 'react';

export default function Card({ data }) {
  console.log(data);
  return (
    <div>
      <h2>Card</h2>
      {data.map(info => (
        <Fragment key={info.id}>
          <img
            src={info.img_src}
            alt={`${info.camera.full_name} ${info.rover.name} ${info.earth_date}`}
          />
        </Fragment>
      ))}
    </div>
  );
}
