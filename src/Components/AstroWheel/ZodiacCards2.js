import React from 'react'
import icon from '../../assets/health.svg'
import icon1 from '../../assets/grah.svg'
import icon2 from '../../assets/birth.svg'
import icon3 from '../../assets/Family Care.svg'
import icon4 from '../../assets/luckynumber.svg'
import SolutionCards2 from './SolutionCards2'
import './ZodiacCards2.css'

const dataList = [
  {
    title: "Health Problems ",
    icon: icon,
  },
  {
    title: "Grah Shanti",
    icon: icon1,
  },
  {
    title: "Child Birth Issues",
    icon: icon2,
  },
  {
    title: "Husband Wife Problems",
    icon: icon3,
  },
  {
    title: "Lucky Number / Color",
    icon: icon4,
  },

];

function ZodiacCards2() {
  return (
    <div >
      <div className='supportcards' >
        {dataList.map((e, i) => (
          <SolutionCards2
            title={e.title}
            icon={e.icon}
            key={i} />
        )

        )
        }</div>
    </div>
  )
}

export default ZodiacCards2