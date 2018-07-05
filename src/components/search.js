'use strict'

import React, { PropTypes } from 'react'
import { TextField, FormControl } from '@material-ui/core'

const Search = ({ handleSearch }) => (
  <FormControl className='search' fullWidth>
    <TextField
      id='search'
      type='search'
      label='Pesquisar'
      placeholder='Digite o seu usuário no Github'
      margin='normal'
      onKeyUp={handleSearch}
    />
  </FormControl>
)

Search.prototype = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
