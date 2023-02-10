import { Route, Routes } from 'react-router-dom';
import { Instrument, Layout } from './components/pages';
import { Main } from './components/pages';
import { Auth, PostMusic } from './components/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="instrument" element={<Instrument />} />
          <Route path="/postmusic" element={<PostMusic />} />
          {/* MainPage 등 */}
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
        {/* NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
