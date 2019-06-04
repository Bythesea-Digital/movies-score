import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import MemoryRouter from "react-router-dom/es/MemoryRouter";

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      <MemoryRouter initialEntries={['/']}>
        {story}
      </MemoryRouter>
    </ReduxProvider>

  )
}