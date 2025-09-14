// Entry.jsx
'use client'
import { useState, useRef } from "react";
import Facade from "./facade";
import Main from "./main";
import Story from "./story";
import Photos from "./photos";
import Venue from "./venue";
import Entourage from "./entourage";
import WedDetails from "./weddetails";
import Invitation from "./Invitation";
import RSVPform from "./rsvpform";
import Music from "./music";

export default function Entry() {
  const [isExpanded, setIsExpanded] = useState(true);
  const musicRef = useRef(null);

  return (
    <div className="max-w-screen overflow-x-hidden bg-repeat bg-center bg-[url('/50pattern.png')]">
      {/* Music is always mounted */}
      <Music ref={musicRef} />

          
         
     
    </div>
  );
}
