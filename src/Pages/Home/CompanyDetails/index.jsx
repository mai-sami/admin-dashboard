import React from 'react';
import Button from '../../../Components/Buttons/Button';

import CompanyDetails from '../../../Components/CompanyDetails';

import {CompanyDetailsPage , ComapnyConatiner} from './style';

function Index() {
  return (
    <CompanyDetailsPage>
        <ComapnyConatiner>
          <Button name={"Edit company details"} background="black" color={"white"} />
          <CompanyDetails/>
        </ComapnyConatiner>
    </CompanyDetailsPage>
  )
}

export default Index;