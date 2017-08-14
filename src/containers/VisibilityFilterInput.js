import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'
import Input from '../components/Input';

const mapStateToProps = state => ({
  type: 'text',
  placeholder: 'Search for classname...',
  className: 'clabbr-sch__inp'
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => {
    let val = e.target.value.toLowerCase();
    // Debounce here?
    dispatch(setVisibilityFilter(val));
  }
});

const visibilityFilterInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default visibilityFilterInput;
