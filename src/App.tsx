import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SokosMikrofrontendTemplate from "./micro-frontend/SokosMikrofrontendTemplate";
import UtbetalingFrontendPoc from "./micro-frontend/UtbetalingFrontendPoc";
import { Path } from "./models/path";
import Information from "./pages/Information";
import Feilside from "./pages/Feilside";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={<Layout />}
            errorElement={
              <Feilside
                tittel={"Siden finnes ikke"}
                melding={"Du har forsøkt å gå inn på en side som ikke eksisterer!"}
                knapp
              />
            }
          >
            <Route path="/" element={<Information />} />
            <Route path={Path.SOKOS_MIKROFRONTEND_TEMPLATE} element={<SokosMikrofrontendTemplate />} />
            <Route path={Path.UTBETALINGER_FRONTEND_POC} element={<UtbetalingFrontendPoc />} />
          </Route>
        )
      )}
    />
  );
};

export default App;
