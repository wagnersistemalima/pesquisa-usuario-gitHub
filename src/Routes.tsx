import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './core/components/NavBar';
import After from './pages/After';
import Before from './pages/Before';
import Home from './pages/Home';



// BrowserRouter gerenciar as rotas / Switch decidir qual rota navegar / Router define a url de cada aplicação

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>

                <Route path = '/' exact>
                    <Home />

                </Route>

                <Route path = '/before'>
                    <Before />

                </Route>

                <Route path = '/after'>
                    <After />

                </Route>

            </Switch>
        
        
        </BrowserRouter>
    );
}

export default  Routes;