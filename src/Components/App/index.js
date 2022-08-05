import { React, useState } from "react";

import SearchBar from "../SearchBar";
import CurrentWeather from "../CurrentWeater";
import Loader from "../Loader.js";
import Footer from "../Footer";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <SearchBar getData={setData} />
      {data ? <CurrentWeather data={data} /> : <Loader />}
      <Footer />
    </div>
  );
}

export default App;
