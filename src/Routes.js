import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Accedi from "pages/auth/Accedi";
import Registrati from "pages/auth/Registrati";

import Home from "pages/Home";
import Istruttori from "pages/istruttori/Istruttori";
import Istruttore from "pages/istruttori/Istruttore";
import Calendario from "pages/Calendario";
import Profilo from "pages/Profilo";

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
        <Route exact path="/profilo" component={Profilo} />

        {/* for dev... */}
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
