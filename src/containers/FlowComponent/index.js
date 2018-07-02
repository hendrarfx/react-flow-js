import React from 'react';
import MyFlowComponent1 from './MyFlowComponent1';
import StateUsingFlow from './StateUsingFlow';
import DefaultPropsUsingFlow from './DefaultPropsUsingFlow';
import StateLessFunctionalComponent from './StatelessFunctionalComponent';

const flowComponent=()=>{
  return <div>
  <table border="1" cellspacing="0" cellpadding="25" style={{width:'100%'}}>
            <thead>
                <tr>
                  <td>Type</td>
                  <td>Result</td>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Props using flow</td>
                  <td><MyFlowComponent1 foo={1} bar="Flow Component From App" /></td>
              </tr>
              <tr>
                  <td>State Using Flow</td>
                  <td><StateUsingFlow /></td>
              </tr>
              <tr>
                  <td>Default Props Using Flow</td>
                  <td><DefaultPropsUsingFlow /></td>
              </tr>
              <tr>
                  <td>Stateless Functional Component</td>
                  <td><StateLessFunctionalComponent /></td>
              </tr>
            </tbody>
        </table>
  </div>
}
export default flowComponent;