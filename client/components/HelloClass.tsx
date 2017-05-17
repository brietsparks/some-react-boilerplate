import * as React from "react";
import {HelloProps} from './HelloProps';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class HelloClass extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello {this.props.firstName} {this.props.lastName}!</h1>;
    }
}