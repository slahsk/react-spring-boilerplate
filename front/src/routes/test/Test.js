import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import { connect } from 'react-redux';
import { test } from '../../actions';



class Test extends React.Component {



    render(){
        return (
            <div>
                <Counter/>
                <Option/>
                <Buttons/>
              <button onClick={this.props.testButton}>Test</button>
            {this.props.data}
            </div>
        );
    }

}


let testFunction = function(){
  return function (dispatch, getState) {
    return fetch('http://md5.jsontest.com/?text=%5Btext')
      .then(
      sauce => {
        dispatch(test(sauce));
      }
    );
  };

}

let mapDispatchToProps = (dispatch) => {
    return {
        testButton: () => dispatch(testFunction())
    }
}





export default connect(null , mapDispatchToProps)(Test)
