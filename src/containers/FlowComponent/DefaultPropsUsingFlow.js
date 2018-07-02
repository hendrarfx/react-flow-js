// @flow
import React, {Component} from 'react';

class DefaultPropsUsingFlow extends Component<{value1:number}>{
    static defaultProps={
        value1:25
    }
    render(){
        return <div>Default Props Using Flow {this.props.value1}</div>
    }
}

export default DefaultPropsUsingFlow;