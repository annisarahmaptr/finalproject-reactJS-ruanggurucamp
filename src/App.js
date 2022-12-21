import {Box, Center, Heading} from "@chakra-ui/react"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Detail from "./Detail"
import Pagenotfound from "./Pagenotfound";

const App = () => {
  const MyRouter = () => 
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />}/>
        <Route path="*" element={<Pagenotfound />}/>
      </Routes>
  </div>;

  return (
    <div className="App">
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      <MyRouter />
    </div>
  );
};

export default App;
