import React from "react";
	import Playlist from "./Playlist";
	
	const PlaylistCollection = (props) => {
	  const {
	    playlists,
	    selectedPlaylistID,
	    setSelectedPlaylistID,
    setSelectedSongID,
	  } = props;
	
	  const playlistElements = playlists.map((playlist) => {
	    const { id, name } = playlist;
	    const isSelected = id === selectedPlaylistID;
	
	    let className;
	    if ((!selectedPlaylistID && playlist === playlists[0]) || isSelected) {
	      className = "selected";
	    }
	
	    const handleClick = () => {
	      setSelectedPlaylistID(id);
	      setSelectedSongID(null);
	    };
	
	    return (
	      <Playlist key={id} className={className} name={name} handleClick={handleClick} />
	    );
	  });
	
	  return (
	    <div className='playlist-collection'>
	      <h2>Playlists</h2>
	      <ul className='playlists'>{playlistElements}</ul>
	    </div>
	  );
	};
	
	export default PlaylistCollection;