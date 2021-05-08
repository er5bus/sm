/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

// Import routes
import { rootRoutes } from "./containers"

//import { Offline, Online } from './components/connectivity'

// persist
import { PersistGate } from 'redux-persist/integration/react'

// store
import { store, persistor } from './configureStore'

// loaders
import { SplashScreen } from './components/controls'

// error pages
import { NotFoundPage, ErrorBoundary } from './components/error-pages'

//import { ContentRoute } from './components/router'

// load translation
import './i18n'

// load main style
import './assets/sass/style.scss'

// load style
/*const BODY_NODE = document.getElementsByTagName('body')[0]
if (isRLTLang()) {
  BODY_NODE.setAttribute('direction', 'rtl')
  BODY_NODE.setAttribute('dir', 'rtl')
  BODY_NODE.setAttribute('style', "direction: rtl;font-family: 'big-vesta';")
}else {
  BODY_NODE.setAttribute('direction', 'ltr')
  BODY_NODE.setAttribute('dir', 'ltr')
  BODY_NODE.setAttribute('style', "direction: ltr;font-family: 'Poppins';")
}*/

const MOUNT_NODE = document.getElementById('js-root')

const ELEM = (
  <>
    {/* Provide Redux store */}
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<SplashScreen />}>
          <BrowserRouter>
            <ErrorBoundary>
              <Switch>
                { Object.keys(rootRoutes).map((route) => (
                  <Route key={route} { ...rootRoutes[route] } />
                )) }
                <Route component={NotFoundPage} />
              </Switch>
            </ErrorBoundary>
          </BrowserRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  </>
)

ReactDOM.render(ELEM, MOUNT_NODE)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  /*module.hot.accept(['./routes'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE).render(ELEM, MOUNT_NODE)
  })*/
}
