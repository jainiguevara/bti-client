import React from 'react';
import { connect } from 'react-redux';

import { incrementCount, getCount } from '../actions/counter';
import '../App.css';
// Continuation
// 1. Updated the value to 'props.counter.count'.
//    This accessed the mapped valued of state in mapStateToProps
// 2. For adding event for the button. I imported the incrementCount action in '../actions/counter.js' 
//    Updated the onClick to run a function to call the dispatch() 
//    pass incrementCount as the arguement to run the action
const Dashboard = (props) =>  {
    return (
            <div className="App">
                <p className="App-intro">
                    DASHBOARD
                </p>
            <input type="text" value={props.counter.count} readOnly={true} />
            <button onClick={() => {
                props.dispatch(incrementCount());
            }}>Alert</button>
            </div>
        );
}

// Roadblocks earlier
// 1. Created a function to create the state for counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};
// 2. Imported 'connect' from react-redux only to connect the Dashboard compoment
//    to the Redux store
// 3. Exported by default to use react-redux connect to:
//      - map the state to props to Dashboard component to get the 
//        latest 'count' value.
// 4. In '../src/index.js', I have wrapped the <AppRouter /> 
//    inside Provider with props of store to the components to access counterReducer.
export default connect(mapStateToProps)(Dashboard);