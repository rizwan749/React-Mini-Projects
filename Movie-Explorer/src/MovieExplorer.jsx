import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MovieExplorer = () => {
  
  // 1. CONSTANTS & STATE VARIABLES
  
  const APIKey = import.meta.env.VITE_TMDB_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");
  const [displayMovie, setDisplayMovie] = useState([]); // Default state ab khali array hai
  const [lastSearch, setLastSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [providers, setProviders] = useState([]);

  
  // 2. SEARCH MOVIE LOGIC (USER INPUT)
  
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
  }, []); 

  //Movie platform provider
// ==========================================
  // 3.5 FETCH WATCH PROVIDERS (NETFLIX, AMAZON ETC)
  // ==========================================
  useEffect(() => {
    const fetchProviders = async () => {
      // Agar popup band hai toh API call mat bhejo
      if (!selectedMovie) return; 
      
      try {
        const providerURL = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/watch/providers?api_key=${APIKey}`;
        const response = await fetch(providerURL);
        const data = await response.json();
        
        // Agar US (America) ka data mojood hai
        if (data.results && data.results.US) {
          const usData = data.results.US;
          let allProviders = [];
          
          // Streaming, Rent, aur Buy teeno ka data jama karo
          if (usData.flatrate) allProviders = [...allProviders, ...usData.flatrate];
          if (usData.rent) allProviders = [...allProviders, ...usData.rent];
          if (usData.buy) allProviders = [...allProviders, ...usData.buy];
          
          // Duplicate logos hatane ke liye (Kyunke kuch platform rent aur buy dono detey hain)
          const uniqueProviders = allProviders.filter((v, i, a) => 
            a.findIndex(v2 => (v2.provider_id === v.provider_id)) === i
          );

          setProviders(uniqueProviders);
        } else {
          setProviders([]); // Agar koi provider na mile toh khali kar do
        }
      } catch (error) {
        console.error("Error fetching providers:", error);
        setProviders([]);
      }
    };

    fetchProviders();
  }, [selectedMovie]); // Jab bhi movie change hogi, yeh chalega

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
              onClick={() => setSelectedMovie(movie)}
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
      {/* ==========================================
          6. MOVIE DETAILS MODAL (POPUP)
          ========================================== */}
      {selectedMovie && (
        
        // Dark Backdrop
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          
          {/* Main Modal Box (Width set to 4xl, added padding and gap) */}
          <div className="bg-[#181818] rounded-2xl max-w-4xl w-full relative flex flex-col md:flex-row shadow-2xl border border-gray-800 p-4 md:p-8 gap-6 md:gap-8 items-start">
            
            {/* Close Button (X) */}
            <button 
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-4xl font-bold z-10 transition-colors"
            >
              &times;
            </button>

            {/* Left Side: Movie Poster (Ab image ek khoobsurat box mein hai) */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img 
                src={
                  selectedMovie.poster_path 
                    ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}` 
                    : "https://placehold.co/500x750/333333/FFFFFF?text=No+Poster"
                } 
                alt={selectedMovie.title}
                className="w-full h-auto rounded-xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Right Side: Movie Details (Double text khatam kar diya) */}
            <div className="w-full md:w-2/3 flex flex-col justify-start pt-2">
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{selectedMovie.title}</h2>
              
              <div className="flex gap-4 items-center mb-6 text-sm text-gray-400">
                <p className="bg-gray-800 px-3 py-1 rounded-full font-medium shadow-inner">
                  {selectedMovie.release_date ? selectedMovie.release_date.split("-")[0] : "N/A"}
                </p>
                <p className="bg-yellow-600/20 text-yellow-500 px-3 py-1 rounded-full border border-yellow-600/50 font-medium">
                  ⭐ {selectedMovie.vote_average ? selectedMovie.vote_average.toFixed(1) : "NR"} / 10
                </p>
              </div>
              
              <h3 className="text-white font-semibold mb-2 text-lg">Overview:</h3>
              
              {/* Scrollbar hide karne ka jadu Tailwind ki hidden classes ke zariye */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed overflow-y-auto max-h-48 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {selectedMovie.overview ? selectedMovie.overview : "No description available for this movie."}
              </p>

              {/* WHERE TO WATCH SECTION */}
              <div className="mt-8 pt-6 border-t border-gray-800 w-full">
                <h3 className="text-white font-semibold mb-4 text-lg">Available On:</h3>
                <div className="flex gap-4 flex-wrap">
                  {providers?.length > 0 ? (
                    providers.map((provider) => (
                      <div key={provider.provider_id} className="flex flex-col items-center gap-2">
                        <img 
                          src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`} 
                          alt={provider.provider_name}
                          className="w-12 h-12 rounded-xl shadow-md object-cover transition-transform hover:scale-110"
                          title={provider.provider_name}
                        />
                        <span className="text-gray-400 text-[11px] text-center max-w-[60px] truncate">
                          {provider.provider_name}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm italic">Not available on standard streaming yet.</p>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
    
  );
};

export default MovieExplorer;