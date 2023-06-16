import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { Provider } from 'react-redux';
import { store } from './store';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
