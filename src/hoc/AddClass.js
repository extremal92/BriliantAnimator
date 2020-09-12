import React, { Component } from 'react';

export const AddClass = (Component, className) => {

    return React.memo((props) => {
        return(
            <div className={className}>
                <Component {...props}/>
            </div>
        )
    })
}

