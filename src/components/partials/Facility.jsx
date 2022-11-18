export default function Facility() {
    return (
        <div>
            <p className='text-xl italic font-semibold'>Manufacturing Facility</p>

            <div className="mt-2 text-center">
                <div className="text-left inline-block">
                    <p>Address:</p>
                    <p>- 4751 East Hunter, Anaheim, California 92807</p>
                    
                    <p>Facility Size</p>
                    <p>- 10,000 Sq. Feet</p>

                    <p>Capacity / Sales</p>
                    <p>- 5 Days per Week (Capacity for 2 Shifts)</p> 
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <img src='https://i.imgur.com/tL8jAam.png' className='facility' />
            </div>

        </div>
    )
}