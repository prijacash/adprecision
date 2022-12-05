export default function Materials() {
    return (
        <div>

            <div className="mt-2 flex justify-center text-center">
                <a href="#" className="block w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materials</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 
                        <ul>
                            <li className='mb-2'>
                                A&D Precision Machining works with a wide range of materials to meet the continued advancements of product design, form, and function. Our depth of material knowledge and quality inspection provides our customers with assurance whether we source directly from their supplier or ours.
                            </li>
                        </ul>                
                    </p>
                    
                    {/* insert table here */}
                    <div className='flex justify-center items-center'>
                        <table class='table-auto border-separate [border-spacing:1rem]'>
                            <thead className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <tr>
                                    <th>Type</th>
                                    <th>Grade and/or Specifications</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Aluminum</td>
                                    <td>All Aerospace, Marine and Structural Grades</td>
                                </tr>
                                <tr>
                                    <td>Steel</td>
                                    <td>All Grades</td>
                                </tr>
                                <tr>
                                    <td>Stainless Steel</td>
                                    <td>All Grades</td>
                                </tr>
                                <tr>
                                    <td>Carbon Steel</td>
                                    <td>All Grades</td>
                                </tr>
                                <tr>
                                    <td>Titanium</td>
                                    <td>All Aerospace, Marine and Structural Grades</td>
                                </tr>
                                <tr>
                                    <td>Inconel</td>
                                    <td>625, 718</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                    
                </a>
            </div>
        </div>
    )
}