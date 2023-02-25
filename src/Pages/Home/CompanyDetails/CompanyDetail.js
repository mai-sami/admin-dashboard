import React from 'react';
import Button from '../../../Components/atoms/Buttons/Button';
 
import CompanyDetails from '../../../Components/organisms/CompanyDetails';

import {CompanyDetailsPage , ComapnyConatiner} from './style';

function CompanyDetail() {
  return (
    <CompanyDetailsPage>
        <ComapnyConatiner>
          <Button 
          name={"Edit company details"}
           background="black"
            color={"white"} 
            height={"unset"}
            />
          <CompanyDetails/>
        </ComapnyConatiner>
    </CompanyDetailsPage>
  )
}

export default CompanyDetail;