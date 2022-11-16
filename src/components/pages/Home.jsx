import GenOverview from '../partials/GenOverview'
import Services from '../partials/Services'
import Facility from '../partials/Facility'
import SalesCustProfile from '../partials/SalesCustProfile'

export default function Home() {
    return (
        <div>
            <p>Home Page</p>

            <div className='mt-6'>
                <GenOverview />
            </div>

            <div className='mt-6'>
                <Services />
            </div>

            <div className='mt-6'>
                <SalesCustProfile />
            </div>

            <div className='mt-6'>
                <Facility />
            </div>
        </div>
    )
}