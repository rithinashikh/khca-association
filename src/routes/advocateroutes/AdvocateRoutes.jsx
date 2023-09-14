import React from 'react'
import BlankPageAdv from '../../pages/AdvocateDashboard/BlankPageAdv';
import AdvocateDashboard from '../../pages/AdvocateDashboard/AdvocateDashboard';
import AdvocateLayouts from '../../layouts/advocatelayouts/AdvocateLayouts'
import Membership from '../../pages/AdvocateDashboard/Membership';
import Association from '../../pages/AdvocateDashboard/Association';
import AdvocateLogin from '../../pages/AdvocateDashboard/AdvocateLogin'
import AdvocateRegistraction from '../../pages/AdvocateDashboard/AdvocateRegistraction'
import { Routes,Route } from 'react-router-dom';
function AdvocateRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/login' element={<AdvocateLogin/>}/>
          <Route path='/register' element={<AdvocateRegistraction/>}/>

            <Route path='/advocate' element={<AdvocateLayouts/>}>
            <Route index element={<AdvocateDashboard/>}/>
            <Route path='association' element={<Association/>}/>
            <Route path='lawfirm' element={<BlankPageAdv/>}/>
            <Route path='membership' element={<Membership/>}/>
            </Route>

        </Routes>
      
    </div>
  )
}

export default AdvocateRoutes
