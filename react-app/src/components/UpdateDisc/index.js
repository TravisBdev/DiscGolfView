import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscDetails, updateADisc } from "../../store/discs";
import { useEffect } from "react";

const UpdateDisc = () => {
    const {id} = useParams()
    const disc = useSelector(state => state.discs.allDiscs[id])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDiscDetails(id))
    }, [dispatch, id])

    return (
        <div>
            
        </div>
    )
}
export default UpdateDisc