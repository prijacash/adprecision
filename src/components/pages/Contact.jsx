import ContactForm from '../partials/ContactForm'
import ContactPartial from '../partials/ContactPartial'

export default function Contact() {
    return (
        <div className='pb-12 bg-fixed' style={{backgroundImage: `url(https://i.imgur.com/Oo409lC.png)`, backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'}}>

            {/* <p>Contact</p> */}

            <div className='pt-6'>
                <ContactPartial />
            </div>

            <div className='mt-6'>
                <ContactForm />
            </div>

            <div className='mt-40 pb-20'>
            </div>
        </div>
    )
}