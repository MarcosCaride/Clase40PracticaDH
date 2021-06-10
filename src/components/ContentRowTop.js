import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

import "./ContentRowTop.css"

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div id="TitleCRT" className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">La Cantina del Androide</h1>
						<h2 className="h4 mb-0 text-gray-800">Dashboard</h2>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;