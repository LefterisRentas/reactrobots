import React, { Component, useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";



const App = () => {
  
  const[robots, setRobots] = useState([]);
  const[searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => {
        return respone.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);


  const filteredRobots = robots.filter((robots) => {
    return robots.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  
  if (robots.length === 0) {
    return <h1 className="tc sans-serif pa4">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
  }

export default App;
