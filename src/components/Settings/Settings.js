import { Facebook, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'

import './Settings.css'

export const Settings = () => {
    return (
        <div>

            <div id="carouselExampleInterval" class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active"
                        data-bs-interval="1000"
                    >
                        <img src="https://miro.medium.com/max/1200/0*oZLL-N4dGNlBe4Oh.png" class="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div class="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://i0.wp.com/www.uniquenewsonline.com/wp-content/uploads/2020/09/Node-Js-vs-React-Js.png?fit=1280%2C720&ssl=1" class="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                    <div class="carousel-item"
                        data-bs-interval="2000"
                    >
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--PHvvmnw8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91ovedmu4grqhjh434rq.png" class="d-block w-100" alt="..." style={{ minHeight: '500px', maxHeight: '500px' }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <section class="features-icons bg-light text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi bi-window m-auto text-primary"></i></div>
                                <h3>Sitio Responsive</h3>
                                <p class="lead mb-0">Este sitio soporta el uso en otros dispositivos.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi bi-code-square m-auto text-primary"></i></div>
                                <h3>Diseño</h3>
                                <p class="lead mb-0">Hecho con Reactjs, material ui y bootstrap.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                                <h3>Funcionalidad</h3>
                                <p class="lead mb-0">Implementando con Java spring boot, y mongodb como base de datos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Equipo de desarrollo</h2>
                        <h3 class="section-subheading text-muted">Integrantes.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="..." />
                                <h4>Luis Gerez</h4>
                                <p class="text-muted">Desarrollador</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="..." />
                                <h4>Patricio Ruiz</h4>
                                <p class="text-muted">Desarrolladorr</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="..." />
                                <h4>Joel Yantorno</h4>
                                <p class="text-muted">Desarrollador</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Facebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><Twitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><LinkedIn /></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. Cipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quo ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritati.</p></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
