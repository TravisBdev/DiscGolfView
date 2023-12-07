import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDiscDetails } from "../../store/discs";
import { useEffect } from "react";
import {useModal} from '../../context/Modal'
import DiscDetailsModal from "../DiscDetailsModal";
import discFlightData from "./discData";

import './DiscDetails.css'



const DiscDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const disc = useSelector(state => state.discs.allDiscs[id])
    const {setModalContent} = useModal()

    useEffect(() => {
        dispatch(getDiscDetails(id))
    }, [dispatch, id])

    const showStats = (stat) => {
        const flightDetail = discFlightData.find(obj => obj.name.toUpperCase() === stat.toUpperCase())
        setModalContent(<DiscDetailsModal data={flightDetail}/>)
    }

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
                </>
            )}
        </div>
    )

}
export default DiscDetails