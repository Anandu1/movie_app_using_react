import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../Components/NavBar/NavBar";
import RowPoster from "../RowPoster/RowPoster";
function Home() {
  return (
    <div className="Home">
   <NavBar/>
   <Banner/>
   <RowPoster/>
    </div>
  );
}

export default Home;
