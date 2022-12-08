const ParcelaDAO = require('../DAOs/ParcelaContaPagarDAO');

class ParcelaContaPagar
{
    id;
    valor;
    dataPagamento;
    dataVencimento;
    numParcela;
    situacao;
    idContaPagar;
    valorTotal;

    constructor(id, valor, dataPagamento, dataVencimento, numParcela, situacao, idContaPagar, valorTotal)
    {
        this.id = id;
        this.valor = valor;
        this.dataPagamento = dataPagamento;
        this.dataVencimento = dataVencimento;
        this.numParcela = numParcela;
        this.situacao = situacao;
        this.idContaPagar = idContaPagar;
        this.valorTotal = valorTotal;
    }

    async gravar(bd)
    {
        const resp = await new ParcelaDAO().gravar(bd, this);
        return resp;
    }

    async listarTodasParcelas(bd, idConta)
    {
        const resp = await new ParcelaDAO().buscarTodos(bd, idConta);
        return resp;
    }

    async alterar(bd)
    {
        const resp = await new ParcelaDAO().alterar(bd, this);
        return resp;
    }

    async quitarParcela(bd, idParcela)
    {
        const resp = await new ParcelaDAO().quitar(bd, idParcela);
        return resp;
    }

    async deletar(bd, idConta)
    {
        const resp = await new ParcelaDAO().deletar(bd, idConta);
        return resp;
    }

    async pagarParcelado(bd, idParcela, valor)
    {
        const resp = await new ParcelaDAO().pagarParcelado(bd, idParcela, valor);
        return resp;
    }
}

module.exports = ParcelaContaPagar;