/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
var index = 0;
function Player({
  setCurrentSong,
  songs,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) {
  //state

  const [play, setPause] = useState(faPlay);
  const [initialTime, changingTime] = useState();

  // const rangeRef = useRef(null);
  // var toggleIcon = faPlay;
  function toggleSong() {
    if (isPlaying) {
      setPause(faPlay);

      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setPause(faPause);
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function timeHandler(time) {
    // console.log(
    //   Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    // );
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
    // console.log(timeHandler(e.target.max));
  }

  function previousSong() {
    // console.log("left Clicked");
    if (index === 0) {
      index = 10;
      setCurrentSong(songs[index]);
      // console.log("left Clicked if");
    } else {
      index = index - 1;
      setCurrentSong(songs[index]);
      // console.log("left Clicked else");
    }

    // setNext()
  }

  function nextSong() {
    if (index === 10) {
      index = 0;
      setCurrentSong(songs[index]);
      console.log("right Clicked if");
    } else {
      index = index + 1;
      setCurrentSong(songs[index]);
      console.log("right Clicked else");
    }
    // console.log(songs.length);
    // console.log(index);
  }

  return (
    <div className="Player-Header">
      <div className="time-control">
        <p>{timeHandler(songInfo.currentTime)}</p>
        <input
          // ref={rangeRef}
          onChange={dragHandler}
          type="range"
          min={0}
          max={songInfo.durationTime || 0}
          value={songInfo.currentTime}
        ></input>
        <p>{timeHandler(songInfo.durationTime)}</p>
      </div>
      <div className="Play-Pause">
        {/* play pause icons */}
        <FontAwesomeIcon onClick={previousSong} icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={toggleSong}
          className="playIcon"
          icon={play}
          size="2x"
        />
        {/* <FontAwesomeIcon className="pauseIcon" icon={faPause} size="2x" /> */}
        <FontAwesomeIcon onClick={nextSong} icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
}

export default Player;
