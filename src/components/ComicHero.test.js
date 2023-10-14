import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ComicHero from './ComicHero';

const mockStore = configureMockStore([]);

describe('Testing ComicHero Component', () => {
  test('renders "Please Wait a Moment ..." when hero is not found', () => {
    const store = mockStore({
      HeroObj: {
        allListHeros: [],
      },
    });

    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/unknown-hero']}>
          <Routes>
            <Route path="/:heroeId" element={<ComicHero />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test('renders hero information when hero is found', () => {
    const mockHero = {
      name: 'Spider-Man',
      thumbnail: {
        path: 'path',
        extension: 'extension',
      },
      comics: {
        available: 3,
        items: [{ name: 'Comic 1' }, { name: 'Comic 2' }, { name: 'Comic 3' }],
      },
      series: {
        available: 2,
        items: [{ name: 'Series 1' }, { name: 'Series 2' }],
      },
      urls: [{ url: 'url1' }, { url: 'url2' }],
      description: 'The friendly neighborhood Spider-Man.',
    };

    const store = mockStore({
      HeroObj: {
        allListHeros: [mockHero],
      },
    });

    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Spider-Man']}>
          <Routes>
            <Route path="/:heroeId" element={<ComicHero />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
