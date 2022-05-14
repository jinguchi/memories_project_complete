// file we use to connect to index.html file
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// provider keeps track of the store (global state) allowing us to access the store everywhere in the app
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// here we are connecting to the div with the ID 'root'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);