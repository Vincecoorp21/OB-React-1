import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './models/contact';

const CompB = ({ contact }) => {
  return (
    <div>
      <h2>Name: {contact.name} </h2>
      <h3>Surname: {contact.surname} </h3>
      <h4>Email: {contact.email}</h4>
      <h5>This user is: {contact.connected ? 'CONNECTED' : 'DISCONNECTED'}</h5>
    </div>
  );
};

CompB.propTypes = {
  CONTACT: PropTypes.instanceOf(Contact),
};

export default CompB;
