import Facility from '../partials/Facility'
import Customers from '../partials/Customers'
import CustomerRecognition from '../partials/EquipmentOverview'

export default function About() {
    return (
        <div>
            <p className='text-xl italic font-semibold underline mb-4'>About A&D Precision </p>

            <p className='mb-4'>A&D Precision Manufacturing, Inc was founded in 1976 and headquartered in Anaheim, California, is a<br></br> leading manufacturer of small and medium, complex structural components and sub-assemblies for<br></br> the commercial and military aircraft markets.</p>

            <ul>
                <li className='mb-2'>
                    A&D Precision Manufacturing is a high-performing supplier with world-class machining capability<br></br> producing a wide range of aluminum and hard metals structural components such as fittings,<br></br> floors-beams, frams, ribs, spars, and housings that are incorporated into virtually every aspect of<br></br> an aircraft, from the fuselage to the wing top
                </li>

                <li className='mb-2'>
                    The Company is an award-winning supplier to the world's most attractive programs, such as the<br></br> B737, B747, B777, F-18, and F-35 through a blue-chip list of OEM and Tier 1 custoers such as<br></br> Lockheed Martin and Northrop Grumman
                </li>

                <li className='mb-2'>
                    Minority Owned, Small Disadvantage Business
                </li>
            </ul>

            <div className='mt-24'>
                <Facility />
            </div>

            <div className='mt-24'>
                <Customers />
            </div>

        </div>
    )
}