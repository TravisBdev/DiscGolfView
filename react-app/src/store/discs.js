//Actions
const get_discs = 'discs/get_Discs'
const get_one_disc = 'discs/get_One_Disc'
const get_user_discs = 'discs/get_user_discs'
const create_disc = 'discs/create_Disc'
const update_disc = 'discs/update_Disc'
const delete_disc = 'discs/delete_Disc'


//Action Creators
const getDiscs = (discs) => {
    return {
        type: get_discs,
        discs
    }
}

const getOneDisc = (disc) => {
    return {
        type: get_one_disc,
        disc
    }
}

const getUserDiscs = (discs) => {
    return {
        type: get_user_discs,
        discs
    }
}

const createDisc = (disc) => {
    return {
        type: create_disc,
        disc
    }
}

const updateDisc = (disc) => {
    return {
        type: update_disc,
        disc
    }
}

const deleteDisc = (id) => {
    return {
        type: delete_disc,
        id
    }
}


//Thunks

//load all discs
export const getAllDiscs = () => async dispatch => {
    const res = await fetch('/api/discs')

    if (res.ok) {
        const discs = await res.json()
        dispatch(getDiscs(discs))
        return discs
    }else {
        const errors = await res.json()
        return errors
    }
}

//Load one disc
export const getDiscDetails = (id) => async dispatch => {
    const res = await fetch(`/api/discs/${id}`)

    if(res.ok) {
        const disc = await res.json()
        dispatch(getOneDisc(disc))
        return disc
    }else {
        const errors = await res.json()
        return errors
    }
}

//Load all user discs
export const getAllUserDiscs = () => async dispatch => {
    const res = await fetch('/api/discs/current')

    if(res.ok) {
        const discs = await res.json()
        dispatch(getUserDiscs(discs))
        return discs
    }else {
        const errors = await res.json()
        return errors
    }
}

//Create a new disc
export const createADisc = (form) => async dispatch => {
    const res = await fetch('/api/discs/new', {
        method: 'POST',
        body: form
    })

    if(res.ok) {
        const {resPost} = await res.json()
        dispatch(createDisc(resPost))
        return resPost
    }else {
        const errors = await res.json()
        return errors
    }

}

//Update an existing disc
export const updateADisc = (id, data) => async dispatch => {
    const res = await fetch(`/api/discs/update/${id}`, {
        method: 'PUT',
        body: data
    })

    if(res.ok) {
        const updatedDisc = await res.json()
        dispatch(updateDisc(updatedDisc))
        return updatedDisc
    }else {
        const errors = await res.json()
        return errors
    }
}

//Delete a disc
export const deleteADisc = (id) => async dispatch => {
    const res = await fetch(`/api/discs/${id}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(deleteDisc(id))
    }else {
        const errors = await res.json()
        return errors
    }
}


//Discs Reducer
const initState = {allDiscs: {}, userDiscs: {}}

export default function discsReducer(state = initState, action) {
    let newState;
    switch (action.type) {
        case get_discs:
            newState = {...state, allDiscs: {}}
            action.discs.forEach(disc => newState.allDiscs[disc.id] = disc)
            return newState

        case get_one_disc:
            newState = {...state, allDiscs: {...state.allDiscs}}
            newState.allDiscs[action.disc.id] = action.disc
            return newState

        case create_disc:
            newState = {...state, allDiscs: {...state.allDiscs}}
            newState.allDiscs[action.disc.id] = action.disc
            return newState

        case update_disc:
            newState = {...state, allDiscs: {...state.allDiscs}}
            newState.allDiscs[action.disc.id] = action.disc
            return newState

        case get_user_discs:
            newState = {...state, userDiscs: {}}
            action.discs.forEach(disc => newState.userDiscs[disc.id] = disc)
            return newState

        case delete_disc:
             newState = {...state, allDiscs: {...state.allDiscs}}
             delete newState.allDiscs[action.discId]
             return newState

        default:
            return state

    }
}