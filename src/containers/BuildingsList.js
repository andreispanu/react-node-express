import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/Context';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  },
  buildingsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  buildingItem: {
    padding: theme.spacing(2)
  },
  buildingName: {
    height: 24,
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "#3e3f42"
  },
  buildingAddress: {
    color: "#9ea0a5",
    fontSize: 14,
    height: 44,
    lineHeight: "22px",
    fontFamily: "Roboto",
  }
}));


const BuildingsList = () => {
  const classes = useStyles();
  const data = useContext(DashboardContext);

  const buildingsLoop = () => {

    const result = [];
    if (data !== undefined) {
      const buildings = data.buildings.item;

      buildings.map(item => {
        result.push(
          <Grid item xs={12} className={classes.buildingItem} key={item.id}>
            <div className={classes.buildingName}>
              <Typography>{item.buildingName}</Typography>
            </div>
            <div className={classes.buildingAddress}>
              <Typography>{item.buildingAddress1}</Typography>
              <Typography>{item.buildingAddress2}</Typography>
            </div>
            <Grid container>
              <Grid item xs={12} sm={6} className="building-users">
                <Typography>{item.users}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} className="building-offices">
                <Typography>{item.offices}</Typography>
              </Grid>
            </Grid>
            <hr />
            <Grid container>
              <Grid item xs={12} sm={6} className="building-status-rent">
                <Typography>For rent</Typography>
              </Grid>
              <Grid item xs={12} sm={6} className="building-status-price">
                <Typography>£{item.price}/sqm</Typography>
              </Grid>
            </Grid>
          </Grid>
        )
      })
      return result;
    }

    return result;
  }

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <div className={classes.buildingsContainer}>
          {buildingsLoop()}
        </div>
      </Paper>
    </React.Fragment>
  )

}

export default BuildingsList;