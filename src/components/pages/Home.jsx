import GenOverview from '../partials/GenOverview'
import Services from '../partials/Services'
import Facility from '../partials/Facility'
import SalesCustProfile from '../partials/SalesCustProfile'
import CustomerApprovals from '../partials/CustomerApprovals'

export default function Home() {
    return (
        <div>
            <p>Home Page</p>

            <div className='mt-6'>
                <GenOverview />
            </div>

            <div className='mt-24 flex justify-center gap-36 items-center'>
                <Services />
                <SalesCustProfile />
            </div>

            {/* <div className='mt-6'>
                <SalesCustProfile />
            </div> */}

            <div className='mt-24'>
                <Facility />
            </div>

            <div className='mt-24'>
                <CustomerApprovals />
            </div>
        </div>
    )
}