import { Link } from "react-router-dom";
import './DiscTile.css'


const DiscTile = ({disc}) => {
    return (
        <Link to={`/discs/${disc.id}`} className='disc-details-link'>
            <div className="disc-tile">
                <div className="disc-img-container">
                    <img src={disc.photoUrl} alt="" className="disc-img" />
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

