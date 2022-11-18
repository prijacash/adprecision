export default function Facility() {
    return (
        <div>
            <p className='text-xl italic font-semibold underline'>Manufacturing Facility</p>

            <div className="mt-2 text-center">
                <div className="text-left inline-block">
                    <p className='text-xl'>Address:</p>
                    <p>- 4751 East Hunter, Anaheim, California 92807</p>
                    
                    <p className='text-xl mt-2'>Facility Size</p>
                    <p>- 10,000 Sq. Feet</p>

                    <p className='text-xl mt-2'>Capacity / Sales</p>
                    <p>- 5 Days per Week (Capacity for 2 Shifts)</p> 
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <img src='https://i.imgur.com/tL8jAam.png' className='facility' />
            </div>

        </div>
    )
}