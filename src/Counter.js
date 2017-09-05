import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  console.log('props in render', props)
  return(
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Add One!</button>
    </div>
  )
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  return{
    count: state.count
  }
}

function mapDispatchToPropr(dispatch) {
  return {
    onIncrementClick: () => {
      console.log('clicky tha button');
      const action = { type: "INCREMENT"};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPropr)(Counter);
//wrap our component in their connect component and glue them together.
