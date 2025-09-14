
import Entourage from "./components/entourage";
import Invitation from "./components/Invitation";
import Main from "./components/main";
import Photos from "./components/photos";
import RSVP from "./components/rsvp";
import RSVPform from "./components/rsvpform";
import Story from "./components/story";
import Venue from "./components/venue";
import WedDetails from "./components/weddetails";


export default function Home() {

  
  return (
    <div className="max-w-screen overflow-x-hidden bg-repeat bg-center   bg-[url('/50pattern.png')]">
        <Main/>
        <Story/>
        <Photos/>
        <Venue/>
        <Entourage/>
        <WedDetails/>
        <Invitation/>
        <RSVPform/>
    </div>
  );
}
