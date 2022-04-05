import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import React from 'react';
import Login from "./pages/login";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";

function Routes() {
   return (
     <Router>
        <Switch>
          <Route path="/" exact component={Login} />
           <Route path="/cadastro" component={Cadastro} />
           <Route path="/lista" component={Lista} />
         </Switch>
      </Router>
   );
}

export default Routes;