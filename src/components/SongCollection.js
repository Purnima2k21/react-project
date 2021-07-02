import React from "react";
import Song from "./Song";
	
	const SongCollection = (props) => {
	  const { songs, playlist, selectedSongID, setSelectedSongID } = props;
	
	  const currentSongs = songs.filter((song) => playlist.songs.includes(song.id));
      const songElements = currentSongs.map((song) => {
	    const isSelected = song.id === selectedSongID;
	
	    let className;
	    if ((!selectedSongID && song.id === playlist.songs[0]) || isSelected) {
	      className = "selected";
	    }
	
	    const handleClick = () => {
	      setSelectedSongID(song.id);
	    };
	
	    return (
	      <Song key={song.id} song={song} className={className} handleClick={handleClick} />
	    );
	  });
	
	  return (
	    <div className='song-collection'>
	      <h2>Songs</h2>
	      <ul className='songs'>{songElements}</ul>
	    </div>
	  );
	};
	
	export default SongCollection;