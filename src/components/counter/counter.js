import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CounterDisplay from './CounterDisplay';
import { getCounterValue } from '../../configureStore';

const mapStateToProps = (state) => {
  return {
    value: getCounterValue(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    }
  };
};

const Counter = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterDisplay));

export default Counter;
