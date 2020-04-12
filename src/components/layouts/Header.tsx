import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header: FC<{}> = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
    }),
  );
  const classes = useStyles();
  const style = {
    maxWidth: '1072px',
  };

  return (
    <section className={classes.root}>
      <AppBar color="primary" position="static">
        <div className="l-barWidth" style={style}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              COVID-19 Compensation
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </section>
  );
};

export default Header;
