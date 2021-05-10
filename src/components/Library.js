import React from "react";
import LibrarySong from "./LibrarySong";
// import Player from "./Player";

function Library({
  songs,
  setCurrentSong,
  currentSong,
  audioRef,
  navOpen,
  setNavOpen,
}) {
  //   const RenderSongs = );
  return (
    <div className={!navOpen ? "contract" : "expand"}>
      {/* console.log(); */}
      <div className="Library ">
        <h1>Library</h1>
        <small>click to play, Double click to pause</small>
        <div className="Library-songs">
          {/* <h3>{songs.length}</h3> */}
          {songs.map((song) => {
            return (
              <LibrarySong
                MySong={song}
                songs={songs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                key={song.id}
                audioRef={audioRef}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Library;
