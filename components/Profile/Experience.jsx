import { FaSuitcase } from 'react-icons/fa';
import { RxCalendar } from 'react-icons/rx';

const Experience = ({data}) => {
    return (
        <div>
            <div className='flex items-center pl-4'>
                <FaSuitcase className="w-8 h-8 mr-4" />
                <h2 className="text-3xl text-gray-500 my-4">Experience</h2>
            </div>

            <div className='p-4'>
                <div>
                    <div className='my-2 text-gray-600 text-xl'>{data.company}</div>
                    <div className='my-2 flex items-center'>
                        <RxCalendar className="w-4 h-4 mr-2" />
                        <span>{data.company_year}</span>
                    </div>
                    <div className='my-2'>{data.company_desc}</div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>

        </div>
    );
}

export default Experience;