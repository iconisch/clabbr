import React from 'react';
import PropTypes from 'prop-types';

const Clabbr = ({ name, abbreviation }) => (
  <article className="clabbr">
    <ul className="lyt">
      <li className="lyt__itm clabbr__nom">
        {name}
      </li>
      <li className="lyt__itm lyt__itm--fxd lyt__itm--rit clabbr__abr">
        {abbreviation}
      </li>
    </ul>
  </article>
);

Clabbr.PropTypes = {
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired
};

export default Clabbr;
