/* import internal modules */
import Main from '../components/Main'
import MiniDrawer from '../components/common/Drawer'
import Copyright from '../components/common/Copyright'

/** @description This is a functional component main view
 *  @version 1.0.0
 *  @since 12/22/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MainView
 *  @returns {Component} Returns the main view
 **/

const MainView = () => {
  return (
    <MiniDrawer>
      <Main />
      <Copyright />
    </MiniDrawer>
  )
}

export default MainView
