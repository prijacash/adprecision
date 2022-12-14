export default function ContactPartial() {
    return (
        <div>
            <div className=" flex justify-center text-center">
                <a href="#" className="block w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-70">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h5>
                    <p className="font-normal text-gray-900 dark:text-white"> 
                    <div className="text-center justify-center flex space-x-20 mt-6">
                        <div className="text-left inline-block">
                            <p>Sales and Customer Profile </p>
                            <p>Aerospace & Defense Primes </p>
                            <p>1st and 2nd Tier Aerospace </p>
                            <p>References Available Upon Request</p>
                        </div>

                        <div className="text-left inline-block">
                            <p>Sales Contact </p>
                            <p>714-779-2714 </p>
                            <p>pvo@adprecisionmfg.com </p>
                            <p>4751 E. Hunter, Anaheim, California</p>
                        </div>
                    </div>              
                    </p>
                </a>
            </div>
        </div>
    )
}