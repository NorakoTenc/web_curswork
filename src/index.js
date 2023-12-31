import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { Provider } from "react-redux"
import store from "./store"

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js")
  whyDidYouRender(React, {
    include: [/^ConnectFunction$/]
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()

