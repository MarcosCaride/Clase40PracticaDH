import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import Prueba from './Prueba';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Prueba />

        </div>
    )
}

export default ContentRowCenter;