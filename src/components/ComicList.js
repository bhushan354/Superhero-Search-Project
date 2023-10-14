/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';

// this is the thing where all the heros get displayed
function ComicList() {
  const AllHeroeList = useSelector((state) => state.HeroObj.allListHeros);
  const hasError = useSelector((state) => state.HeroObj.error);
  const isLoading = useSelector((state) => state.HeroObj.loading);
  const [initialSearch, setSearch] = useState('');

  if (isLoading) {
    return <h1>Your Comics are loading...</h1>;
  }

  if (hasError) {
    return <h1>Something went wrong ...</h1>;
  }

  return (
    <>
      <header className="headerMain">
        <Link to="/"><AiOutlineLeft /></Link>
        <p className="headingTitle">Comic-Heros</p>
        <AiFillSetting />
      </header>
      <div className="secondSearch">
        <input
          className="typeInput"
          type="text"
          placeholder="Enter Name"
          value={initialSearch}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="allHeroList">
        {(() => {
          const searchedHero = [];
          for (let i = 0; i < AllHeroeList.length; i += 1) {
            const hero = AllHeroeList[i];
            if (hero.name.toLowerCase().includes(initialSearch.toLowerCase())) {
              searchedHero.push(
                <Link to={`/heroes/${hero.name}`} key={hero.id}>
                  {/* this thing below is one among all the heroes when on all heroes page */}
                  <div
                    className="individualHero"
                    key={hero.id}
                  >
                    <img
                      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      alt="Hero"
                    />
                    <h3>{hero.name}</h3>
                    <h6>{`Available Comics: ${hero.comics.available}`}</h6>
                  </div>
                </Link>,
              );
            }
          }
          return searchedHero;
        })()}
      </div>
    </>
  );
}

export default ComicList;
