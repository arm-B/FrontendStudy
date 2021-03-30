import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      subject:{title:'REACT', sub:"For UI!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText ..."},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JAVASCRIPT", desc:"Javascript is for interactive"},
        {id:4, title:"REACT", desc:"React is for ..."}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Subject 
        title = {this.state.subject.title}
        sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title = "html" desc="hihi"></Content>
      </div>
    );
  }
}

export default App;
