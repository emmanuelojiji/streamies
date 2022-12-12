import "./ArtistCard.scss";
import album from "../media/tems-album.webp";

const ArtistCard = ({ category, projectName, artist }) => {
  return (
    <div className="ArtistCard">
      <div className="artist-card-container">
        <h1 className="h-medium">{category}</h1>
        <img src={album} />
        <h2>{projectName}</h2>
        <h3>{artist}</h3>
      </div>

      <div className="artist-card-container">
        <h1 className="h-medium">Nominees</h1>
        <div className="nominee-container">
          <div>
            <img src={album} />
            <h3>Album Name</h3>
            <h3>Artist</h3>
          </div>
          <div>
            <img src={album} />
            <h3>Album Name</h3>
            <h3>Artist</h3>
          </div>
          <div>
            <img src={album} />
            <h3>Album Name</h3>
            <h3>Artist</h3>
          </div>
          <div>
            <img src={album} />
            <h3>Album Name</h3>
            <h3>Artist</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
