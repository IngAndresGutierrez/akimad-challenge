/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useDispatch } from 'react-redux'
import { Send } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'

/* import internal modules */
import { useStyles } from './styles'
import { getUsersSearch } from '../../apis/users'
import { setSearchUsers } from '../../redux/actions/user/user'
import Loading from '../common/Loading'

const SearchInput = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(setSearchUsers([]))
  }, [])

  const makeSearchUsers = () => {
    if (searchInput) {
      setLoading(true)
      getUsersSearch(searchInput)
        .then((response) => {
          console.log(response)
          dispatch(setSearchUsers(response.data.items))
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setLoading(false)
        })
    }
  }

  const handleInput = (event) => {
    const text = event.target.value
    setSearchInput(text)
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        value={searchInput}
        onChange={handleInput}
        label='Search git user'
      />
      <Button
        color='primary'
        variant='contained'
        endIcon={<Send />}
        className={classes.button}
        onClick={makeSearchUsers}
      >
        Search
      </Button>
      {loading && <Loading />}
    </form>
  )
}

export default SearchInput
