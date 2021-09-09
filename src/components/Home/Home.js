import React from 'react'
import { Code, LaptopChromebook, SupervisorAccount } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
    card: {
        display: 'flex',
        width: 700
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 200,
    },
});

export const Home = () => {
    const classes = useStyles();


    return (
        <Grid item xs={8} md={4}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Programación
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                JavaScript
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Detalles del lenguaje javascript y todos sus frameworks y librerias.
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Seguir leyendo...
                            </Typography>
                        </CardContent>
                        <Code />
                        <SupervisorAccount />
                        <LaptopChromebook />
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image="https://res.cloudinary.com/keystone-demo/image/upload/v1565132003/rkgxw5iilsk8ntejn3ei.jpg" title="Dev" />
                    </Hidden>
                </Card>
            </CardActionArea>
            &nbsp;
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Programación
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                JavaScript
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Detalles del lenguaje javascript y todos sus frameworks y librerias.
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Seguir leyendo...
                            </Typography>
                        </CardContent>
                        <Code />
                        <SupervisorAccount />
                        <LaptopChromebook />
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image="https://media.geeksforgeeks.org/wp-content/uploads/20190906180444/How-to-Become-a-JavaScript-Developer.png" title="Dev" />
                    </Hidden>
                </Card>
            </CardActionArea>
&nbsp;
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Programación
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                JavaScript
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Detalles del lenguaje javascript y todos sus frameworks y librerias.
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Seguir leyendo...
                            </Typography>
                        </CardContent>
                        <Code />
                        <SupervisorAccount />
                        <LaptopChromebook />
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image="https://miro.medium.com/max/480/0*6lPHg32SjsdpRNZN.png" title="Dev" />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}
