import { useDispatch } from "react-redux";
import { deleteADisc } from "../../store/discs";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";

import './DeleteDiscModal.css'


const DeleteDiscModal = ({ id }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal} = useModal()

    const handleDelete = () => {
        dispatch(deleteADisc(id))
        history.push('/current')
        closeModal()
    }

    const cancelDelete = () => {
        closeModal()
    }

    return (
        <div className="modal-container">
            <div className="delete-confirm">
                <h2 id="confirm-header">Confirm Delete</h2>
                <p id="you-sure">Are you sure you want to delete this disc?</p>
            </div>
            <div className="delete-disc-btn-box">
                <button id="yes" onClick={handleDelete}>Yes</button>
                <button id="no" onClick={cancelDelete}>No</button>
            </div>
        </div>
    )
}
export default DeleteDiscModal