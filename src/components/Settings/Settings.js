import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@material-ui/core'
import { Code, Facebook, LaptopChromebook, LinkedIn, SupervisorAccount, Twitter } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import './Settings.css'

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

export const Settings = () => {

    const classes = useStyles();

    return (
        <div className="container px-4 px-lg-5">
            <div className="row">





                <h1 className="display-1 text-center" >Proyecto</h1>

                <h1 className="display-3  text-center">Programación 6</h1>
                <h1 className="display-8  text-center">Java + React + Node JS + Spring Boot + MongoDB = API RestFull</h1>

            </div>



            <div id="carouselExampleInterval" className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active"
                        data-bs-interval="1000"
                    >
                        <img src="https://miro.medium.com/max/1200/0*oZLL-N4dGNlBe4Oh.png" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://i0.wp.com/www.uniquenewsonline.com/wp-content/uploads/2020/09/Node-Js-vs-React-Js.png?fit=1280%2C720&ssl=1" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--PHvvmnw8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91ovedmu4grqhjh434rq.png" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://www.muylinux.com/wp-content/uploads/2019/01/mongodb.png" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://ubunlog.com/wp-content/uploads/2014/03/logo-java-830x460.jpg.webp" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://www.ma-no.org/cache/galleries/contents-1774/960-400/restful-api-impjpg.webp" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>



                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="bi bi-window m-auto text-primary"></i></div>
                                <h3>Sitio Responsive</h3>
                                <p className="lead mb-0">Este sitio soporta el uso en otros dispositivos.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="bi bi-code-square m-auto text-primary"></i></div>
                                <h3>Diseño</h3>
                                <p className="lead mb-0">Hecho con Reactjs, material ui y bootstrap.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                                <h3>Funcionalidad</h3>
                                <p className="lead mb-0">Implementando con Java spring boot, y mongodb como base de datos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Equipo de desarrollo</h2>
                        <h3 className="section-subheading text-muted">Integrantes.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQGMcgJ40UZIXw/profile-displayphoto-shrink_800_800/0/1607982978177?e=1637798400&v=beta&t=J9wB3Dhd3TVgh4xrvWz-DBnYUJu4jY_CulR984YcnQQ" alt="..." />
                                <h4>Luis Gerez</h4>
                                <p className="text-muted">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQHP03FraKMszA/profile-displayphoto-shrink_800_800/0/1625238459613?e=1637798400&v=beta&t=RjxTXY2r9grexn4GCl00x8oPRYfgpEVhMdUG_XisB6w" alt="..." />
                                <h4>Patricio Ruiz</h4>
                                <p className="text-muted">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQHKE43yN3Sb9w/profile-displayphoto-shrink_800_800/0/1621873813101?e=1637798400&v=beta&t=4Fir9njx6a4rBd_y-wq0fsNGd8czIIcYatZgCgS78kM" alt="..." />
                                <h4>Joel Yantorno</h4>
                                <p className="text-muted">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Grid item xs={8} md={4} style={{ marginTop: 50, marginBottom: 150 }}>
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

        </div>
    )
}
