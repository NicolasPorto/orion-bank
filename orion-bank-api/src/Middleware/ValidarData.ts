

export function ValidarDataInicioMenor(dataInicio: Date, dataFim: Date) : void {

    if (dataInicio > dataFim) {
        throw new Error("Data início não pode ser menor que a data fim.");
    }

}