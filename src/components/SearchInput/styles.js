/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
  button: {
    marginBottom: '5%',
  },
}))
