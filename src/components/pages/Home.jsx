import GenOverview from '../partials/GenOverview'
import Services from '../partials/Services'
import SalesCustProfile from '../partials/SalesCustProfile'


export default function Home() {
    return (
        <div>
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


        </div>
    )
}