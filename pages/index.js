import ProfileForm from '@/components/ProfileForm/ProfileForm'
import { useEffect, useState } from 'react'
import statesByCountry from '@/utils/statesByCountry'
import districtsByStates from '@/utils/districtsByStates'

export default function Home ({
  fileChangedHandler,
  submitHandler,
  changeHandler
}) {
  useEffect(() => {
    const countryDropdown = document.getElementById('country')
    const stateDropdown = document.getElementById('state')
    const districtDropdown = document.getElementById('district')

    countryDropdown.addEventListener('change', () => {
      const selectedCountry = countryDropdown.value
      // console.log(selectedCountry);
      if (selectedCountry) {
        const states = statesByCountry[selectedCountry]

        // Clear existing options
        stateDropdown.innerHTML = 'Select State'

        // Add new options
        for (const state of states) {
          const option = document.createElement('option')
          option.value = state
          option.text = state
          stateDropdown.add(option)
        }

        stateDropdown.disabled = false
        districtDropdown.disabled = false
      } else {
        stateDropdown.innerHTML = ''
        districtDropdown.innerHTML = ''
        stateDropdown.disabled = true
        districtDropdown.disabled = true
      }
    })

    stateDropdown.addEventListener('change', () => {
      const selectedState = stateDropdown.value
      const districts = districtsByStates[selectedState]
      districtDropdown.innerHTML = 'Select District'
      for (const district of districts) {
        const option = document.createElement('option')
        option.value = district
        option.text = district
        districtDropdown.add(option)
        // alert("developed by rahul :)")
      }
    })
  }, [])

  return (
    <>
      <main className='m-4 md:m-20'>
        <ProfileForm
          fileChangedHandler={fileChangedHandler}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      </main>
    </>
  )
}
