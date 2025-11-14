import React from 'react'
import Personal_Info from './Form_Pages/Personal_Info.jsx'
import { useState } from 'react'
import Educational_Info from './Form_Pages/Educational_Info.jsx'
import Professional_info from './Form_Pages/Professional_info.jsx'
import Identity_Info from './Form_Pages/Identity_Info.jsx'
import Review from './Form_Pages/Review.jsx'

const Form = () => {
  const [page,setPage] = useState(0)
  const page_no = [
    <Personal_Info/>,
    <Educational_Info/>,
    <Professional_info/>,
    <Identity_Info/>,
    <Review/>
  ]
  return (
    <div>
      {page_no[page]}
    </div>
  )
}

export default Form
