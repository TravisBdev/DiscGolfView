import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import DiscTile from '../DiscTile'
import { getAllDiscs } from '../../store/discs'

import './DiscIndex.css'


const DiscIndex = () => {
    const dispatch = useDispatch()
    const discs = useSelector(state => Object.values(state.discs.allDiscs))
    
    useEffect(() => {
        dispatch(getAllDiscs())
    }, [dispatch])
    
    return (
        <div className="disc-index">
            {discs.map(disc => <DiscTile key={disc.id} disc={disc} />)}
        </div>
    )
}

export default DiscIndex