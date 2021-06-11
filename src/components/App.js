import React from 'react';
import { Route, Switch} from 'react-router-dom'

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import TopBar from './TopBar'
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
import Chart from './Chart';
import ChartUsers from './ChartUsers';
import Prueba from './Prueba'
import "./ContentRowTop.css"


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
            <Switch>
                <Route path="/" exact>
                    <ContentWrapper/>
                </Route>
                <Route path="/ProductsInDB">
                <div id="content">
                  <TopBar />
                  <div className="container-fluid">
                    <div id="TitleCRT" className="d-sm-flex aligns-items-center justify-content-center mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                      <h2 className="h4 mb-0 text-gray-800">Lista de Productos</h2>
                    </div>
                  </div>
                  <Chart />
                </div>
                </Route>
                <Route path="/UsersInDB">
                <div id="content" width="100%">
                  <TopBar />
                  <div className="container-fluid">
                    <div id="TitleCRT" className="d-sm-flex aligns-items-center justify-content-center mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                      <h2 className="h4 mb-0 text-gray-800">Lista de Usuarios</h2>
                    </div>
                  </div>
                  <ChartUsers />
                </div>
                </Route>
                <Route path="/ContentRowMovies">
                <div id="content" width="100%">
                  <TopBar />
                  <div className="container-fluid">
                    <div id="TitleCRT" className="d-sm-flex aligns-items-center justify-content-center mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                      <h2 className="h4 mb-0 text-gray-800">Lista de Categorias</h2>
                    </div>
                  </div>
                  <Prueba />
                </div>
                </Route>
                <Route component={Error404}/>
            </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
