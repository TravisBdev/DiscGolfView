import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

import DiscTile from '../DiscTile'
import { getAllDiscs } from '../../store/discs'

import './LandingPage.css'

const LandingPage = () => {
    console.log('rendering landing page')
    const dispatch = useDispatch()
    const discs = useSelector(state => Object.values(state.discs.allDiscs))
    console.log(discs)

    useEffect(() => {
        console.log('dispatching discs')
        dispatch(getAllDiscs())
    }, [dispatch])

    return (
        <div className="disc-index">
            {discs.map(disc => <DiscTile key={disc.id} disc={disc} />)}
        </div>
    )
}

export default LandingPage