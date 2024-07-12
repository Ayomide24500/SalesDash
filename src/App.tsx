import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./global/Store"; // Import your store
import { mainRouter } from "./router/mainRouter";
import { ContextProvider } from "./global/ContextProvider";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ContextProvider>
        <RouterProvider router={mainRouter} />
      </ContextProvider>
    </ReduxProvider>
  );
};

export default App;
