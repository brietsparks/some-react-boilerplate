import * as React from "react";
import {HelloProps} from './HelloProps';

export const HelloStateless = (props: HelloProps) => {
    return <h1>Hello {props.firstName} {props.lastName}!</h1>;
};
