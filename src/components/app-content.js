'use strict'

import React, { PropTypes } from 'react'
import { AppBar, Toolbar, Paper, Grid, withStyles } from '@material-ui/core'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div>
    <AppBar position='static'>
      <Toolbar>
        <Grid container spacing={16} alignItems='center' direction='row' justify='center'>
          <Grid item xs={8} >
            <Grid container spacing={16} alignItems='center' direction='column' justify='center'>
              <Search handleSearch={handleSearch} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

    <Grid container spacing={16} alignItems='flex-end' direction='row' justify='center' style={{ paddingTop: 40 }}>
      <Grid item xs={11}>
        {!!userinfo &&
          <Paper>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}> <UserInfo userinfo={userinfo} /></Grid>
              <Grid item xs={12} sm={6}>{!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}</Grid>
            </Grid>
          </Paper>
        }
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper>
          {!!repos.length && <Repos
            className='repos'
            title='Repositório'
            repos={repos} />}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          {!!starred.length && <Repos
            className='starred'
            title='Favoritos'
            repos={starred} />}
        </Paper>
      </Grid>
    </Grid>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default withStyles(styles)(AppContent)
