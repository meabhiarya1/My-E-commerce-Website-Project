import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Auth0Provider
  //   domain="dev-u2nom7kvfh71pm2s.us.auth0.com"
  //   clientId="HD6VWTQzIhDpL2QLUezBbUcRFWfNLqUi"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  <Auth0Provider
    domain="dev-ad6goslkxzeg4e56.us.auth0.com"
    clientId="hQzP7ccpUSDONe9qaHkH2CRD4qMqw5R9"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
