import React, {Component} from 'react';

class Content extends Component{
    render(){
      return(
        <cont>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        </cont>
      );
    }
  }

  export default Content;