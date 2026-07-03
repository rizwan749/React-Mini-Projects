import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MovieExplorer = () => {
  // ==========================================
  // 1. CONSTANTS & STATE VARIABLES
  // ==========================================
  const APIKey = "337ff2f8a19d0cb23c79a1f5e31e1f52";

  const [searchTerm, setSearchTerm] = useState("");
  const [displayMovie, setDisplayMovie] = useState([]); // Default state ab khali array hai
  const [lastSearch, setLastSearch] = useState("");

  // ==========================================
  // 2. SEARCH MOVIE LOGIC (USER INPUT)
  // ==========================================
  const handleSearch = async () => {
    // GUARD CLAUSE: Agar box khali hai, toh API call mat karo
    if (searchTerm === "") {
      toast.error("Movie name is required to search!");
      return; // Yahan code ruk jayega aur API error nahi aayega
    }

    // TMDB se data mangwana
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    const realMovies = data.results;

    // Showcase aur history update karna
    setDisplayMovie(realMovies);
    setLastSearch(searchTerm);
    setSearchTerm("");
  };

  // ==========================================
  // 3. AUTO-LOAD TRENDING MOVIES (ON APP START)
  // ==========================================
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKey}`;
      const trendingResponse = await fetch(trendingURL);
      const trendingData = await trendingResponse.json();
      
      setDisplayMovie(trendingData.results);
    };

    fetchTrendingMovies();
  }, []); // Khali array ka matlab hai yeh sirf ek baar chalega

  // ==========================================
  // 4. MAIN UI RENDERING
  // ==========================================
  return (
    <div className="min-h-screen bg-black/90">
      
      {/* --- HERO SECTION WITH BACKGROUND --- */}
      <div className='bg-[url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw")] bg-cover bg-center min-h-screen'>
        
        {/* Dark Overlay */}
        <div className="bg-black/70 min-h-screen">
          
          {/* --- NAVBAR --- */}
          <nav>
            <div id="nav" className="flex justify-around pt-5">
              <div id="logo" className="font-bold text-red-500 text-2xl">
                MovieFlix
              </div>
              <button className="text-white pt-2 pl-4 pb-2 pr-4 bg-red-600 rounded-xl">
                Sign In
              </button>
            </div>
          </nav>

          <Toaster position="top-right" />

          {/* --- SEARCH AREA --- */}
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <h1 className="text-white font-bold text-2xl md:text-4xl md:text-5xl">
              Unlimited Shows, Movies and more
            </h1>
            <p className="text-white text-xl mt-4">
              Watch Anywhere, Enjoy Anywhere
            </p>
            
            <div className="mt-4">
              <p className="text-white text-xl text-center">
                Ready to watch? Enter any movie to search
              </p>
              <div className="flex justify-center items-center gap-3 mt-4 flex-col md:flex-row">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Enter movie to search..."
                  className="outline-none border border-white p-2 text-white w-full md:w-80 placeholder:text-white caret-white bg-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="text-white text-xl px-5 py-2 bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          5. DYNAMIC MOVIE GRID OR EMPTY STATE
          ========================================== */}
      
      {/* Optional Chaining (?) lagayi hai taake API fail hone par crash na ho */}
      {displayMovie?.length > 0 ? (
        
        // --- GRID SECTION ---
        <div className="grid grid-cols-1 md:grid-cols-4 p-4 md:p-10 gap-6 mt-10">
          {displayMovie.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#181818] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/500x750/333333/FFFFFF?text=No+Poster"
                }
                onError={(e) => {
                  e.target.src = "https://placehold.co/500x750/333333/FFFFFF?text=No+Poster";
                }}
                alt={movie.title}
                className="w-full object-cover h-80 text-white"
              />
              <div className="p-4">
                <h2 className="text-white font-bold text-lg truncate">
                  {movie.title}
                </h2>
                {/* TMDB release_date bhejta hai, year nahi */}
                <p className="text-gray-400 mt-1">
                  {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      ) : (
        
        // --- EMPTY STATE (NOT FOUND) ---
        <div className="h-[70vh] flex flex-col justify-center items-center px-6 md:px-0 mt-20 pb-20">
          <h2 className="text-white text-xl md:text-3xl text-center font-bold">
            Oops! Movie not found {lastSearch && `for "${lastSearch}"`}
          </h2>
          {lastSearch && (
            <p className="text-gray-400 mt-2 text-base md:text-xl text-center">
              "{lastSearch}" is coming soon...
            </p>
          )}
        </div>
        
      )}
    </div>
  );
};

export default MovieExplorer;