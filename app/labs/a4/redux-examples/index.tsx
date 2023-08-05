"use client";

import H2 from "@blocks/h2";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import { configureStore } from "@reduxjs/toolkit";
import Todos from "./todos-component";
import { Provider } from "react-redux";

const store = configureStore({ reducer: { hello, todos } });

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div>
        <H2>Redux Examples</H2>
        <Todos />
        <HelloReduxExampleComponent />
      </div>
    </Provider>
  );
}
