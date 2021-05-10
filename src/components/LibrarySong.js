import React from "react";

function LibrarySong({ MySong, currentSong, setCurrentSong, songs, audioRef }) {
  function Hello() {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === MySong.id) {
        // console.log(key);
        setCurrentSong(songs[i]);
        audioRef.current.play();
        if (MySong.active === true) {
          console.log("PLAYING");
        }
        // currentSong.play();
      }
    }
  }
  function pauseSong() {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === MySong.id) {
        // console.log(key);
        setCurrentSong(songs[i]);
        audioRef.current.pause();
      }
    }
  }
  return (
    <div onClick={Hello} onDoubleClick={pauseSong} className="LibrarySongJs">
      <img src={MySong.cover} alt="coverImage"></img>
      <h3>{MySong.name}</h3>
      {/* <h4>{MySong.artist}</h4> */}
    </div>
  );
}
export default LibrarySong;
