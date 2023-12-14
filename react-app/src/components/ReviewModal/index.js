import { useEffect, useState } from "react"
import { createDiscReview } from "../../store/reviews"

// adding a review to the details page
// need to add the add review button
// button opens this modal
// submitting form adds review to page

const ReviewModal = () => {

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

        if(!Object.keys(errors.length)) {
            dispatchEvent(createDiscReview(formData))
        }
    }


    const changeRatingToNumber = (e) => {
        const val = e.target.value === '' ? '' : parseInt(e.target.value, 10)
        setRating(val)
    }

    return (
        <div className="create-review-form">
            <form onSubmit={handleSubmit}>
                <div className="user-disc-review">
                    <label>Review</label>
                    <textarea placeholder="Leave a Review..." onChange={(e) => setReview(e.target.value)}></textarea>
                </div>

                <div className="user-disc-rating">
                    <label>Rating</label>
                    <input type="number" placeholder="Out of 10" onChange={changeRatingToNumber}/>
                </div>
                <button type="submit">Create Review</button>
            </form>
        </div>
    )
}
export default ReviewModal