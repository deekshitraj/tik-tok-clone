import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";



function App() {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    db.collection("video").onSnapshot((snapshot) => 
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
 

  return (
    <div className="app">
      <div className="app_videos">
        {video.map( 
          ({ url, channel, description, song, likes, messages, shares }) => ( 
            <Video 
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />           
          )  
        )}
      </div>
    </div>
  );
}

export default App;
