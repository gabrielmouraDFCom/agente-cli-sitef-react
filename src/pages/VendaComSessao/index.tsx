import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAgenteSitef } from '../../context/AgenteSitefContext';
import { FormasPagamentoTransacao } from '../../context/AgenteSitefContext/types';

interface FormValues {
  sessaoParams: string;
  trnParamAdic: string;
  sitefIp: string;
  storeId: string;
  terminalId: string;
  valor: string;
  cupomFiscal: string;
  dataFiscal: string;
  horaFiscal: string;
  operador: string;
}

const VendaComSessao: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { instanciarVenda, criaSessaoId, obtemSessaoId, destroiSessaoId } = useAgenteSitef();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await instanciarVenda(2, FormasPagamentoTransacao.Debito, data);
  };

  const handleCreateSession: SubmitHandler<FormValues> = async (data) => {
    await criaSessaoId(data.sitefIp, data.storeId, data.terminalId, "")
  }


  return (
    <div>
      <header>
        <h2>Exemplo AgenteCliSiTef - venda com controle de sessão</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="tef_setup">
          <div className="toolbar">
            <a className="lnk1" href="index.html">venda</a>&nbsp; &nbsp;|&nbsp; &nbsp;
            <a className="lnk1" href="venda_com_sessao.html">venda com sessão</a>&nbsp; &nbsp;|&nbsp; &nbsp;
            <a className="lnk1" href="sessao.html">outras funções</a>
          </div>
          <div className="wrapper">
            <div className="limit">
              <table cellSpacing="4">
                <tr>
                  <td align="right"><b>Parâmetros Configura</b></td>
                  <td><input type="text" {...register('sessaoParams')} title="Parâmetros adicionais da ConfiguraIntSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">Parâmetros Inicia</td>
                  <td><input type="text" {...register('trnParamAdic')} title="Parâmetros adicionais da IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">IP SiTef</td>
                  <td><input type="text" {...register('sitefIp')} defaultValue="127.0.0.1" title="Endereço IP do servidor SiTef da ConfiguraIntSiTefInterativoEx" /></td>
                </tr>
                <tr>
                  <td align="right">Empresa</td>
                  <td><input type="text" {...register('storeId')} defaultValue="00000000" title="Código de Empresa da ConfiguraIntSiTefInterativoEx" /></td>
                </tr>
                <tr>
                  <td align="right">Terminal</td>
                  <td><input type="text" {...register('terminalId')} defaultValue="REST0001" title="Código de Terminal da ConfiguraIntSiTefInterativoEx" /></td>
                </tr>
                <tr>
                  <td align="right">Digite o valor da transação</td>
                  <td><input type="text" {...register('valor')} defaultValue="100" title="Valor da transação, na IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">Cupom fiscal</td>
                  <td><input type="text" {...register('cupomFiscal')} defaultValue="1234" title="Documento fiscal, na IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">Data fiscal</td>
                  <td><input type="text" {...register('dataFiscal')} defaultValue="20180611" title="Data fiscal, na IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">Hora fiscal</td>
                  <td><input type="text" {...register('horaFiscal')} defaultValue="170000" title="Hora fiscal, na IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td align="right">Operador</td>
                  <td><input type="text" {...register('operador')} defaultValue="CAIXA" title="Operador de caixa, na IniciaFuncaoSiTefInterativo" /></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    <table cellSpacing="5">
                      <tr>
                        <td width="150"><button type="submit" className="btn1" title="Inicia uma venda crédito">Iniciar venda</button></td>
                        <td width="150"><button type="button" className="btn1" onClick={() => destroiSessaoId()} title="Chama finishTransaction fora do fluxo da transação com a opção de não confirmar.">Finaliza estornando</button></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td valign="center" align="right">Funções de sessão</td>
                  <td>
                    <table cellSpacing="5">
                      <tr>
                        <td width="150"><button type="button" className="btn1" onClick={handleSubmit(handleCreateSession)} title="Cria uma chave de sessão, descartando a anterior, caso exista">Criar sessão</button></td>
                        <td width="150"><button type="button" className="btn1" onClick={() => obtemSessaoId()} title="Obtém a chave de sessão, anteriormente criada via session/create">Obter sessão</button></td>
                        <td width="150"><button type="button" className="btn1" onClick={() => destroiSessaoId()} title="Descarta a chave de sessão, anteriormente criada via session/create">Finaliza sessão</button></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="tef_transacao">
          <div className="wrapper">
            <div className="limit">
              <div id="tef_titulo" className="trn-header"></div>
              <br />
              <div id="tef_corpo"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendaComSessao;
