import React, { useState, useContext, useEffect } from "react";
import { showErrorNotification } from '../../../shared/notificationUtils';
import { ContaContext } from "../../../contexts/ContaContext";
import { MovimentoContext } from "../../../contexts/MovimentoContext";
import { TipoTransacaoEnum } from "../../../constants/enums";
import pageExtrato from "../../../assets/img/pageExtrato.svg";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./styles.css";


const ExtratoConta = () => {
    const { buscarSaldo } = useContext(ContaContext);
    const { user, obterExtrato, exportarPdf } = useContext(MovimentoContext);
    let [extrato, setExtrato] = useState([]);
    const [dtInicio, setdtInicio] = useState('');
    const [dtFim, setdtFim] = useState('');
    const [saldo, setSaldo] = useState(0.00);
    const [modalFiltrarIsOpen, setModalFiltrarOpen] = useState(false);

    const openModalFiltrar = () => {
        setModalFiltrarOpen(true);
    };

    const closeModalFiltrar = () => {
        setModalFiltrarOpen(false);
    };

    const gerarExtrato = async () => {
        setExtrato([]);
        const request = {
            codigoConta: user.codigo,
            dataInicio: dtInicio,
            dataFim: dtFim
        }
        extrato = await obterExtrato(request);
        closeModalFiltrar();

        if (extrato !== undefined)
            setExtrato(extrato);
    };

    const extratoPDF = async () => {
        try {
            const request = {
                codigoConta: user.codigo,
                dataInicio: dtInicio,
                dataFim: dtFim
            }

            const arquivo = await exportarPdf(request);
            const binary = atob(arquivo);

            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }

            const pdf = new Blob([bytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(pdf);
            window.open(url);

        } catch (error) {
            showErrorNotification("Erro ao exportar o PDF.");
            console.error(error);
        }
    };

    function formatarData(data) {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear().toString().slice(-2);
        const hora = dataObj.getHours();
        const minuto = dataObj.getMinutes();
        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    }

    function formatarEnum(situacao) {
        switch (situacao) {
            case TipoTransacaoEnum.PIX:
                return 'Pix';
            case TipoTransacaoEnum.TED:
                return 'Ted';
            case TipoTransacaoEnum.QrCode:
                return 'QrCode';
            default:
                return 'Desconhecida';
        }
    }

    function formatarDinDin(valor) {
        const dindinFormatado = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return dindinFormatado;
    }

    useEffect(() => {
        const fetchSaldo = async () => {
            const saldo = await buscarSaldo();
            const saldoFormatado = parseFloat(saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            setSaldo(saldoFormatado);
        };
        fetchSaldo();
    }, []);

    return (

        <div className="container-solicitar">
            <>
                <Modal show={modalFiltrarIsOpen} centered size="sm" >
                    <Modal.Header>
                        <Modal.Title style={{ color: '#DB4648' }}>Filtrar Período</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-data">
                            <label className="mt-2 mr-2" style={{ color: "#3f3d56" }}>Data inicial </label>
                            <div>
                                <input
                                    type="date"
                                    name="nDtInicio"
                                    id="IDtInicio"
                                    value={dtInicio}
                                    onChange={(e) => setdtInicio(e.target.value)}
                                />
                            </div>
                            <label className="mt-4 mr-3" style={{ color: "#3f3d56" }}>Data final </label>
                            <div>
                                <input
                                    type="date"
                                    name="nDtFim"
                                    id="iDtFim"
                                    value={dtFim}
                                    onChange={(e) => setdtFim(e.target.value)}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="modal-btn">
                        <div className="">
                            <Button variant="danger" onClick={closeModalFiltrar} style={{ marginRight: "10px" }}>
                                Cancelar
                            </Button>
                            <Button variant="success" onClick={gerarExtrato}>
                                Filtrar
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>
            <div className="title-solicitar">
                <h3 className="titulo-h5"> <img alt="" src={pageExtrato}></img> Extrato Bancário</h3>
            </div>

            <div className="card-solicitar1">
                <div className="linha-superior">
                    <div className="div-saldo-input">
                        <div className="card-extrato">
                            <div>
                                <p> Saldo atual: {saldo}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Button style={{ marginRight: "7px" }} variant="success" as="input" type="submit" value="Filtrar" className="estilo-botao" onClick={openModalFiltrar} />
                            <Button variant="success" as="input" type="submit" value="Exportar" className="estilo-botao" onClick={extratoPDF} />
                        </div>
                    </div>
                </div>

                <div className="table-solicitar1">

                    <Table striped bordered hover responsive="sm" className="fs">
                        <thead>
                            <tr>
                                <th>Data/Hora</th>
                                <th>Tipo</th>
                                <th>Lançamento</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {extrato.map((record, index) => (
                                <tr key={index}>
                                    <td>{formatarData(record.Data)}</td>
                                    <td>{formatarEnum(record.TipoTransacao)}</td>
                                    <td>{record.IsSaida === true ? record.NomeDestino : record.NomeOrigem}</td>
                                    <td>{record.Descricao.substring(0, 30)}</td>
                                    <td>{record.CodigoContaOrigem === user.codigo ?
                                        <span style={{ "color": "red" }}>-{formatarDinDin(record.Valor)}</span> :
                                        <span style={{ "color": "green" }}>+{formatarDinDin(record.Valor)}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );

}

export default ExtratoConta;