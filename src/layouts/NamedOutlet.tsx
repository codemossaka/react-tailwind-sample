import {useOutlet} from "react-router-dom";
import React from "react";


type NamedOutletProps = {
    name: string;
};
const NamedOutlet = (props: NamedOutletProps) => {
    const outlet = useOutlet();

    if (!outlet) {
        return null;
    }

    const {children} = outlet.props;

    return React.Children.map(children, (child) =>
        // <element.type {child.props} {...props}>{children}</element.type>
        React.cloneElement(child.props, {name: props.name})
    );
}

export default NamedOutlet;