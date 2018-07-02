import React, { Component } from 'react';
import './App.css';
import FlowComponent from './containers/FlowComponent';
import EventHandlingComponent from './containers/EventHandling';

class App extends Component {
  state={
    type:0
  };
  
  changePage=(page)=>{
    this.setState({type:page});
  }

  render() {
    let renderedElements=null;

    switch (this.state.type) {
      case 0:
        renderedElements=<FlowComponent />
        break;
      case 1:
        renderedElements=<EventHandlingComponent />
        break;
      default:
        break;
    }

    return (
      <div className="App">
          <table style={{width:'100%'}} cellspacing="10">
            <tbody>
              <tr>
                <td style={{width:'20%',textAlign:'left',verticalAlign:'top'}}>
                    <li onClick={()=>this.changePage(0)}>Component</li>
                    <li onClick={()=>this.changePage(1)}>Event Handling</li>
                </td>
                 <td style={{width:'80%'}}>
                  {renderedElements}
                </td>
              </tr>
            </tbody>
          </table>
          
      </div>
    );
  }
}

export default App;
