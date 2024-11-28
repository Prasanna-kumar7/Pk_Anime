import React, { useEffect, useState } from "react";
import SearchAnime from "./SearchAnime";
import "./SearchAnime.css";

const SearchAnimeApi = () => {
  const [animeData, setAnimeData] = useState();
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await fetch(
      // `https://api.jikan.moe/v4/anime?q=naruto?&limit=10`
      `https://api.jikan.moe/v4/anime?q=${search}&sfw`
    );

    const resData = await res.json();
    setAnimeData(resData.data);
    console.log(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
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
      <header>
        <h1 className="logo">PK Anime</h1>
      </header>

      <div className="anime_wrap">
        <div className="anime_container">
          <SearchAnime searchAnime={animeData} />
        </div>
      </div>
    </>
  );
};

export default SearchAnimeApi;
