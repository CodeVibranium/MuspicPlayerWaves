import React from "react";

function Song({ songCover, songName, songArtist }) {
  return (
    <div className="Song-Body">
      <img src={songCover} className="imgResponsive" alt="songCOverImage"></img>
      {/* {console.log(songCover)} */}
      <h1>{songName}</h1>
      <h2>{songArtist}</h2>
    </div>
  );
}

export default Song;
