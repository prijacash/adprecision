import GeneralServices from '../partials/GeneralServices'
import Equipment from '../partials/Equipment'
import Materials from '../partials/Materials'
import SampleProducts from '../partials/SampleProducts'

export default function Capabilities() {
    return (
        <div className='pb-12 bg-fixed' style={{backgroundImage: `url(https://i.imgur.com/emCowHN.png)`, backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'}}>

            <div className='pt-6'>
                <GeneralServices />
            </div>

            <div className='mt-6'>
                <Equipment />
            </div>

            <div className='mt-6'>
                <Materials />
            </div>

            {/* <div className='mt-6'>
                <SampleProducts />
            </div> */}
        </div>
    )
}