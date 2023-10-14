import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function ComicHero() {
  const getAllHero = useSelector((state) => state.HeroObj.allListHeros);
  const { heroeId } = useParams();
  // selHero means selected hero
  const selHero = getAllHero.find((allhero) => allhero.name === heroeId);

  if (!selHero) {
    return <h1>Please Wait a Moment ...</h1>;
  }

  // only one hero thing this is

  return (
    <>
      <header className="headerMain">
        <Link to="/herosList"><AiOutlineLeft /></Link>
        <p className="headingTitle">Details</p>
        <AiFillSetting />
      </header>
      <div className="wholePage">
        <div className="selectedHero">
          <img
            src={`${selHero.thumbnail.path}.${selHero.thumbnail.extension}`}
            alt={selHero.name}
          />
          <div className="infoMain">
            <div className="subInfo">
              <h2>
                Name Of Hero:
                {selHero.name}
              </h2>
            </div>
            <div className="subInfo">
              <h4>
                Comics:
                {selHero.comics.available}
              </h4>
              <ul>
                {selHero.comics.items.map((comic) => (
                  <li key={comic.id}>{comic.name}</li>
                ))}
              </ul>

              <h4>More information:</h4>
              <a href={selHero.urls[2] ? selHero.urls[2].url : selHero.urls[1].url}>information</a>
              <h4>
                Description:
                {selHero.description || 'classified'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComicHero;
