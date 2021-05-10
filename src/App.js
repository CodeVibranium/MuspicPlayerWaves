/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
//styles files
import "./styles/App.scss";

// jsx files.
import Player from "./components/Player";
import Song from "./components/Song";
import SongsList from "./components/SongsList";
import Library from "./components/Library";
import Nav from "./components/nav";

const center = { textAlign: "center", margin: "1rem" };
function App() {
  //States
  const [songs, setSongs] = useState(SongsList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setISPlaying] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    durationTime: 0,
  });

  //ref
  const audioRef = useRef(null);

  //refComplete
  function timeUpdateHandler(e) {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, durationTime: duration });
  }

  return (
    <div>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Song
        songCover={currentSong.cover}
        songArtist={currentSong.artist}
        songName={currentSong.name}
      />

      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setISPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}
export default App;
