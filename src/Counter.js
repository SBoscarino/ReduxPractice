import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  console.log('props in render', props)
  return(
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Add One!</button>
      <button onClick={props.onDecrementClick}>DESTROY One!</button>
    </div>
  )
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return{
    count: state.count
  }
}

function mapDispatchToProp(dispatch) {
  return {
    onDecrementClick: () => {
      console.log('clicked DESTRUCTION');
      const action = {type: "DECREMENT"};
      dispatch(action);
    },

    onIncrementClick: () => {
      console.log('clicky tha button');
      const action = { type: "INCREMENT"};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter);
//wrap our component in their connect component and glue them together.
