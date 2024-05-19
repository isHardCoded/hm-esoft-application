import Header from "../elements/Header"
import Catalog from "../elements/Catalog"
import Search from "../elements/Search"
import Sidebar from "../elements/Sidebar";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { MovieProvider } from "../context/ContextMovie";

const SearchMovie = () => {

  return (
    <MovieProvider>
      <div className="container">
      <div className="searchMovie">
        <Header />
        <Catalog page={"Поиск фильма"} />
        <Search/>
        <Sidebar/>
      </div>
    </div>
    </MovieProvider>
  );
};

export default SearchMovie;