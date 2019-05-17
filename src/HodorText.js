import React from 'react';
import './HodorText.css'

function weightedRand(spec) {
    var i, j, table = [];
    for (i in spec) {
        // The constant 10 below should be computed based on the
        // weights in the spec for a correct and optimal table size.
        // E.g. the spec {0:0.999, 1:0.001} will break this impl.
        for (j = 0; j < spec[i] * 10; j++) {
            table.push(i);
        }
    }
    return function () {
        return table[Math.floor(Math.random() * table.length)];
    }
}
var rand012 = weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
rand012(); // random in distribution...

class GenerateText extends React.Component{
    constructor(props){
        super(props);
        this.hodor_name = [
            "HODOR",
            "hodor",
            "HODOOOOORRR"
        ]
        this.getHodorName = this.getHodorName.bind(this);
        this.getExclamations = this.getExclamations.bind(this);
    }

    getExclamations(){
        var i=0;
        var len = Math.floor(Math.random()*10);
        var str = "";
        for(i=0; i < len; i++){
            str += "!";
        }
        return str;
    }

    getHodorName(){
        var x = Math.floor(Math.random()*10) % (this.hodor_name.length);
        console.log(x);
        return this.hodor_name[x];
    }

    render(){
        return(
            <h1 className="text-block" >{this.getHodorName() + this.getExclamations()}</h1>
        );
    }
}

class HodorText extends React.Component {
    state = {val:1};
    update = () => {
        this.setState({
            val:1
        });
    }
    render(){
        return(
            <div >
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
                <GenerateText />
            </div>
        );
    }
}

export default HodorText;