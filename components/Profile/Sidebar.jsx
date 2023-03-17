import { FaSuitcase, FaHome, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { BsTelephoneFill, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Dbutton from './Components/Dbutton'

const Sidebar = ({ data, file }) => {
  return (
    <div>
      <div className=''>
        <img
          className='rounded-full w-36 h-36 m-auto'
          src={file}
          alt='profile image'
        />
        <div className='text-center my-4 text-4xl'>
          {data.first_name + ' ' + data.last_name}
        </div>
      </div>

      <div className='text-gray-500 mt-2 ml-2'>
        <div>
          {/* socials */}
          <div className='flex justify-center mt-4'>
            <a href={data.github_url} target='_blank' rel='noreferrer'>
              <FaGithub className='w-8 h-8  mr-4' />
            </a>
            <a href={data.linkedin_url} target='_blank' rel='noreferrer'>
              <BsLinkedin className='w-8 h-8  mr-4' />
            </a>
            <a href={data.twitter_url} target='_blank' rel='noreferrer'>
              <BsTwitter className='w-8 h-8 mr-2' />
            </a>
          </div>
        </div>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <div className='mt-4'>
          <ul className=''>
            <li className='flex items-center mt-2'>
              <FaSuitcase className='mr-4' />
              <span>{data.headline}</span>
            </li>
            <li className='flex items-center mt-2'>
              <FaHome className='mr-4' />
              <span>{`${data.district}, ${data.state}, ${data.country}, ${data.pincode}`}</span>
            </li>
            <li className='flex items-center mt-2'>
              <IoMdMail className='mr-4' />
              <span>{data.email}</span>
            </li>
            <li className='flex items-center mt-2'>
              <BsTelephoneFill className='mr-4' />
              <span>{data.phone}</span>
            </li>
          </ul>
        </div>
        <div>
          {/* Skills */}
          <div className='mt-4'>
            <div className='text-xl font-semibold'>Skills</div>
            <div className='flex flex-wrap mt-2'>
              {data.skills &&
                data.skills.map((skill, index) => {
                  return <Dbutton key={index} name={skill} />
                })}
            </div>
          </div>
        </div>
        <div>
          {/* Languages */}
          <div className='mt-4'>
            <div className='text-xl font-semibold'>Languages</div>
            <div className='flex flex-wrap mt-2'>
              {data.languages &&
                data.languages.map((language, index) => {
                  return <Dbutton key={index} name={language} />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
