import React from 'react';
import ColorMusicRow from '../ColorMusicRow';

const pianoRows = [
    { color: "#ff0000", musicFile: require('../../assets/exquisite.mp3') },
    { color: "#ffa500", musicFile: require('../../assets/clearly.mp3') },
    { color: "#ffff00", musicFile: require('../../assets/glitch-in-the-matrix.mp3') },
    { color: "#008000", musicFile: require('../../assets/intuition.mp3') },
    { color: "#0000ff", musicFile: require('../../assets/light.mp3') },
    { color: "#4b0082", musicFile: require('../../assets/sharp.mp3') },
    { color: "#ee82ee", musicFile: require('../../assets/when.mp3') }
  ];
    
  const ColorMusicRows = () => {
    return pianoRows.map(({color, musicFile}, index) => <ColorMusicRow color={color} key={index} musicFile={musicFile} />)
  }

  export default ColorMusicRows;