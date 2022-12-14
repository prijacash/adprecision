// import GenOverview from '../partials/GenOverview'
// import Services from '../partials/Services'
// import SalesCustProfile from '../partials/SalesCustProfile'
import Hero from '../partials/Hero'


export default function Home() {
    return (
        <div className='pb-12'>
            <div className=''>
                <Hero />
            </div>

            <div className='mt-6'>
                {/* <GenOverview /> */}
            </div>

            <div className='mt-24 flex justify-center gap-36 items-center'>
                {/* <Services /> */}
                {/* <SalesCustProfile /> */}
            </div>

            {/* <div className='mt-6'>
                <SalesCustProfile />
            </div> */}


        </div>
    )
}