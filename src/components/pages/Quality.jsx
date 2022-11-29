import Certifications from "../partials/Certifications";
import QualityOverview from "../partials/QualityOverview";

export default function Quality() {
    return (
        <div className='mb-12'>

            <div className='mt-6'>
                <QualityOverview />
            </div>

            <div className='mt-6'>
                <Certifications />
            </div>
            
        </div>

    )
}