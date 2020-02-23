import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Sound from 'react-native-sound';

const ColorMusicRow = ({color, musicFile}) => {
    const sound = new Sound(musicFile, (err) => console.log(err));

    const playSound = () => {
        sound.play();
    }

    return (
        <TouchableOpacity style={{backgroundColor: color, flex: 1 }} onPress={playSound}>
        <Text/>
        </TouchableOpacity>
);
}

export default ColorMusicRow;