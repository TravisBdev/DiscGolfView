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
            {disc.description}
        </div>
    )

}
export default DiscDetails