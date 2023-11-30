import React from 'react';
import { Link } from "react-router-dom";
import Titulo from "../../assets/img/titulo.svg";
import "./styles.css"

const TermosPolitica = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-xl-7 col-lg-12 col-md-9 ">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0 ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">

                                        <div className="text-center">
                                            <img src={Titulo} className="circulo-preto" alt="" />
                                            <h1 style={{ color: '#DB4648' }} className="h4 mb-0">Termos de Uso</h1>
                                            <h1 style={{ color: '#DB4648' }} className="h4 mb-0">Politicas</h1>
                                        </div>
                                        <div>
                                            <div className="container-texto-termos">
                                                <div className="termos-texto">
                                                    <label>
                                                        Lorem ipsum dolor sit amet. Sit quia aliquam sit ipsa aliquid
                                                        vel dolore earum id rerum error est atque aliquam 33 assumenda
                                                        repellendus sit omnis distinctio! Vel animi aliquid non sapiente
                                                        doloribus vel explicabo delectus aut quis ipsum quo cupiditate
                                                        nemo eos pariatur eaque ut similique amet.
                                                        Eum officia quae est dolorem quos ea voluptatem quasi. Qui ipsa
                                                        dolorum ut sunt quia sit dicta tenetur et fugiat laborum et nesciunt
                                                        pariatur. Qui dolorem voluptates quo similique explicabo ut iste temporibus
                                                        At sapiente labore qui nihil nulla. Nam fuga debitis ea quisquam rerum et
                                                        ipsam architecto qui voluptatem nulla sed veniam ipsum non nobis facilis.
                                                        Et eius dicta id dicta Quis ut pariatur consectetur et itaque tenetur in
                                                        Quis autem a veniam galisum in doloremque impedit. Qui cupiditate tempore
                                                        quo harum atque est obcaecati consequatur aut expedita voluptatibus ad dolorem
                                                        soluta est tenetur quos non adipisci alias. Et eaque repellat rem incidunt
                                                        quia in quisquam dolorum a quia quis ut dolor numquam vel ipsa enim est
                                                        necessitatibus eius!
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <Link to="/login"><button type="submit" className="botao-um"> OK </button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermosPolitica;