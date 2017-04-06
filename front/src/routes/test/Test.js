import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';


export default class Test extends React.Component {
    render(){
        return (
            <div>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }

}
