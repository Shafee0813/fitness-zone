import React from 'react'
import Card from './Card'
import { plansDetails } from '../constants'

const Plans = () => {
  return (
    <div class="flex flex-col sm:flex-row flex-wrap justify-center">
      {plansDetails.map((plan)=> {
        return <div class="flex justify-center w-full md:w-1/2  lg:w-1/3">
        <Card title={plan.header} price={plan.price} qualities={plan.qualities}/>
      </div>
      })}
    </div>
  )
}

export default Plans