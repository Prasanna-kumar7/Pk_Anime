import React, { useEffect, useState } from "react";
import SearchAnime from "./SearchAnime";
import "./SearchAnime.css";
import { AnimeDetails } from "./animeDetails";

const SearchAnimeApi = () => {
  const [animeData, setAnimeData] = useState();
  const [search, setSearch] = useState("");
  const [animeDetails, setAnimeDetails] = useState(null);

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="header">
        <header className="logo">
          <h1>PK Anime</h1>
        </header>
        <nav className="nav_container">
          <div className="nav_container-search">
            <input
              className="search"
              type="search"
              placeholder="Search Anime"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </nav>
      </div>

      <div className="anime_wrap">
        {animeDetails && (
          <div className="anime_details-wrap" onClick={() => setAnimeDetails(null)}>
            <div className="anime-content" onClick={(e) => e.stopPropagation()}>
              <AnimeDetails 
                animeDetails={animeDetails} 
                setAnimeDetails={setAnimeDetails}
              />
            </div>
          </div>
        )}
        
        <div className="anime_container">
          <SearchAnime 
            searchanime={animeData} 
            setAnimeDetails={setAnimeDetails}
          />
        </div>
      </div>

      <footer className="footer">
        <p>&copy; Copyright, All rights reserved.</p>
      </footer>
    </>
  );
};

export default SearchAnimeApi;