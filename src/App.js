import React from 'react';
import './App.css';
import HodorText from './HodorText.js'
import HodorForm from './HodorForm.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {val:0};
    this.HodorTextElement = React.createRef();
    this.update = this.update.bind(this);
  }


  componentDidMount(){
    document.title = "Hodor"
  }

  update = () => {
    this.HodorTextElement.current.update({val:0});
  }

  render(){
    return(
      <div className="App centered">
        <HodorText ref={this.HodorTextElement}/>
        <HodorForm callBack={this.update}/>
      </div>
    );
  }
}

export default App;
