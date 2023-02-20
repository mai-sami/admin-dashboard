import React from 'react'
import { HeaderTable, TableDataBody } from '../../../Mock/mock'
import { Flex } from '../../../Style/layout'
import {Tables, Td, Th, Tr } from './style'
import Edit from '../../../assets/edit.png'
import Delete from '../../../assets/delete.png'
import { Image } from '../../../Style/elments'
import { Link } from 'react-router-dom'

function Table() {
  return (
    <Tables>
      {HeaderTable.map(text => (
        <Th>{text}</Th>
      ))}
      {TableDataBody.map(text => (
        <Tr>
          <Td>{text.Report1}</Td>
          <Td>{text.Report2}</Td>
          <Td>{text.Report3}</Td>
          <Td>{text.Report4}</Td>
          <Td>{text.Report5}</Td>
          <Td>{text.Report6}</Td>
          <Td>
            <Flex>
              <Link to={'/create-report'}>
                <Image src={Edit} alt="Edit" />
              </Link>
              <Image src={Delete} alt="Delete" />
            </Flex>
          </Td>

        </Tr>
      ))}
    </Tables>

  )
}

export default Table
