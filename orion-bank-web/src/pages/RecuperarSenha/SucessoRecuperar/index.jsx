import React from 'react';
import { Link, useParams } from "react-router-dom";
import "../styles.css";

const SucessoRecuperarSenha = () => {
    const { tipoSucesso } = useParams();
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-xl-10 col-lg-12 col-md-9 ">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0 ">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        {tipoSucesso === "email" && (
                                            <>
                                                <div className="text-center">
                                                    <h1 style={{ color: '#DB4648' }} className="h2 mb-4">E-mail Enviado!</h1>
                                                </div>

                                                <div>
                                                    <div className="container-texto">
                                                        <div className="textoSucesso">
                                                            <label>
                                                                Um link de recuperação de senha foi enviado para o seu e-mail.
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <Link to="/login"><button type="submit" className="botao-um"> OK </button></Link>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {tipoSucesso === "alteracao" && (
                                            <>
                                                <div className="text-center">
                                                    <h1 style={{ color: '#DB4648' }} className="h2 mb-4">Sucesso!</h1>
                                                </div>

                                                <div>
                                                    <div className="container-texto">
                                                        <div className="text-center custom-center-success">
                                                            <label>
                                                                Senha recuperada com sucesso!
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <Link to="/login"><button type="submit" className="botao-um"> OK </button></Link>
                                                    </div>
                                                </div>
                                            </>
                                        )}


                                    </div>
                                </div>

                                {tipoSucesso === "email" && (
                                    <div className="col-lg-6 d-none d-lg-block bg-success-recuperar-image"></div>
                                )}

                                {tipoSucesso === "alteracao" && (
                                    <div className="col-lg-6 d-none d-lg-block bg-senha-alterada-image"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SucessoRecuperarSenha;