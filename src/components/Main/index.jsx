/* import internal modules */
import { useState } from 'react'
import { useSelector } from 'react-redux'

/* import internal modules */
import DataGrid from '../DataGrid'
import SearchInput from '../SearchInput'
import { Paper, Tab, Tabs } from '@material-ui/core'

/** @description This is a functional component for layout
 *  @version 1.0.0
 *  @since 12/22/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MainComponent
 *  @returns {Component} Returns the layout of components
 **/

const MainComponent = () => {
  const [value, setValue] = useState(0)
  const searchUsersList = useSelector((state) => state.user.searchUsers)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <SearchInput />
      {searchUsersList.length > 0 && (
        <>
          <Paper square>
            <Tabs
              value={value}
              textColor='primary'
              onChange={handleChange}
              indicatorColor='primary'
              aria-label='tabs'
            >
              <Tab label='Datagrid' />
            </Tabs>
          </Paper>
          <DataGrid />
        </>
      )}
    </>
  )
}

export default MainComponent
