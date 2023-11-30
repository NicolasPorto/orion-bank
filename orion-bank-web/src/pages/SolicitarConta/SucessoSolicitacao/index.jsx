import React from 'react';
import { Link, useParams } from "react-router-dom";
import "../styles.css";

const SucessoSolicitacao = () => {
    const { nome } = useParams();

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-xl-10 col-lg-12 col-md-9 ">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0 ">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 style={{ color: '#DB4648' }} className="h1 mb-4">Quase lá ... !</h1>
                                        </div>

                                        <div>
                                            <div className="container-texto">
                                                <div className="textoSucesso">
                                                    <label>Prezado(a) <span className="cor-padrao">{nome}</span>,</label>
                                                    <label>
                                                        Seus dados foram enviados para análise dos responsáveis.
                                                        Assim que a solicitação for aprovada, você receberá um e-mail com todas as atualizações
                                                        relacionadas a sua conta. Mantenha-se atento à sua caixa de entrada!
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <Link to="/login"><button type="submit" className="botao-um"> OK </button></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-5 d-none d-lg-block bg-solicitar-image-quatro"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SucessoSolicitacao;