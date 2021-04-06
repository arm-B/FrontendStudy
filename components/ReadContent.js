import React, {Component} from 'react';

class ReadContent extends Component{
    render(){
      console.log('Content render');
      return(
        <cont>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </cont>
      );
    }
  }

  export default ReadContent;