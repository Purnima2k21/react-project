import React, { useState } from "react";
	import PlaylistCollection from "./PlaylistCollection";
	import SongCollection from "./SongCollection";
	
	const App = (props) => {
	  const [selectedPlaylistID, setSelectedPlaylistID] = useState(null);
	  const [selectedSongID, setSelectedSongID] = useState(null);
	  const { playlists, songs } = props.data;

	  let currentPlaylist = playlists[0];
	  if (selectedPlaylistID) {
	    currentPlaylist = playlists.find((playlist) => playlist.id === selectedPlaylistID);
	  }
	
	  return (
	    <div className='react-music-player'>
	      <h1 className='title'>React Music Player</h1>
	      <PlaylistCollection
	        playlists={playlists}
	        selectedPlaylistID={selectedPlaylistID}
	        setSelectedPlaylistID={setSelectedPlaylistID}
	        setSelectedSongID={setSelectedSongID}
	      />
	      <SongCollection
	        songs={songs}
	        playlist={currentPlaylist}
	        selectedSongID={selectedSongID}
	        setSelectedSongID={setSelectedSongID}
	      />
	    </div>
	  );
	};
	
	export default App;