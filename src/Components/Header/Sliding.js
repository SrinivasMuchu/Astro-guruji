import React from 'react'
import icon from '../../assets/customer support.svg'
import icon1 from '../../assets/refund.svg'
import icon2 from '../../assets/private.svg'
import icon3 from '../../assets/verifies.svg'
import icon4 from '../../assets/secure.svg'
import SolutionCard from './Solutioncard'
import './Sliding.css'



const dataList = [
  {
    title: "24 X 7 Customer Support",
    icon: icon,
  },
  {
    title: "100% Refund if Unsatisfied",
    icon: icon1,
  },
  {
    title: "Private & Confidential",
    icon: icon2,
  },
  {
    title: "Verified Astrologer",
    icon: icon3,
  },
  {
    title: "Secure Payment",
    icon: icon4,
  },

];
function Sliding() {
  return (
    <div>
      <div className='supportcardsheader' >
        {dataList.map((e, i) => (
          <SolutionCard
            title={e.title}
            icon={e.icon}
            key={i} />
        )

        )
        }</div>
    </div>
  )
}

export default Sliding