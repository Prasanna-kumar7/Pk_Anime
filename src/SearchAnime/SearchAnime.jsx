import React from "react";

const SearchAnime = ({ searchanime, setAnimeDetails }) => {
  return (
    <>
      {searchanime
        ? searchanime.map((anime) => {
            return (
              <div className="anime" key={anime.mal_id} onClick={()=>setAnimeDetails(anime)}>
                <div className="anime_card">
                  <div className="anime_img">
                    <img
                      src={anime.images.jpg.large_image_url}
                      alt={anime.title}
                    />
                  </div>
                  <div className="anime_text">
                    <h4>{anime.title}</h4>
                    <p>
                      {anime.type} &#8226; {anime.duration}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};

export default SearchAnime;
