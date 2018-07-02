// @flow
import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

class MyFlowComponent1 extends React.Component<Props> {
  render() {
    return <div><h1>My Flow Component 1</h1><br />{this.props.bar}<br /></div>;
  }
}

export default MyFlowComponent1;