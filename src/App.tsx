import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Trending";
import SavedGifsPage from "./pages/SavedGifsPage";
import { GifProvider } from "./context/GifContext";
import NavBar from "./components/NavBar";
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GifProvider>
        <ErrorBoundary>
          <Router>
          <GlobalStyles />
            <NavBar />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/saved" element={<SavedGifsPage />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </GifProvider>
    </QueryClientProvider>
  );
}


export default App;
