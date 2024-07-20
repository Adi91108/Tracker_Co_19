import React from 'react'
import TitleComp from '../components/TitlesTrakers/TitleComp'
import Table from '../components/table/Table'
import { Breadcrumbs, Link, Typography } from '@mui/material'


const Tracker2 = () => {
    return (
     
        <div>
         <div className="ml-1 mt-1">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Typography color="text.primary">Tracker2</Typography>
        </Breadcrumbs>
      </div>
        <TitleComp title='Data Table - Covid-19 Country Wise State'/>
        <Table/>
        </div>
      
    )
}

export default Tracker2

