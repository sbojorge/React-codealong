import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <p>Hello,{props.name}! I see you're {props.age} years old; {props.greeting}</p>;
}
export default FunctionalGreetingWithProps;