import React from 'react';
import { useForm } from 'react-hook-form';
import { useAgenteSitef } from '../../context/AgenteSitefContext';

interface FormData {
  SITEF: string;
  EMPRESA: string;
  TERMINAL: string;
}

const AgenteCliSiTef: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { pinpadMensagem, criaSessaoId, obtemSessaoId, destroiSessaoId } = useAgenteSitef();
  const handleCreateSession = (data: FormData) => {
    criaSessaoId(data.SITEF, data.EMPRESA, data.TERMINAL, "");
  };

  const handleWritePinpadMessage = () => {
    try {
      const message = "Cresci e Perdi - Divinolandia"
      const persistent = true

      pinpadMensagem(message, persistent)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <header>
        <h2>Exemplo AgenteCliSiTef - outras funções</h2>
      </header>
      <form >
        <div id="tef_setup">
          <div className="toolbar">
            <a className="lnk1" href="index.html">venda</a>&nbsp; &nbsp;|&nbsp; &nbsp;
            <a className="lnk1" href="venda_com_sessao.html">venda com sessão</a>&nbsp; &nbsp;|&nbsp; &nbsp;
            <a className="lnk1" href="sessao.html">outras funções</a>
          </div>
          <div className="wrapper">
            <div className="limit">
              <input type="hidden" id="SESSAO_PARAMS" value="" />
              <input type="hidden" id="VALOR" value="" />
              <input type="hidden" id="CUPOMFISCAL" value="1234" />
              <input type="hidden" id="DATAFISCAL" value="20170304" />
              <input type="hidden" id="HORAFISCAL" value="170000" />
              <input type="hidden" id="OPERADOR" value="CAIXA" />
              <input type="hidden" id="TRN_PARAMADIC" value="" />

              <table>
                <tbody>
                  <tr>
                    <td align="right">IP SiTef</td>
                    <td>&nbsp;<input type="text" id="SITEF" {...register('SITEF')} defaultValue="localhost" /></td>
                  </tr>
                  <tr>
                    <td align="right">Empresa</td>
                    <td>&nbsp;<input type="text" id="EMPRESA" {...register('EMPRESA')} defaultValue="00000000" /></td>
                  </tr>
                  <tr>
                    <td align="right">Terminal</td>
                    <td>&nbsp;<input type="text" id="TERMINAL" {...register('TERMINAL')} defaultValue="REST0001" /></td>
                  </tr>
                  <tr>
                    <td valign="center" align="right">Agente CliSiTef</td>
                    <td>
                      <table cellSpacing="5">
                        <tbody>
                          <tr>
                            <td width="150">
                              <button type="button" className="btn1" title="Consulta o estado atual do Agente CliSiTef">Consulta estado</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td valign="center" align="right">Funções de sessão</td>
                    <td>
                      <table cellSpacing="5">
                        <tbody>
                          <tr>
                            <td width="150">
                              <button type="button" className="btn1" title="Cria uma chave de sessão, descartando a anterior, caso exista" onClick={handleSubmit(handleCreateSession)}>Criar sessão</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" title="Obtém a chave de sessão, anteriormente criada via session/create" onClick={() => obtemSessaoId()}>Obter sessão</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" title="Descarta a chave de sessão, anteriormente criada via session/create" onClick={() => destroiSessaoId()}>Finaliza sessão</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td valign="center" align="right">Geral</td>
                    <td>
                      <table cellSpacing="5">
                        <tbody>
                          <tr>
                            <td width="150">
                              <button type="button" className="btn1" title="Obtem versões das bibliotecas">Obter versões</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" title="Funções administrativas na clisitef">Administrativo</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" title="ObtemQtdTrnPendentes">Obtem Qtd Trn Pendentes</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td valign="center" align="right">Funções de pinpad</td>
                    <td>
                      <table cellSpacing="5">
                        <tbody>
                          <tr>
                            <td width="150">
                              <button type="button" className="btn1">Abre PinPad</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1">Fecha PinPad</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1">Presença PinPad</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" onClick={handleSubmit(handleWritePinpadMessage)}>Mensagem</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1">Mensagem permanente</button>
                            </td>
                          </tr>
                          <tr>
                            <td width="150">
                              <button type="button" className="btn1">Sim/Não</button>
                            </td>
                            <td width="150">
                              <button type="button" className="btn1" title="Obtém informações do PinPad">Informações</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
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

export default AgenteCliSiTef;
