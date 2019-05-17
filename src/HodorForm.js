import React from 'react';
import './HodorForm.css'

class HodorForm extends React.Component{
    render(){
        return(
            <div>
                {/* <input type="text" placeholder="hodor?"></input> */}
                <p><button onClick={this.props.callBack} className="buttonStyle">HODOR</button></p>
            </div>
        );
    }
}

export default HodorForm;