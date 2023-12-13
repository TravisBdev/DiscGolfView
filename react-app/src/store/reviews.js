//Actions
const get_reviews = 'reviews/get_reviews'
// const 
const create_review = 'reviews/create_review'
const update_review = 'reviews/update_review'
const delete_review = 'reviews/delete_review'

//Action Creators
const getReviews = (reviews) => {
    return {
        type: get_reviews,
        reviews
    }
}

const createReview = (review) => {
    return {
        type: create_review,
        review
    }
}

const updateReview = (review) => {
    return {
        type: update_review,
        review
    }
}

const deleteReview = (id) => {
    return {
        type: delete_review,
        id
    }
}


//Thunks

//Load all reviews
export const getAllReviews = () => async dispatch => {
    const res = await fetch('/api/reviews')

    if (res.ok) {
        const reviews = await res.json()
        dispatch(getReviews(reviews))
    }else {
        const errors = await res.json()
        return errors
    }
}


