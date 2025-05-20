import Navbar from "./Components/Navbar/Navbar";
import Progress from "./Components/Progress/Progress";
import Player from "./Components/Player/Player";
import ImageSpotify from "./Components/SpotifyImage/Image";
import ImageSecondary from "./Components/SpotifyImage/ImageSecondary";



export default function Page() {
  return (
    <div className="relative h-screen">
      <ImageSpotify/>
      <Navbar />
      <ImageSecondary/>
      <Progress/>
      <Player/>
    </div>
  );
}
