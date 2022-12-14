import ContactForm from '../partials/ContactForm'
import ContactPartial from '../partials/ContactPartial'

export default function Contact() {
    return (
        <div className='mb-12 bg-fixed' style={{backgroundImage: `url(https://i.imgur.com/Oo409lC.png)`, backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'}}>

            {/* <p>Contact</p> */}

            <ContactPartial />

            <ContactForm />
        </div>
    )
}