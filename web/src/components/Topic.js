import React from 'react';

export default function Topic({ id }) {
  console.log(arguments);
  return (
    <div>
      <h2> Topic #{id}</h2>
    </div>
  );
}
