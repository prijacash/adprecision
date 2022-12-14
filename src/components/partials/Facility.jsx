export default function Facility() {
    return (
        <div>
            <div className="mt-1 flex justify-center text-center">
                <a href="#" className="block w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-70">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manufacturing Facility</h5>
                    
                    <div className="mt-2 text-center">
                        <div className="text-left inline-block">
                            <p className='text-xl'>Address: 4751 East Hunter, Anaheim, California 92807</p> 
                            <p className='text-xl mt-1'>Facility Size: 10,000 Sq. Feet</p>
                            <p className='text-xl mt-1'>Capacity / Sales: 5 Days per Week (Capacity for 2 Shifts)</p> 
                        </div>
                        <div className='flex justify-center mt-6'>
                            <img src='https://i.imgur.com/tL8jAam.png' className='facility' />
                        </div>
                    </div>
                </a>
            </div>

            <div className="mt-6 flex justify-center text-center">
                <a href="#" className="block w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-70">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Highlights</h5>
                    
                    <div className="mt-2 text-center">
                        <div className="text-left inline-block">
                            <p className='text-xl'>Multi-axis Machining</p> 
                            <p className='text-xl mt-1'>High Speed Machining up to 12,000 RPM</p>
                            <p className='text-xl mt-1'>Machining of Hard Metal, Titanium, Inconel and P/H</p> 
                            <p className='text-xl mt-1'>Harden Stainless Steel and High Nickel-Based Alloys</p> 
                            <p className='text-xl mt-1'>Turn-Key Part Development</p> 
                            <p className='text-xl mt-1'>Focus on On-Time Delivery</p> 
                            <p className='text-xl mt-1'>Rapid Prototyping</p> 
                            <p className='text-xl mt-1'>Approved Supplier for "Fracture Critical Part"</p> 
                            <p className='text-xl mt-1'>Manufacturing for Northrop Grumman and Lockheed Martin</p> 
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}