import { IoSchoolSharp } from 'react-icons/io5'
import { RxCalendar } from 'react-icons/rx'

const Education = ({ data }) => {
  return (
    <div>
      <div className='flex items-center pl-4'>
        <IoSchoolSharp className='w-8 h-8 mr-4' />
        <h2 className='text-3xl text-gray-500 my-4'>Education</h2>
      </div>

      <div className='p-4'>
        <div>
          <div className='my-2 text-gray-600 text-xl'>{data.school}</div>
          <div className='my-2 flex items-center'>
            <RxCalendar className='w-4 h-4 mr-2' />
            <span>{data.school_year}</span>
          </div>
          <div className='my-2'>{data.school_desc}</div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      </div>
    </div>
  )
}

export default Education
