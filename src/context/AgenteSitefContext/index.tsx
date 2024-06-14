/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as agenteSitefService from './agente-sitef.service';
import { KEYS } from './constants';
import { AgentState, CommandId, FinalizaValores, FormasPagamentoTransacao, InicioValores, InstanciaValores, InstanciaVendaStatus, PinpadState, Session, TipoSelecaoParcelas, TypeField } from './types';

interface AgenteSitefContextType {
  agentState: AgentState,
  pinpadState: PinpadState,
  obtemEstado: () => Promise<void>;
  criaSessaoId: (sitefIp: string, storeId: string, terminalId: string, sessionParameters: string) => Promise<void>;
  destroiSessaoId: () => Promise<void>;
  obtemSessaoId: () => Promise<void>;
  obtemVersoes: () => Promise<void>;
  pinpadMensagem: (mensagem: string, persistente: boolean) => Promise<void>;
  pinpadPresente: () => Promise<void>;
  instanciarVenda: (tipo: number, funcao: FormasPagamentoTransacao, valores: InstanciaValores) => Promise<void>;
}

const AgenteSitefContext = createContext<AgenteSitefContextType | undefined>(undefined);

interface AgenteSitefProviderProps {
  children: ReactNode;
}

let sessao: Session = {};
let vendaInstanciaSucesso = false;
export const AgenteSitefProvider: React.FC<AgenteSitefProviderProps> = ({ children }) => {
  const [agentState, setAgentState] = useState<AgentState>({} as AgentState);
  const [pinpadState, setPinpadState] = useState<PinpadState>({} as PinpadState);
  

  const obtemEstado = async () => {
    try {
      const data = await agenteSitefService.getState();
      if (data.serviceStatus === 0) {
        let s = `Agent Version: [${data.serviceVersion}]<br/><br/>${data.serviceState}`;
        switch (data.serviceState) {
          case 0:
            s += ' - not initialized.';
            break;
          case 1:
            s += ' - agent ready to receive requests.';
            break;
          case 2:
            s += ' - IniciaFuncaoSiTefInterativo started successfully - waiting to continue.';
            break;
          case 3:
            s += ' - iterative process of clisitef in progress - waiting to continue.';
            break;
          case 4:
            s += ' - waiting to finish.';
            break;
          default:
            break;
        }
        if (data.sessionId) {
          s += `<br/><br/>Current session [${data.sessionId}]`;
        }
        setAgentState({
          message: s,
          available: true
        });
      } else {
        setAgentState({
          message: `${data.serviceStatus} - ${data.serviceMessage}`,
          available: false
        });
      }
    } catch (error: any) {
      setAgentState({
        message: error.message,
        available: false
      });
    }
  };

  const criaSessaoId = async (sitefIp: string, storeId: string, terminalId: string, sessionParameters: string, shouldPersist: boolean = false) => {
    console.log("Criando secao......")
    sessao = {
      ret: [],
      continua: 0,
      cupomFiscal: '',
      dataFiscal: '',
      horaFiscal: '',
    };

    try {
      const data = await agenteSitefService.createSession(sitefIp, storeId, terminalId, sessionParameters);
      if (data.serviceStatus === 0) {
        const newSession = {
          sessionId: data.sessionId,
          usandoSessao: true,
          empresa: storeId,
          terminal: terminalId,
          siTefIP: sitefIp,
        }

        sessao = newSession;

        if(shouldPersist) {
          localStorage.setItem(KEYS.SESSION_ID, JSON.stringify(newSession))
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const destroiSessaoId = async () => {
    sessao = {
      ret: [],
      continua: 0,
      cupomFiscal: '',
      dataFiscal: '',
      horaFiscal: '',
    };

    console.log('Ending session...');

    try {
      const data = await agenteSitefService.destroySession();
      if (data.serviceStatus === 0) {
        console.log('Session ended');
      } else {
        console.log(`${data.serviceStatus} - ${data.serviceMessage}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }

    sessao = {};
  };

  const obtemSessaoId = async () => {
    console.log('Getting session...');

    try {
      const data = await agenteSitefService.getSession();
      if (data.serviceStatus === 0) {
        sessao = { ...sessao, sessionId: data.sessionId, usandoSessao: true };
        console.log(`Current session [${data.sessionId}]`);
      } else {
        console.log(`${data.serviceStatus} - ${data.serviceMessage}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const obtemVersoes = async () => {
    console.log('Getting version...');

    try {
      const data = await agenteSitefService.getVersions(sessao.sessionId!);
      if (data.serviceStatus === 0) {
        console.log(
          `CliSiTef: [${data.clisitefVersion}]<br/>CliSiTefI: [${data.clisitefiVersion}]<br/>AgentCliSiTef: [${data.serviceVersion}]`
        );
      } else {
        console.log(`${data.serviceStatus} - ${data.serviceMessage}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const pinpadMensagem = async (mensagem: string, persistente: boolean) => {
    console.log('Writing message to pinpad...');
    try {
      const data = await agenteSitefService.pinpadMensagem(sessao?.sessionId!, mensagem, persistente);
      if (data.serviceStatus === 0) {
        throw new Error(data.serviceMessage)
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const pinpadPresente = async () => {
    console.log('Checking pinpad presence...');
  
    try {
      const data = await agenteSitefService.pinpadPresente(sessao.sessionId!);  
      if (data.serviceStatus !== 0) {
        console.log(`${data.serviceStatus} - ${data.serviceMessage}`);
      } else if (data.clisitefStatus === 0) {
        setPinpadState({
          message: 'PinPad absent',
          available: false
        });
      } else if (data.clisitefStatus === 1) {
        setPinpadState({
          message: 'PinPad present',
          available: false
        });
      } else {
        console.log(`Return ${data.clisitefStatus} from CliSiTef`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const continua = async (dados: any, args: any) => {
    try {
      const data = await agenteSitefService.continua(sessao.sessionId!, dados, sessao.continua!);

      if (data.serviceStatus !== 0) {
        console.log(`${data.serviceStatus} ${data.serviceMessage}`);
        // console.log(true);
        vendaInstanciaSucesso = false;
        return;
      }

      if (data.clisitefStatus !== 10000) {
        let s = "";

        if (data.clisitefStatus === 0) {
          s = JSON.stringify(sessao.ret);
          s = s.replace(/},{/g, "},<br>{");
           console.log(`finaliza(1, false, false)`);
        }
        console.log(`End - Return: ${data.clisitefStatus}<br>${s}`);
        console.log(true);
        vendaInstanciaSucesso = true;
        return;
      }

      //@todo limpar exibicao de mensagem.

      if (data.commandId !== CommandId.InterromperColetaDados) {
       console.log( "lastContents23 = ''");
      }
      switch (data.commandId) {
        case CommandId.ValorArmazenar:
          const item = {
            TipoCampo: data.fieldId,
            Valor: data.data
          };
          sessao.ret?.push(item);

          if (data.fieldId === TypeField.PrimeiraViaComprovante) {
            // @todo Armazenar cupom estabelecimento para impressao
            alert(`Cupom Estabelecimento: \n${data.data}`)
          };
          if (data.fieldId === TypeField.SegundaViaComprovante) {
            // @todo Armazenar cupom estabelecimento para impressao
            alert(`Cupom Cliente: \n${data.data}`);
          }
          await continua("", args);
          break;
        case CommandId.MensagemVisorOperador:
        case CommandId.MensagemVisorCliente:
        case CommandId.MensagemDoisVisores:
        case CommandId.TextoTituloMenu:
        case CommandId.CabecalhoInformacoesAdicionais:
          // @todo: Exibir mensagem de processamento
          alert(data.data);
          // document.getElementById("tef_titulo")!.innerHTML = data.data;
          await continua("", args);
          break;

        case CommandId.RemoveMensagemVisorOperador:
        case CommandId.RemoveMensagemVisorCliente:
        case CommandId.RemoveMensagemDoisVisores:
        case CommandId.LimparTextoTituloMenu:
        case CommandId.RemoveCabecalho:
          // @todo Remover mensagem da tela
          await continua("", args);
          break;

        case CommandId.MensagemAguardarTecla:
          // @todo Alterar para toast
          alert(`${data.data}`);
          await continua("", args);
          break;

        case CommandId.InterromperColetaDados:
          // @todo Venda cancelada pelo usuario ou operador, exibir confirmacao de cancelamento
          await continua("", args);
          break;

        case CommandId.RespostaSimNao:
          // @todo: Exibe swall de confirmacao
          if(confirm(data.data)) {
            continua(0, args)
          } else {
            continua(1, args)
          }
          break;

        case CommandId.MenuOpcoes:
          // Forma pagamento parcelado ou a vista
          await trataFormaPagamento(args);
          break;
        case CommandId.ColetaCampoTamanhoVariavel:
          // Seleciona Quantidade de Parcelas
          alert(data.data)
          await trataQuantidadeParcelas(args)
          break;
        case CommandId.ColetaNumeroCheque:
        case CommandId.ColetaCampoMonetario:
        case CommandId.ColetaCodigoBarras:
          let s = data.data;
          console.log(data.data);
          if (data.commandId === CommandId.MenuOpcoes) s = s.replace(/;/g, "<br/>");
          document.getElementById("tef_corpo")!.innerHTML = `<table><tr><td colspan="2">${s}</td></tr><tr><td colspan="2"><input type="text" id="DADOS" onkeypress="trataTecla(event);"/></td></tr><tr><td><input type="BUTTON" class="btn1" value="OK" onclick="trataColeta(0);"/></td><td><input type="BUTTON" class="btn1" value="Cancelar" onclick="trataColeta(-1);"/></td></tr></table>`;
          document.getElementById("tef_corpo")!.style.display = "block";
          setTimeout(() => {
            (document.getElementById("DADOS") as HTMLInputElement).focus();
          }, 100);
          break;

        default:
          console.error(`Unknown capture arrived. [${data.commandId}]`);
          await continua("", args);
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
      console.log(true);
    }
  };

  const inicio = async (tipo: number, funcao: FormasPagamentoTransacao, valores: InicioValores, options?: any) => {
    let ret: any[] = [];
    sessao = { ...sessao, ret, continua: 0, cupomFiscal: valores.cupomFiscal, dataFiscal: valores.dataFiscal, horaFiscal: valores.horaFiscal }

    console.log("Iniciando transação...");
    let args: any = {};
    if (tipo === 1) {
      args = {
        sitefIp: valores.sitefIp,
        storeId: valores.storeId,
        terminalId: valores.terminalId,
      };
    } else if (tipo === 2 && sessao.sessionId) {
      args = { sessionId: sessao.sessionId };
    }

    args = {
      ...args,
      functionId: funcao,
      trnAmount: valores.valor,
      taxInvoiceNumber: valores.cupomFiscal,
      taxInvoiceDate: valores.dataFiscal,
      taxInvoiceTime: valores.horaFiscal,
      cashierOperator: valores.operador,
      trnAdditionalParameters: valores.trnParamAdic,
      trnInitParameters: valores.sessaoParams,
    };

    try {
      const data = await agenteSitefService.startTransaction(args);

      if (data.serviceStatus !==  0) {
        // @todo: erro
        console.log(`Agente ocupado: ${data.serviceStatus} ${data.serviceMessage}`);
      } else if (data.clisitefStatus !== 10000) {
        // @todo: erro
        console.log(`Retorno ${data.clisitefStatus} da CliSiTef`);
      } else {
        sessao = { ...sessao, continua: 0, sessionId: data.sessionId };
        await continua("", options);
        if(vendaInstanciaSucesso) {
          alert('Venda finalizada com sucesso')
          await finaliza(1, false,false, valores)
        }
      }
    } catch (error: any) {
      console.error(`Erro: ${error.message}`);
    }
  };

  const instanciarVenda = async (tipo: number, funcao: FormasPagamentoTransacao, valores: InstanciaValores) => {
    const { parcelas, ...rest } = valores;
    let args = {} as any;
    args.formaPagamento = funcao;
    if(funcao === FormasPagamentoTransacao.Credito) args.parcelas = parcelas || 1
    vendaInstanciaSucesso = false;
    return await inicio(tipo, funcao, rest, args)
  } 

  const finaliza = async (confirma: number, reenviaParametrosSiTef: boolean, foraDoFluxo: boolean, valores: FinalizaValores) => {
    const args: any = {
      confirm: confirma,
    };

    if (reenviaParametrosSiTef) {
      args.sitefIp = valores.sitefIp;
      args.storeId = valores.storeId;
      args.terminalId = valores.terminalId;
      args.taxInvoiceNumber = valores.cupomFiscal;
      args.taxInvoiceDate = valores.dataFiscal;
      args.taxInvoiceTime = valores.horaFiscal;
    } else {
      args.sessionId = sessao.sessionId;
      args.taxInvoiceNumber = sessao.cupomFiscal || valores.cupomFiscal;
      args.taxInvoiceDate = sessao.dataFiscal || valores.dataFiscal;
      args.taxInvoiceTime = sessao.horaFiscal || valores.horaFiscal;
    }

    try {
      const data = await agenteSitefService.finishTransaction(args);

      if (data.serviceStatus !== 0) {
        alert(`${data.serviceStatus} ${data.serviceMessage}`);
        window.location.reload();
      } else if (foraDoFluxo) {
        console.log("finishTransaction");
        console.log(
          `serviceStatus: ${data.serviceStatus}<br>` +
          `clisitefStatus: ${data.clisitefStatus}`
        );
      }
    } catch (error: any) {
      console.log(`Erro: ${error.message}`);
    }
  };

  const trataFormaPagamento = async (args: any) => {
    if([FormasPagamentoTransacao.Credito, FormasPagamentoTransacao.Debito].includes(args.formaPagamento)) {
        if(args.parcelas === 1) {
          // A Vista
          alert('A Vista')
          await continua(1, args)          
        } else {
          // Parcelado pelo estabelecimento
          alert('Parcelado')
          await continua(2, args)
        }
    }
  }
  const trataQuantidadeParcelas = async (args: any) => {
    if(FormasPagamentoTransacao.Credito === args.formaPagamento) {
      await continua(args.parcelas, args)
    }
  }

  return (
    <AgenteSitefContext.Provider
      value={{
        obtemEstado,
        criaSessaoId,
        destroiSessaoId,
        obtemSessaoId,
        obtemVersoes,
        pinpadMensagem,
        pinpadPresente,
        pinpadState,
        agentState,
        instanciarVenda
      }}
    >
      {children}
    </AgenteSitefContext.Provider>
  );
};

export const useAgenteSitef = () => {
  const context = useContext(AgenteSitefContext);
  if (context === undefined) {
    throw new Error('useAgenteSitef must be used within an AgenteSitefProvider');
  }
  return context;
};
