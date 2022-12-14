import Overview from '../partials/Overview'
import Facility from '../partials/Facility'
import Customers from '../partials/Customers'


export default function About() {
    return (
        <div className='mb-12' style={{backgroundImage: `url(https://i.imgur.com/FxUfmMy.png)`, backgroundSize: 'cover', backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'}}>

            <div className=''>
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