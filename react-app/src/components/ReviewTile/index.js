
const ReviewTile = ({review}) => {
    return (
        <div className="review-tile">
            <h2 className="review-user">{review.user.username}</h2>
            <p className="user-review">{review.review}</p>
        </div>
    )
}
export default ReviewTile