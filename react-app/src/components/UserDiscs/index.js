import { useDispatch, useSelector } from "react-redux";
import DiscTile from "../DiscTile";
import { useEffect } from "react";
import { getAllUserDiscs } from "../../store/discs";

import './UserDiscs.css'
const UserDiscs = () => {
    
    const dispatch = useDispatch()
    const discs = useSelector(state => Object.values(state.discs.userDiscs))
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllUserDiscs())
    }, [dispatch])

    return (
        <div className="user-discs-container">
            <h1>Discs owned by: {user.username}</h1>
            <div className="discs-container">
                {discs.map((disc) => (
                    <DiscTile key={disc.id} disc={disc}/>
                ))}
            </div>
        </div>
    )
}

export default UserDiscs