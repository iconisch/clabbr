import React from 'react';
import PropTypes from 'prop-types';

import Clabbr from './Clabbr';

const Clabbrs = ({ clabbrs }) => {
  if (!clabbrs.length) {
    return (
      <ul className="clabbrs">
        <li className="clabbrs__no-rsts">
          No results
        </li>
      </ul>
    );
  }

  return (
    <ul className="clabbrs">
      {clabbrs.map(clabbr => (
        <li key={clabbr.id} className="clabbrs__itm">
          <Clabbr {...clabbr} />
        </li>
      ))}
    </ul>
  );
};


Clabbrs.propTypes = {
  clabbrs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};


export default Clabbrs;
