import { SWRConfig } from "swr";
import axios from "axios";

import PrimeReact, { locale, addLocale } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import locale_it from "utils/locale_it";
import Routes from "src/Routes";

// Providers
import { DataProvider } from "providers/data";
import { AuthProvider } from "providers/auth";
import { CommonProvider } from "providers/common";
import WithTheme from "providers/theme";

// Axios base API url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  // PrimeReact active ripple effect
  PrimeReact.ripple = true;

  addLocale("it", locale_it);
  locale("it");

  return (
    <>
      <DataProvider>
        <CommonProvider>
          <AuthProvider>
            <WithTheme>
              <SWRConfig
                value={{
                  fetcher: (url) => axios(url).then((r) => r.data),
                  dedupingInterval: 5000,
                }}
              >
                <Routes />
              </SWRConfig>
            </WithTheme>
          </AuthProvider>
        </CommonProvider>
      </DataProvider>
    </>
  );
}

export default App;
