// @flow
import * as React from 'react';

type Props={}

type State={
    variable1:number
}

class StateUsingFlow extends React.Component<Props,State>{

    state = {
        variable1: 0,
    };

    componentDidMount(){
        this.setState({variable1:1});
    }

    render(){
        return <div>
            Variable : {this.state.variable1}
        </div>;
    }
}

export default StateUsingFlow;