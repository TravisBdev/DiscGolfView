import { Link } from "react-router-dom";
import './DiscTile.css'


const DiscTile = ({disc}) => {
    return (
        <Link to={`/${disc.id}`} className='disc-details-link'>
            <div className="disc-tile">
                <div className="disc-img-container">
                    <img src={disc.photoUrl} alt="" className="disc-img" />
                </div>
                <div className="disc-details">
                    <p className="disc-name">{disc.name}</p>
                    <p className="disc-category">{disc.category}</p>
                    {/* <p className="owner-name">Owner: {disc.owner.username}</p> */}
                    <div className="disc-stats">
                        <div>Speed<p>{disc.speed}</p></div>
                        <div>Glide<p>{disc.glide}</p></div>
                        <div>Turn<p>{disc.turn}</p></div>
                        <div>Fade<p>{disc.fade}</p></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default DiscTile

