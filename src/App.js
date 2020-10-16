import React, { useState } from "react";
import "./styles/App.scss";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(0);

  const handleMovie = (id) => {
    setSelectedMovie(id);
  };

  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests[0]} selectedMovie={selectedMovie} />
      <div className="global__row">
        {requests.map((item, index) => {
          return <Row handleMovie={(id) => handleMovie(id)} key={index} title={item.name} fetchUrl={item.fetchKey} isLargeRow={item.isLargerRow} />;
        })}
      </div>
    </div>
  );
}

export default App;
