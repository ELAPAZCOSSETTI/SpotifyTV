import Navbar from "./Components/Navbar/Navbar";
import Progress from "./Components/Progress/Progress";
import ImageSecondary from "./Components/SpotifyImage/ImageSecondary";



export default function Page() {
  return (
    <div className="relative h-screen w-full">
      <img src="spotifyImage.jpg" alt="Disc" className="absolute inset-0 h-full w-full object-cover" />
      <Navbar />
      <ImageSecondary/>
      <Progress/>
    </div>
  );
}
