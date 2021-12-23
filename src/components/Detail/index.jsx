/* import external modules */
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core'

/* import internal modules */
import { useStyles } from './styles'

/** @description This is a functional component for detail
 *  @version 1.0.0
 *  @since 12/22/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DetailComponent
 *  @returns {Component} Returns the detail component
 **/

const DetailComponent = ({ informationUser }) => {
  const classes = useStyles()

  const renderDetail = (
    <>
      <ListItem divider>
        <Avatar alt='avatar' src={`${informationUser?.avatar_url}`} />
        <ListItemText secondary={`Avatar`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Type 🡢`} />
        <ListItemText primary={`${informationUser?.type}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Url 🡢`} />
        <ListItemText primary={`${informationUser?.url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`ID 🡢`} />
        <ListItemText primary={`${informationUser?.id}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Login 🡢`} />
        <ListItemText primary={`${informationUser?.login}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Followers 🡢`} />
        <ListItemText primary={`${informationUser?.followers_url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Html 🡢`} />
        <ListItemText primary={`${informationUser?.html_url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Node 🡢`} />
        <ListItemText primary={`${informationUser?.node_id}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Organizations 🡢`} />
        <ListItemText primary={`${informationUser?.organizations_url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Received Events 🡢`} />
        <ListItemText primary={`${informationUser?.received_events_url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Repos 🡢`} />
        <ListItemText primary={`${informationUser?.repos_url}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Score 🡢`} />
        <ListItemText primary={`${informationUser?.score}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Site Admin 🡢`} />
        <ListItemText primary={`${informationUser?.site_admin}`} />
      </ListItem>
    </>
  )

  return (
    <List component='nav' className={classes.root} aria-label='detail'>
      {renderDetail}
    </List>
  )
}

export default DetailComponent
