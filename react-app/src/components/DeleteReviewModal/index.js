import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteAReview } from "../../store/reviews";

import './DeleteReviewModal.css'


const DeleteReviewModal = ({ id }) => {
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    const handleDelete = () => {
        dispatch(deleteAReview(id))
        closeModal()
    }

    const cancelDelete = () => {
        closeModal()
    }

    return (
        <div className="delete-review-modal-container">
            <div className="delete-review-confirm">
                <h2 id="confirm-delete-header">Confirm Delete</h2>
                <p id="are-you-sure">Are you sure you want to delete this review?</p>
            </div>
            <div className="delete-disc-btn-box">
                <button id="yes-delete" onClick={handleDelete}>Yes</button>
                <button id="no-keep" onClick={cancelDelete}>No</button>
            </div>
        </div>
    )
}
export default DeleteReviewModal