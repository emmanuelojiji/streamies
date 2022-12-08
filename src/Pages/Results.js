import ArtistCard from "../Components/ArtistCard";
import "./Results.scss";
import Logo from "../Components/Logo";

const Results = () => {
  return (
    <div className="Results">
      <Logo />
      <div className="slide-container">
        <ArtistCard
          category="Album of the Year"
          projectName="Essence"
          artist="Tems"
        />
        <ArtistCard />
        <ArtistCard />
      </div>
    </div>
  );
};

export default Results;
