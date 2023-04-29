import { Routes } from './src/routes';
import { AppProvider } from './src/contexts/AppContext';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

