import React from 'react'
import icon from '../../assets/love.svg'
import icon1 from '../../assets/marraige.svg'
import icon2 from '../../assets/job.svg'
import icon3 from '../../assets/money.svg'
import icon4 from '../../assets/education.svg'
import SolutionCard1 from './SoulutionCard1'
import './ZodiacCrds1.css'


const dataList = [
  {
    title: "Love Related Problem ",
    icon: icon,
  },
  {
    title: "Marriage Problem",
    icon: icon1,
  },
  {
    title: "Job/Business Problems",
    icon: icon2,
  },
  {
    title: "Money Problem",
    icon: icon3,
  },
  {
    title: "Education Problems",
    icon: icon4,
  },

];

function ZodiacCrds1() {
  return (
    <div >
      <div className='supportcards1' >
        {dataList.map((e, i) => (
          <SolutionCard1
            title={e.title}
            icon={e.icon}
            key={i} />
        )

        )
        }</div>
    </div>
  )
}

export default ZodiacCrds1