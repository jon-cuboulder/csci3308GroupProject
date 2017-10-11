import React from 'react';
import { connect } from 'react-redux';


export const exampleReducer = (state = {}, action) => {
  if (action.type === 'API_FETCH_EXAMPLE') {
    return Object.assign({}, state, { 'apiResponse': JSON.stringify(action.response) });
  }
  return state;
};

const mapStateToProps = state => ({
  apiResponse: state.example.apiResponse || 'no api response yet'
});

const mapDispatchToProps = dispatch => ({
  callAPI: () => {
    fetch('http://localhost/api/example', { mode: 'cors'})
      .then( response => response.json())
      .then( response => dispatch({
          type: 'API_FETCH_EXAMPLE',
          response
      }));
  }
});


const example = ({ apiResponse, callAPI }) => (
  <div>
    <h1>Example Component</h1>
    <div>API Response: {apiResponse}</div>
    <button type='button' onClick={() => callAPI()}>
      Click Me
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(example);
