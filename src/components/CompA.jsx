import React from 'react';
import { Contact } from './models/contact';
import CompB from './CompB';

const CompA = () => {
  const defaultUser = new Contact('Vicente', 'BBC', 'vince@bbc.com', false);

  return (
    <div>
      <div>
        <h1>Hello again:</h1>
      </div>
      <CompB contact={defaultUser} />
    </div>
  );
};

export default CompA;
