    import React from "react";
	
	const Song = (props) => {
	  const { song, className, handleClick } = props;
	
	  return (
	    <li className={className} onClick={handleClick}>
	      {song.name} - {song.artist}
	    </li>
	  );
	};
	
	export default Song;