import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

function TagName(props){
    return(
        <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body" >{props.tag_name}</div>
        </div>
      </div>
        
    )
}
export default TagName;