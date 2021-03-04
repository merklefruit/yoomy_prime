import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Accedi from "pages/auth/Accedi";
import Registrati from "pages/auth/Registrati";

import Home from "pages/Home";
import Istruttori from "pages/istruttori/Istruttori";
import Istruttore from "pages/istruttori/Istruttore";
import Calendario from "pages/calendario/Calendario";
import Evento from "pages/calendario/Evento";
import Account from "pages/Account";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/accedi" component={Accedi} />
        <Route exact path="/registrati" component={Registrati} />

        <Route exact path="/" component={Home} />
        <Route exact path="/istruttori" component={Istruttori} />
        <Route exact path="/istruttore/:id" component={Istruttore} />
        <Route exact path="/calendario" component={Calendario} />
        <Route exact path="/evento/:id" component={Evento} />
        <Route exact path="/account" component={Account} />

        {/* for dev... add 404 page */}
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
