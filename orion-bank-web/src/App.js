import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./contexts/AuthContext";
import { SolicitacoesContaProvider } from "./contexts/SolicitacoesContaContext";
import { BuscarCEPProvider } from "./contexts/BuscarCEPContext";
import { RecuperarSenhaProvider } from "./contexts/RecuperarSenhaContext";
import { ContaProvider } from "./contexts/ContaContext";
import { ChaveProvider } from "./contexts/ChaveContext";
import { QRCodeProvider } from "./contexts/QRCodeContext";
import { MovimentoProvider } from "./contexts/MovimentoContext";
import { BrowserRouter as Router } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <RecuperarSenhaProvider>
            <SolicitacoesContaProvider>
              <BuscarCEPProvider>
                <AuthProvider>
                  <ContaProvider>
                    <ChaveProvider>
                      <MovimentoProvider>
                        <QRCodeProvider>
                          <AppRoutes />
                          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
                        </QRCodeProvider>
                      </MovimentoProvider>
                    </ChaveProvider>
                  </ContaProvider>
                </AuthProvider>
              </BuscarCEPProvider>
            </SolicitacoesContaProvider>
          </RecuperarSenhaProvider>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;