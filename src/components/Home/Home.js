import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@material-ui/core'
import { Code, Facebook, LaptopChromebook, LinkedIn, SupervisorAccount, Twitter } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import './Home.css'

const useStyles = makeStyles({
    cardArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95vw'
    },
    card: {
        display: 'flex',
        background: 'white',
        color: 'black',
        border: '2px solid crimson',
        borderRadius: 20
    },
    cardDetails: {
        width: 500
    },
    cardMedia: {
        width: 300,
    },
});

export const Home = () => {

    const classes = useStyles();

    return (
        <div className="p-3">
            <div className="row">

                <h1 className="display-1 text-center" >Proyecto</h1>

                <h1 className="display-3  text-center">Programación 6</h1>
                <h1 className="display-8  text-center">Java + React + Spring Boot + MongoDB = API RestFull</h1>

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
                        <img src="https://res.cloudinary.com/keystone-demo/image/upload/v1565132003/rkgxw5iilsk8ntejn3ei.jpg" className="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
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


            <section className="page-section" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Equipo de desarrollo</h2>
                        <h3 className="section-subheading text-white">Integrantes.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQGMcgJ40UZIXw/profile-displayphoto-shrink_800_800/0/1607982978177?e=1637798400&v=beta&t=J9wB3Dhd3TVgh4xrvWz-DBnYUJu4jY_CulR984YcnQQ" alt="..." />
                                <h4>Luis Gerez</h4>
                                <p className="text-white">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C5603AQHP03FraKMszA/profile-displayphoto-shrink_800_800/0/1625238459613?e=1637798400&v=beta&t=RjxTXY2r9grexn4GCl00x8oPRYfgpEVhMdUG_XisB6w" alt="..." />
                                <h4>Patricio Ruiz</h4>
                                <p className="text-white">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQG8iHle61I6nQ/profile-displayphoto-shrink_200_200/0/1634744635036?e=1640217600&v=beta&t=NcSiaTIH3CS7E-ClphkF3v7EH8dYuqeqkroYiChb-hE" alt="..." />
                                <h4>Joel Yantorno</h4>
                                <p className="text-white">Desarrollador</p>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Facebook /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><Twitter /></a>
                                <a className="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Grid item xs={8} md={4} style={{ marginTop: 50, marginBottom: 150 }} className="container">
                <CardActionArea component="a" href="#" className={classes.cardArea}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5" style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                                    JAVA
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" className="mb-2">
                                    Eclipse
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Backend hecho con el lenguaje de Java, el cual tiene sus modelos, controladores, rutas, conexión a la base de datos, en este caso
                                    mongodb.
                                </Typography>
                            </CardContent>
                            <Code />
                            <SupervisorAccount />
                            <LaptopChromebook />
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image="https://www.maquinasvirtuales.eu/ipsoapoo/2019/10/powershell-saber-version-de-java-via-comando-1-660x330.jpg" title="Dev" />
                        </Hidden>
                    </Card>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5" style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                                    JAVASCRIPT
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" className="mb-2">
                                    Visual Studio Code
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Frontend hecho con Javascript, diseños, funcionalidades, maquetaciones, descargas e implementación de librerias, conexión con el backend.
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
                <CardActionArea component="a" href="#" className={classes.cardArea} >
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5" style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                                    SPRING BOOT
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" className="mb-2">
                                    Eclipse
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Spring Boot permite ejecutar aplicaciones Spring de forma standalone, sin necesidad de un servidor de aplicaciones. Una aplicación Spring Boot lleva incluido un servidor web embebido (Tomcat) que se pone en marcha al lanzar la aplicación y sirve todas las páginas de la aplicación web.
                                </Typography>
                            </CardContent>
                            <Code />
                            <SupervisorAccount />
                            <LaptopChromebook />
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image="https://ichi.pro/assets/images/max/724/1*o5FmjKTPdJTbhGE2MIjo6w.jpeg" title="Dev" />
                        </Hidden>
                    </Card>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5" style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                                    REACT JS
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" className="mb-2">
                                    Visual Studio Code
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    Frontend hecho con Reactjs, consume el backend hecho en Java mediante peticiones realizadas a través de la libreria axios, uso de
                                    hooks y customs hooks, validaciones de rutas, formulario de contacto.
                                    Otras cosas utilizadas como css, sass, bootstrap, material ui
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
