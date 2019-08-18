import React from 'react';

import './../Bootstrap.css'
const game = (props) => {
    return (
        <div className="col-sm-3">
            <p onClick={props.click}>Name: {props.name}</p>
            <p>Platform: {props.platform}</p>
            <input className="form-control" type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default game;