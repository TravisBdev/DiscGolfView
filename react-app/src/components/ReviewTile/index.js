import DeleteReviewModal from '../DeleteReviewModal'
import { useModal } from '../../context/Modal'
import './ReviewTile.css'

const ReviewTile = ({review, user}) => {
    const validateUser = review.user_id === user.id
    const {setModalContent} = useModal()

    const openDeleteModal = () => {
        setModalContent(<DeleteReviewModal id={review.id}/>)
    }

    return (
        <>
            <div className="review-tile">
                <h3 className="review-user">{review.user.username}</h3>
                <p className="user-review">{review.review}</p>
                {validateUser &&
                    <button className='delete-review-btn' onClick={openDeleteModal}>Delete</button> 
                }
            </div>
        </>
    )
}
export default ReviewTile