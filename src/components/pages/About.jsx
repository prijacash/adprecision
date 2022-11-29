import Overview from '../partials/Overview'
import Facility from '../partials/Facility'
import Customers from '../partials/Customers'


export default function About() {
    return (
        <div className='mb-12'>

            <div className='mt-6'>
                <Overview />
            </div>

            <div className='mt-6'>
                <Facility />
            </div>

            <div className='mt-6'>
                <Customers />
            </div>

        </div>
    )
}