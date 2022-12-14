import Certifications from "../partials/Certifications";
import QualityOverview from "../partials/QualityOverview";

export default function Quality() {
    return (
        <div className='mb-12' style={{backgroundImage: `url(https://i.imgur.com/EkL0WCQ.png)`, backgroundSize: 'cover', backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'}}>

            <div className=''>
                <QualityOverview />
            </div>

            <div className='mt-6'>
                <Certifications />
            </div>
            
        </div>

    )
}