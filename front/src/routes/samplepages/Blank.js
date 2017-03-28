import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Blank extends React.Component{

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Blank</PageHeader>
          </div>
        </div>
      </div>
    );
  }
}

export default Blank;
