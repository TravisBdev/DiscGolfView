import DiscIndex from '../DiscIndex.js'

import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <h1>Featured Discs</h1>
            <div className='index-container'>
                <DiscIndex/>
            </div>
        </div>
    )
}

export default LandingPage