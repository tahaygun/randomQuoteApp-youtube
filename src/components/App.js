import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            quote:null,
            color:'pink'
        }
        this.getQuote = this.getQuote.bind(this);
    }

    changeBg(){
        var colors=['red','blue', 'green','yellow'];
        var x = Math.floor((Math.random() * 3) + 0);
        var color=colors[x];
        this.setState({color:color});
    }    

    getQuote(){
        axios.get("https://talaikis.com/api/quotes/random/")
        .then((res)=>this.setState({quote:res.data},  this.changeBg()))
       
    }

    componentDidMount(){
        this.getQuote();
    }

    render() {
        return (
            <div style={{background:this.state.color}} >
                {this.state.quote !==null && <p>{this.state.quote.quote} {this.state.quote.author}</p> }
                <button  onClick={this.getQuote} >GetNew</button>
            </div>
        );
    }
}

export default App;
