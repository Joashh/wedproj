
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
    <div className="w-full  bg-repeat bg-center   bg-[url('/pattern3.png')]">
        <Main/>
        <Story/>
        <Photos/>
        <WedDetails/>
        <Venue/>
        <Entourage/>
        <Invitation/>
        <RSVPform/>
    </div>
  );
}
