import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDiscDetails } from "../../store/discs";
import { getAllDiscReviews } from "../../store/reviews";
import { useEffect } from "react";
import {useModal} from '../../context/Modal'
import DiscDetailsModal from "../DiscDetailsModal";
import discFlightData from "./discData";
import ReviewTile from "../ReviewTile";
import ReviewModal from "../ReviewModal";

import './DiscDetails.css'



const DiscDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const disc = useSelector(state => state.discs.allDiscs[id])
    const discReviews = useSelector(state => Object.values(state.reviews.discReviews))
    const user = useSelector(state => state.session.user)

    const {setModalContent} = useModal()

    useEffect(() => {
        dispatch(getDiscDetails(id))
        dispatch(getAllDiscReviews(id))
    }, [dispatch, id])

    const showStats = (stat) => {
        const flightStats = discFlightData.find(obj => obj.name.toUpperCase() === stat.toUpperCase())
        setModalContent(<DiscDetailsModal data={flightStats}/>)
    }

    const openReviewModal = () => {
        setModalContent(<ReviewModal id={id}/>)
    }
    
    const sorted = discReviews.slice().sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

    const hasUserReviewed = discReviews.find(rev => rev.user_id === user.id)
    const noReviews = !discReviews.length



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
                        <div className="disc-stat" onClick={() => showStats('SPEED')}><p>Speed:</p> <div>{disc.speed}</div></div>
                        <div className="disc-stat" onClick={() => showStats('GLIDE')}><p>Glide:</p> <div>{disc.glide}</div></div>
                        <div className="disc-stat" onClick={() => showStats('TURN')}><p>Turn:</p> <div>{disc.turn}</div></div>
                        <div className="disc-stat" onClick={() => showStats('FADE')}><p>Fade:</p> <div>{disc.fade}</div></div>
                    </section>

                    <section className="user-reviews-divider">
                        <h2 className="disc-reviews-header">Reviews</h2>
                        {!hasUserReviewed && !noReviews && <button className="add-review-btn" onClick={openReviewModal}>Add Review</button>}
                    </section>

                    <section className="disc-reviews-container"> 
                    {noReviews && <button className="first-review-btn" onClick={openReviewModal}>First Review!</button>}
                        {discReviews && sorted.map(rev => (
                            <ReviewTile key={rev.id} review={rev} user={user}/>
                        ))}
                    </section>
                </>
            )}
        </div>
    )

}
export default DiscDetails