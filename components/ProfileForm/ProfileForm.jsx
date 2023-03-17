import { FaUserCircle, FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PIForm from './PIForm'
import { Tabs } from 'flowbite-react'

const ProfileForm = ({ fileChangedHandler, submitHandler, changeHandler }) => {
  return (
    <>
      <form onSubmit={submitHandler} autoComplete='off'>
        <div className=' p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Tabs.Group aria-label='Tabs with icons' style='underline'>
            <Tabs.Item active title='Personal Information' icon={FaUserCircle}>
              <PIForm
                onChange={changeHandler}
                fileChangedHandler={fileChangedHandler}
              />
            </Tabs.Item>
            <Tabs.Item title='Education' icon={FaUserGraduate}>
              <EducationForm onChange={changeHandler} />
            </Tabs.Item>
            <Tabs.Item title='Work Experience' icon={MdWork}>
              <ExperienceForm onChange={changeHandler} />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </form>
    </>
  )
}

export default ProfileForm
