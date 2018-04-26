import React from 'react'
import { Card, Button } from 'semantic-ui-react';


const HabitsDetails = function (props) {
    return (
       <div>
           <h1>Hello {props.match.params.id}</h1>
       </div>
    );
}

export default HabitsDetails;