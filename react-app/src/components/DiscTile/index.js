import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './DiscTile.css'


const DiscTile = ({disc}) => {
    const location = useLocation()
    return (
        <div className="tile-wrapper">
            <Link to={`/${disc.id}`} className='disc-details-link'>
            <div className="disc-tile">
                <div className="disc-img-container" >
                    <img src={disc.photoUrl} alt="" className="disc-img" />
                </div>
                <div className="disc-details">
                    <p className="disc-name">{disc.name}</p>
                    <p className="disc-category">{disc.category}</p>
                    <div className="disc-stats">
                        <div>Speed<p>{disc.speed}</p></div>
                        <div>Glide<p>{disc.glide}</p></div>
                        <div>Turn<p>{disc.turn}</p></div>
                        <div>Fade<p>{disc.fade}</p></div>
                    </div>
                </div>
            </div>
            </Link>        
            {location.pathname === '/current' &&
                    <div className="manage-btns">
                        <button className="update">Update</button>
                        <button className="delete">Delete</button>
                    </div>
                }
        </div>
    )
}
export default DiscTile

