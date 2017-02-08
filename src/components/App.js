import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import  'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }

}
