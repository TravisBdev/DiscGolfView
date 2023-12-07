import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDiscDetails } from "../../store/discs";
import { useEffect } from "react";

import './DiscDetails.css'


const DiscDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const disc = useSelector(state => state.discs.allDiscs[id])

    useEffect(() => {
        dispatch(getDiscDetails(id))
    }, [dispatch, id])

    return (
        <div className="details-container">
            {disc && (
                <>
                    <section className="img-info-container">
                        <div className="img-container"><img src={disc.photoUrl} alt="" className="disc-details-img"/></div>
                        <aside className="disc-info">
                            <h1>{disc.name}</h1>
                            <p className="disc-details-description">{disc.description}</p>
                            <p className="disc-details-owner">owned by: {disc.owner.username}</p>
                        </aside>
                    </section>
                    <section className="disc-stats-container">
                        <div className="disc-stat"><p>Speed:</p> {disc.speed}</div>
                        <div className="disc-stat"><p>Glide:</p> {disc.glide}</div>
                        <div className="disc-stat"><p>Turn:</p> {disc.fade}</div>
                        <div className="disc-stat"><p>Fade:</p> {disc.turn}</div>
                    </section>
                </>
            )}
        </div>
    )

}
export default DiscDetails