/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allApiHeros } from './Redux/AllHeros/allHerosSlice';
import ComicList from './components/ComicList';
import ComicHero from './components/ComicHero';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allApiHeros());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosList" element={<ComicList />} />
        <Route path="/heroes/:heroeId" element={<ComicHero />} />
      </Routes>
    </>
  );
}

export default App;
