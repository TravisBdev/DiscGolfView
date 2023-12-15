import { useEffect, useState } from "react"
import { createDiscReview } from "../../store/reviews"
import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import './ReviewModal.css'


const ReviewModal = ({id}) => {
    const dispatch = useDispatch()
    const {closeModal} = useModal()
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [didSubmit, setDidSubmit] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}
        if(!review) errors.review = 'Review required'
        if(review.length < 15 || review.length > 1000) errors.review = 'Review must be between 15 and 1000 characters.'

        setErrors(errors)
    }, [review, rating, didSubmit])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setDidSubmit(true)

        const newRev = {
            review,
            rating
        }

        if(!Object.keys(errors).length) {
            await dispatch(createDiscReview(id, newRev))
            closeModal()
        }
    }


    const changeRatingToNumber = (e) => {
        const val = e.target.value === '' ? '' : parseInt(e.target.value, 10)
        setRating(val)
    }

    

    return (
        <div className="create-review-form">
            <form onSubmit={handleSubmit} className="user-review-form">
                <div className="user-disc-review">
                    <label>Review</label>
                    <textarea cols={30} rows={10} placeholder="Leave a Review..." onChange={(e) => setReview(e.target.value)}></textarea>
                    {didSubmit && errors.review && <p className="form-errors">{errors.review}</p>}
                </div>

                <div className="user-disc-rating">
                    <label>Rating</label>
                    <input type="number" placeholder="Out of 10" onChange={changeRatingToNumber}/>
                    {didSubmit && errors.rating && <p className="form-errors">{errors.rating}</p>}
                </div>
                <button type="submit" className="submit-review-btn">Create Review</button>
            </form>
        </div>
    )
}
export default ReviewModal