import React from 'react';

import { CompanyDetails, SingleDetail } from './style';

import {CompanyDetailsData} from '../../Mock/mock';

function index() {
  return (
    <CompanyDetails>
      <div id="AllDetails">
          {CompanyDetailsData?.map((item,index)=>
          <SingleDetail key={index}>
              <span>{item.title}</span>
              <span id="loremDetail">{item.info}</span>
          </SingleDetail>
          )}
      </div>  
    </CompanyDetails>
  )
}

export default index;