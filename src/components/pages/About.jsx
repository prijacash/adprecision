import Overview from '../partials/Overview'
import Facility from '../partials/Facility'
import Customers from '../partials/Customers'


export default function About() {
    return (
        <div className='mb-12'>

            <div className='mt-2'>
                <Overview />
            </div>

            <div className='mt-24'>
                <Facility />
            </div>

            <div className='mt-24'>
                <Customers />
            </div>

        </div>
    )
}