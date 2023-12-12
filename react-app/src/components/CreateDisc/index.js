import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createADisc } from "../../store/discs";

import './CreateDisc.css'

const CreateDisc = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [speed, setSpeed] = useState('')
    const [glide, setGlide] = useState('')
    const [turn, setTurn] = useState('')
    const [fade, setFade] = useState('')
    const [image, setImage] = useState('')
    const [imageLoading, setImageLoading] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}
        if(!name) errors.name = 'Name is required.'
        if(name.length > 20 || name.length < 2) errors.name = 'Name must be between 2 and 20 characters.'
        if(!description) errors.description = 'Description is required.'
        if(description.length < 10 || description.length > 1000) errors.description = 'Description must be between 10 and 1000 characters.'
        if(!category) errors.category = 'Category is required'
        if(speed === undefined || speed === '' || isNaN(speed)) errors.speed = 'Speed is required.'
        if(speed < 1 || speed > 14) errors.speed = 'Speed must be between 1 and 14.'
        if(glide === undefined || glide === '' || isNaN(glide)) errors.glide = 'Glide is required.'
        if(glide < 1 || glide > 7) errors.glide = 'Glide must be between 1 and 7.'
        if(turn === undefined || turn === '' || isNaN(turn)) errors.turn = 'Turn is required'
        if(turn < -5 || turn > 5) errors.turn = 'Turn must be between -5 and 5.'
        if(fade === undefined || fade === '' || isNaN(fade)) errors.fade = 'Fade is required'
        if(fade < 0 || fade > 5) errors.fade = 'Fade must be between 0 and 5.'
        if(!image) errors.photo_url = 'Image is required'

        setErrors(errors)
        return errors
    }, [name, description, category, speed, glide, turn, fade, image])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const errorsList = checkErrors()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('speed', speed)
        formData.append('glide', glide)
        formData.append('turn', turn)
        formData.append('fade', fade)
        formData.append('photo_url', image)

        if(!Object.keys(errors).length) {
            const disc = await dispatch(createADisc(formData))
            setImageLoading(true)

            if(disc){
                history.push(`/`)
            }
        }
    }

    const changeSpeedToNumber = (e) => {
        const val = parseInt(e.target.value, 10)
        setSpeed(val)
    }
    const changeGlideToNumber = (e) => {
        const val = parseInt(e.target.value, 10)
        setGlide(val)
    }
    const changeTurnToNumber = (e) => {
        const val = parseInt(e.target.value, 10)
        setTurn(val)
    }
    const changeFadeToNumber = (e) => {
        const val = parseInt(e.target.value, 10)
        setFade(val)
    }

    return (
            <div className="form-container">
                <h1>Create A New Disc</h1>
                <form className="new-disc-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="name-box form-box">
                        <label>Name</label>
                        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        {errors.name && (<p className="form-errors">{errors.name}</p>)}
                    </div>

                    <div className="category-box form-box">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a Category</option>
                            <option value="Driver">Distance Driver</option>
                            <option value="Fairway">Fairway Driver</option>
                            <option value="Mid Range">Mid Range</option>
                            <option value="Putt & Approach">Putt & Approach</option>
                        </select>
                        {errors.category && (<p className="form-errors">{errors.category}</p>)}
                    </div>

                    <div className="speed-box form-box">
                        <label>Speed</label>
                        <input type="number" value={speed} placeholder="Speed" onChange={changeSpeedToNumber} />
                        {errors.speed && (<p className="form-errors">{errors.speed}</p>)}
                    </div>

                    <div className="glide-box form-box">
                        <label>Glide</label>
                        <input type="number" value={glide} placeholder="Glide" onChange={changeGlideToNumber} />
                        {errors.glide && (<p className="form-errors">{errors.glide}</p>)}
                    </div>

                    <div className="turn-box form-box">
                        <label>Turn</label>
                        <input type="number" value={turn} placeholder="Turn" onChange={changeTurnToNumber} />
                        {errors.turn && (<p className="form-errors">{errors.turn}</p>)}
                    </div>

                    <div className="fade-box form-box">
                        <label>Fade</label>
                        <input type="number" value={fade} placeholder="Fade" onChange={changeFadeToNumber} />
                        {errors.fade && (<p className="form-errors">{errors.fade}</p>)}
                    </div>

                    <div className="description-box form-box">
                        <label>Description</label>
                        <textarea type="text" value={description} cols={40} rows={10} placeholder="Description must be between 10 and 1000 characters..." onChange={(e) => setDescription(e.target.value)} />
                        {errors.description && (<p className="form-errors">{errors.description}</p>)}
                    </div>

                    <div className="image-box form-box">
                        <label>Upload Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                        {errors.image && (<p className="form-errors">{errors.image}</p>)}
                        {imageLoading && <p>Loading Image...</p>}
                    </div>

                    <div className="submit-box form-box">
                        <button 
                            disabled = {Object.keys(errors).length > 0}
                            type="submit">
                                Create Disc
                        </button>
                    </div>
                </form>
            </div>
    )
}
export default CreateDisc

