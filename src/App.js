import './App.css';
import Phonebook from 'Component/Phonebook';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <React.StrictMode>
        <ToastContainer />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Phonebook />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
