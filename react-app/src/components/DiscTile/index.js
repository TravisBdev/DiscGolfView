import { Link } from "react-router-dom";
import './DiscTile.css'


const DiscTile = ({disc}) => {
    return (
        <Link to={`/discs/${disc.id}`}>
            <div className="disc-tile">
                <div className="disc-pic-container">
                    <img src={disc.photo_url} alt="" className="disc-img" />
                </div>
                <div className="disc-details">
                    <h1>{disc.name}</h1>
                    <h2>{disc.category}</h2>
                    <h3>{disc.owner.username}</h3>
                    <div className="disc-stats">
                        <p>{disc.speed}</p>
                        <p>{disc.glide}</p>
                        <p>{disc.turn}</p>
                        <p>{disc.fade}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default DiscTile

