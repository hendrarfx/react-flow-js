import React, {Component} from 'react';

class EventHandlingComponent extends Component<{},{count:number}>{
   state={
     count:0
   };
   handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    // To access your button instance use `event.currentTarget`.
    (event.currentTarget: HTMLButtonElement);
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render(){
    return <div align="left">
        <h2>Flow With Event Handling Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          Increment
        </button>
    </div>
  }
}

export default EventHandlingComponent;