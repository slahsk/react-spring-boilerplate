import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import { connect } from 'react-redux';
import { test } from '../../actions';
import $ from 'jquery';


class Test extends React.Component {



    render(){
        return (
            <div>
                <Counter/>
                <Option/>
                <Buttons/>
              <button onClick={this.props.testButton}>Test</button>
            {this.props.aaa.firstName}
            </div>
        );
    }

}

let testFunction = (dispatch, getState) => {
    return fetch('http://localhost:8090/api/test')
    .then( response => response.json())
    .then(json => dispatch(test(json)))

  };

//내부에서 데이터를 사용하기 위해서는 맵핑 해줘야 한다.
let mapStateToProps = (state) => {
    return {
        aaa: state.counter.aaa
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        testButton: () => dispatch(testFunction)
    }
}





export default connect(mapStateToProps , mapDispatchToProps)(Test)
