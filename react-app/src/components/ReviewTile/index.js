import './ReviewTile.css'

const ReviewTile = ({review}) => {

    return (
        <>
            <div className="review-tile">
                <h3 className="review-user">{review.user.username}</h3>
                <p className="user-review">{review.review}</p>
            </div>
        </>
    )
}
export default ReviewTile