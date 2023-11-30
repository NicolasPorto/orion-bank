import React, { useContext, useState, useEffect } from "react";
import { ContaContext } from "../../../../contexts/ContaContext";
import PersonLock from "../../../../assets/img/person-lock.svg";
import "./styles.css"

const Dados = () => {
    const { buscarInfoConta } = useContext(ContaContext);
    const [responseConsulta, setResponseConsulta] = useState({});

    useEffect(() => {
        const response = buscarInfoConta();
        setResponseConsulta(response);
    }, []);

    return (
        <div className="container-dados">
            <div className="title-dados">
                <h3 className="titulo-h5"> <img alt="" src={PersonLock}></img> Dados</h3>
            </div>
            <div className="card-dados">
                <div className="inputs-dados">
                    <div>
                        <label style={{ color: "#3f3d56" }}>Agência</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                    <div>
                        <label style={{ color: "#3f3d56" }}>Conta</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                    <div>
                        <label style={{ color: "#3f3d56" }}>Conta</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                    <div>
                        <label style={{ color: "#3f3d56" }}>Conta</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                    <div>
                        <label style={{ color: "#3f3d56" }}>Conta</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                    <div>
                        <label style={{ color: "#3f3d56" }}>Conta</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={responseConsulta.Agencia}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dados;