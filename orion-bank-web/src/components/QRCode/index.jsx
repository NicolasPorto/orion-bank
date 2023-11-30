import React from 'react';
import './styles.css'

const QRCodeComponent = ({ base64Image }) => {
  return (
    <div>
      <img className="qr-code-imagem" alt="" src={base64Image} />
    </div>
  );
};

export default QRCodeComponent;