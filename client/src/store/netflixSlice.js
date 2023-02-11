import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TMBD_BASE_URL } from "../utils/constants";
import axios from "axios";

const initialState = {
  data: [],
  videoData: [],
  mylist: [],
  genresLoded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMBD_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_TMBD_API_KEY}`
  );
  return genres;
});

const getRawData = async (api, genres, pageflag = false, media_type) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 100 && i < 10; i++) {
    if (pageflag) {
      const {
        data: { results },
      } = await axios.get(`${api}${pageflag ? `&page=${i}` : ""}`);
      results.forEach((movie) => {
        const allGenres = [];
        movie.genre_ids.forEach((genre) => {
          const genNames = genres.find(({ id }) => id === genre);
          if (genNames) {
            allGenres.push(genNames.name);
          }
        });
        if (movie.backdrop_path) {
          moviesArray.push({
            ...movie,
            genres: allGenres,
            media_type: media_type,
          });
        }
      });
    }
  }
  return moviesArray;
};

export const fetchAllData = createAsyncThunk(
  "netflix/alldata",
  async ({ media_type }, { getState }) => {
    const {
      netflix: { genres },
    } = getState();
    return getRawData(
      `${TMBD_BASE_URL}/trending/${media_type}/week?api_key=${process.env.REACT_APP_TMBD_API_KEY}`,
      genres,
      true,
      media_type
    );
  }
);

export const getTrailer = createAsyncThunk(
  "netflix/trailer",
  async ({ movieId, media_type }) => {
    const {
      data: {
        videos: { results },
      },
    } = await axios.get(
      `${TMBD_BASE_URL}/${media_type}/${movieId}?api_key=${process.env.REACT_APP_TMBD_API_KEY}&append_to_response=videos`
    );
    return results.find(
      (ele) => ele.name === "Official Trailer" || "official trailer"
    );
  }
);

export const fetchDataByGenre = createAsyncThunk(
  "netflix/moviesByGenres",
  async ({ genreId, media_type }, { getState }) => {
    const {
      netflix: { genres },
    } = getState();
    return getRawData(
      `${TMBD_BASE_URL}/discover/${media_type}?api_key=${process.env.REACT_APP_TMBD_API_KEY}&with_genres=${genreId}`,
      genres,
      true
    );
  }
);
export const fetchBrowseData = createAsyncThunk(
  "netflix/browse",
  async ({ movie_id, media_type = "movie" }, { getState }) => {
    const {
      netflix: { genres },
    } = getState();
    return getRawData(
      `${TMBD_BASE_URL}/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US`,
      genres,
      true,
      media_type
    );
  }
);

export const getListData = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/v1/liked/${email}`
    );
    return movies;
  }
);

export const deleteFromList = createAsyncThunk(
  "netflix/deleteLiked",
  async ({ email, movieId }) => {
    const {
      data: { movies },
    } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/v1/delete`, {
      email,
      movieId,
    });
    return movies;
  }
);

const netflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, actions) => {
      state.genres = actions.payload;
      state.genresLoded = true;
    });
    builder.addCase(fetchAllData.fulfilled, (state, actions) => {
      state.data = actions.payload;
    });
    builder.addCase(getTrailer.fulfilled, (state, actions) => {
      state.videoData = actions.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, actions) => {
      state.data = actions.payload;
    });
    builder.addCase(fetchBrowseData.fulfilled, (state, actions) => {
      state.data = actions.payload;
    });
    builder.addCase(getListData.fulfilled, (state, actions) => {
      state.mylist = actions.payload;
    });
    builder.addCase(deleteFromList.fulfilled, (state, actions) => {
      state.mylist = actions.payload;
    });
  },
});

export default netflixSlice.reducer;
