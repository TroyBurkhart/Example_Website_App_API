import React from 'react';
import { LogBox } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MainTabBar from './navigation/mainTabBar';
import rootReducer from './components/reducers';

// disable some warnings
LogBox.ignoreAllLogs();

const store = configureStore({
  reducer: rootReducer,
});

function App(props) {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainTabBar />
      </PaperProvider>
    </Provider>
  );
}

export default App;
