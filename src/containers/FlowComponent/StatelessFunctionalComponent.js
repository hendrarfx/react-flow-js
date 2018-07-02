// @flow
import React from 'react';

type Props={
  variable1:string
}

const statelessFunctionalComponent=(props: Props)=>{
  return <div>
      <h5>Stateless Functional Component</h5>
      Props: {props.variable1}
  </div>
}

statelessFunctionalComponent.defaultProps={
  variable1:"hello world"
}

export default statelessFunctionalComponent;