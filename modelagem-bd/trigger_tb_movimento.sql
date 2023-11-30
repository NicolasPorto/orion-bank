INSERT INTO movimento
	(Codigo, CodigoContaOrigem, CodigoContaDestino, Chave_Pix, 
		EMV, InfoAdicional, TipoTransacao, DtMovimento, Valor, DescTransacao)
VALUES
	(UUID(), '8eb20cc6-6ecd-11ee-a9fc-d09466b8849a', '07e826b6-c833-43d3-8f45-f247d781a9e9', '07041556999',
		'', 'testes trigger', 1,NOW(), 200, 'cpf');

DELIMITER $$

CREATE TRIGGER 
	trg_atualizar_saldo
AFTER INSERT 
	ON movimento
FOR EACH ROW

	BEGIN

		UPDATE saldo
		SET
			Saldo = Saldo - NEW.Valor,
            DtAtualizacao = NOW()
		WHERE
			CodigoConta = NEW.CodigoContaOrigem;
            
		UPDATE saldo
		SET
			Saldo = Saldo + NEW.Valor
		WHERE
			CodigoConta = NEW.CodigoContaDestino;

	END$$
	DELIMITER ;
    
DELIMITER $$

-- ____________________________________________________________________________________________________________

DELIMITER $$

CREATE TRIGGER
	trg_atualizar_saldo_data
AFTER INSERT
	ON movimento
FOR EACH ROW

	BEGIN
    
		UPDATE saldo_data
        SET
			SaldoInicial = SaldoInicial - NEW.Valor
		WHERE 
			CodigoConta = NEW.CodigoContaOrigem;
            
		UPDATE saldo_data
        SET
			SaldoInicial = SaldoInicial + NEW.Valor
		WHERE 
			CodigoConta = NEW.CodigoContaDestino;

	END$$
	DELIMITER ;
    
DELIMITER $$