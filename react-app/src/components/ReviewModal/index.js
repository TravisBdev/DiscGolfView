import { useEffect, useState } from "react"
import { createDiscReview } from "../../store/reviews"
import './ReviewModal.css'
import { useDispatch } from "react-redux"


const ReviewModal = ({id}) => {
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}
        if(!review) errors.review = 'Review required'
        if(review.length < 15 || review.length > 1000) errors.review = 'Review must be between 15 and 1000 characters.'

        setErrors(errors)
    }, [review, rating])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('review', review)
        formData.append('rating', rating)

        if(!Object.keys(errors).length) {
            dispatch(createDiscReview(id, formData))
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
                    {errors.review && <p className="form-errors">{errors.review}</p>}
                </div>

                <div className="user-disc-rating">
                    <label>Rating</label>
                    <input type="number" placeholder="Out of 10" onChange={changeRatingToNumber}/>
                    {errors.rating && <p className="form-errors">{errors.rating}</p>}
                </div>
                <button type="submit" className="submit-review-btn">Create Review</button>
            </form>
        </div>
    )
}
export default ReviewModal