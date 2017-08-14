import { connect } from 'react-redux';

import Clabbrs from '../components/Clabbrs';

const getVisibleClabbrs = (clabbrs, visibilityFilter) => {
  if (visibilityFilter.length) {
    return clabbrs
      .filter(clabbr =>
        clabbr.name.includes(visibilityFilter) ||
        clabbr.abbreviation.includes(visibilityFilter));
  }

  return clabbrs;
};

const mapStateToProps = state => ({
  clabbrs: getVisibleClabbrs(state.clabbrs, state.visibilityFilter)
});

const VisibleClabbrs = connect(
  mapStateToProps
)(Clabbrs);

export default VisibleClabbrs;
