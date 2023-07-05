import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { Provider } from 'react-redux';
import { store } from './store';
import { EventPage } from './pages/event.page';
import { OrderPage } from './pages/order.page';
import { SuccessPage } from './pages/success.page';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
