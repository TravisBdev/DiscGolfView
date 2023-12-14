import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllReviews } from '../../store/reviews'
import ReviewTile from '../ReviewTile'

import './ReviewIndex.css'




const ReviewIndex = () => {
    const dispatch = useDispatch()
    const reviews = useSelector(state => Object.values(state.reviews.allReviews))

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])
    
    return (
        <div className='review-index-container'>
            {reviews.map(review => (
                <ReviewTile key={review.id} review={review}/>
            ))}
        </div>
    )
}
export default ReviewIndex