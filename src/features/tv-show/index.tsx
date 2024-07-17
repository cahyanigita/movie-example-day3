import { ResponTvShow, Tv } from "../../services/tv-show/type";
import  { useEffect, useState } from "react";

import TvShowCard from "../../components/tvshow-card";
import { getNowTvShow } from "../../services/tv-show";

const Tvshow = () => {
  const [nowMovieList, setNowMovieList] = useState<ResponTvShow>();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const responsetv = await getNowTvShow();
      console.log(responsetv);
      setNowMovieList(responsetv);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col m-3">
      <label className="text-xl font-semibold  mt-5 mb-5 text-center mx-auto">Tv Show</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {nowMovieList?.results.map((item: Tv) => (
          <TvShowCard
            poster_path={item.poster_path}
            name={item.name}
            first_air_date={item.first_air_date}
            size="w-40"
          />
        ))}
      </div>
    </div>
  );
};

export default Tvshow;
