//Actions
const get_reviews = 'reviews/get_reviews'
const create_review = 'reviews/create_review'
const get_disc_reviews = 'reviews/get_disc_reviews'
const update_review = 'reviews/update_review'
const delete_review = 'reviews/delete_review'

//Action Creators
const getReviews = (reviews) => {
    return {
        type: get_reviews,
        reviews
    }
}

const getDiscReviews = (reviews) => {
    return {
        type: get_disc_reviews,
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

    if(res.ok) {
        const reviews = await res.json()
        dispatch(getReviews(reviews))
        return reviews
    }else {
        const errors = await res.json()
        return errors
    }
}

//Load all specific disc reviews
export const getAllDiscReviews = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/disc/${id}`)

    if(res.ok) {
        const reviews = await res.json()
        dispatch(getDiscReviews(reviews))
        return reviews
    }else {
        const errors = await res.json()
        return errors
    }
}

//Create a disc review
export const createDiscReview = (id, form) => async dispatch => {
    const res = await fetch(`/api/reviews/discs/${id}/new`, {
        method: 'POST',
        body: JSON.stringify(form)
    })

    if(res.ok) {
        const review = await res.json()
        dispatch(createReview(review))
        return review
    }else {
        const errors = await res.json()
        return errors.message
    }
}

//Update a disc review
export const updateDiscReview = (id, data) => async dispatch => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: data
    })

    if(res.ok) {
        const updatedReview = await res.json()
        dispatch(updateReview(updateReview))
        return updatedReview
    }else {
        const errors = await res.json()
        return errors
    }
}

//Delete a disc review
export const deleteAReview = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(deleteReview(id))
    }else {
        const errors = await res.json()
        return errors
    }
}


// Reviews Reducer
const initState = {allReviews: {}, discReviews: {}}

export default function reviewsReducer(state=initState, action) {
    let newState;
    switch (action.type) {
        case get_reviews:
            newState = {...state, allReviews: {}}
            action.reviews.forEach(review => newState.allReviews[review.id] = review)
            return newState

        case get_disc_reviews:
            newState = {...state, discReviews: {}}
            action.reviews.forEach(review => newState.discReviews[review.id] = review)
            return newState
        
        case create_review:
            newState = {...state, allReviews: {...state.allReviews}}
            newState.allReviews[action.review.id] = action.review
            return newState

        case update_review:
            newState = {...state, allReviews: {...state.allReviews}}
            newState.allReviews[action.review.id] = action.review
            return newState

        case delete_review:
            newState = {...state, discReviews: {...state.discReviews}}
            delete newState.discReviews[action.id]
            return newState

        default:
            return state
    }
}