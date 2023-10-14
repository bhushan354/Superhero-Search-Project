/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineHome, AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Home() {
  const [stackFilter, setStackFilter] = useState('');

  // these are the cateories
  const dataArray = [
    { name: 'Heroes', image: faSuperpowers },
    { name: 'Comics', image: faSuperpowers },
    { name: 'Archives', image: faSuperpowers },
    { name: 'Saved', image: faSuperpowers },
    { name: 'Read', image: faSuperpowers },
    { name: 'Later', image: faSuperpowers },
  ];

  const filterByName = (data, filter) => data.name.toLowerCase().includes(filter.toLowerCase());

  const filteredDataArray = dataArray.filter((allData) => filterByName(allData, stackFilter));

  return (
    <section className="wholePage">
      <header className="headerMain">
        <Link to="/"><AiOutlineHome /></Link>
        <p className="headingTitle">Home</p>
        <AiFillSetting />
      </header>
      {/* //this is searchBar */}
      <div className="searchBar">
        <input
          className="typeInput"
          type="text"
          placeholder="search what you like ..."
          value={stackFilter}
          onChange={(e) => setStackFilter(e.target.value)}
        />
      </div>
      {/* this is all the filtered data from datat array */}
      <ul className="each-genre">
        {filteredDataArray.map((dataArr, num) => (
          <li
            className="listHome"
            key={dataArr.name}
          >
            <Link to="/herosList">
              <FontAwesomeIcon className="imgIcon" icon={dataArr.image} />
              <div className="homeSubInfo">
                <h2>
                  {dataArr.name}
                </h2>
                <p>{num + 1}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
