import React from "react";
import songsData from "../data/songData";
import { clickedSong } from "../redux/actions/songsActions";
import { useDispatch } from "react-redux";

const SongList = () => {
    const dispatch = useDispatch();

    return(
        <div>
            {
                songsData.map((song) => (
                    <p key={song.id} onClick={()=>dispatch(clickedSong(song))}>{song.name}</p>
                ))
            }
        </div>
    )
}

export default SongList;