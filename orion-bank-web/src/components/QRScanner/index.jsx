import React from 'react';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onResult }) => {

  const handleScan = (data) => {
    if (data) {
      onResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '90%' }}
      />
    </>
  );
};

export default QRScanner;