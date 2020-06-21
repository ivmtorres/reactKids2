import React, { Fragment } from 'react';

export default function StateChild({callback}){
    return ( 
    <Fragment>
        <button onClick={()=> callback(1)}>
            I need money!!!!
        </button>
       
    </Fragment>
    );

}