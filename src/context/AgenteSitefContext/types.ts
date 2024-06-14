/* eslint-disable @typescript-eslint/no-explicit-any */
export enum CommandId {
  ValorArmazenar = 0,
  MensagemVisorOperador = 1,
  MensagemVisorCliente = 2,
  MensagemDoisVisores = 3,
  TextoTituloMenu = 4,
  RemoveMensagemVisorOperador = 11,
  RemoveMensagemVisorCliente = 12,
  RemoveMensagemDoisVisores = 13,
  LimparTextoTituloMenu = 14,
  CabecalhoInformacoesAdicionais = 15,
  RemoveCabecalho = 16,
  RespostaSimNao = 20,
  MenuOpcoes = 21,
  MensagemAguardarTecla = 22,
  InterromperColetaDados = 23,
  ColetaCampoTamanhoVariavel = 30,
  ColetaNumeroCheque = 31,
  ColetaCampoMonetario = 34,
  ColetaCodigoBarras = 35,
  ColetaCampoMascarado = 41,
  CancelaOperacao = -1
}
export interface Session {
  sessionId?: string;
  usandoSessao?: boolean;
  empresa?: string;
  terminal?: string;
  siTefIP?: string;
  ret?: any[];
  continua?: number;
  cupomFiscal?: string;
  dataFiscal?: string;
  horaFiscal?: string;
}

export interface AgentState {
  available: boolean,
  message: string
}

export interface PinpadState extends AgentState {}

export interface InicioValores {
  sitefIp?: string;
  storeId?: string;
  terminalId?: string;
  valor: string;
  cupomFiscal: string;
  dataFiscal: string;
  horaFiscal: string;
  operador: string;
  trnParamAdic: string;
  sessaoParams: string;
}

export interface InstanciaValores extends InicioValores {
  parcelas?: number;
}

export enum InstanciaVendaStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE' 
}

export enum TypeField {
  NaoExistemInformacoes = -1,
  ColetaDadosTransacao = 0,
  DadosConfirmacaoTransacao = 1,
  CodigoFuncaoSiTef = 2,
  OpcaoMenuNavegacao10 = 10,
  OpcaoMenuNavegacao99 = 99,
  OpcaoMenuNavegacao3000 = 3000,
  OpcaoMenuNavegacao3999 = 3999,
  ModalidadePagamento = 100,
  TextoRealModalidadePagamento = 101,
  TextoDescritivoModalidadePagamento = 102,
  DataHoraTransacao = 105,
  TransacaoCancelada = 110,
  TextoRealModalidadeCancelamento = 111,
  TextoDescritivoModalidadeCancelamento = 112,
  ModalidadeAjuste = 115,
  LinhaAutenticacaoCheque = 120,
  PrimeiraViaComprovante = 121,
  SegundaViaComprovante = 122,
  TipoComprovante = 123,
  CodigoVoucher = 125,
  ValorTroco = 130,
  IndiceInstituicao = 131,
  TipoCartao = 132,
  NSUSiTef = 133,
  NSUHost = 134,
  CodigoAutorizacao = 135,
  BinCartao = 136,
  SaldoPagar = 137,
  ValorTotalRecebido = 138,
  ValorEntrada = 139,
  DataPrimeiraParcela = 140,
  ValorGorjeta = 143,
  ValorDevolucao = 144,
  ValorPagamento = 145,
  ValorCancelar = 146,
  Trilha1 = 150,
  Trilha2 = 151,
  SenhaCliente = 153,
  NovoValorPagamento = 154,
  TipoCartaoBonus = 155,
  NomeInstituicao = 156,
  CodigoEstabelecimento = 157,
  CodigoRedeAutorizadora = 158,
  NumeroCupomOriginal = 160,
  IdentificadorCupomPagamento = 161,
  VendaParceladaEstabelecimento = 170,
  NumeroMinimoParcelasEstabelecimento = 171,
  NumeroMaximoParcelasEstabelecimento = 172,
  ValorMinimoParcelaEstabelecimento = 173,
  VendaParceladaAdministradora = 174,
  NumeroMinimoParcelasAdministradora = 175,
  NumeroMaximoParcelasAdministradora = 176,
  CampoNumericoPBM = 177,
  CampoAlfanumericoPBM = 178,
  SaldoDisponivel = 200,
  SaldoBloqueado = 201,
  CodigoSupervisor = 500,
  TipoDocumentoConsultar = 501,
  NumeroDocumento = 502,
  TaxaServico = 504,
  NumeroParcelas = 505,
  DataPredatado = 506,
  PrimeiraParcelaAVista = 507,
  IntervaloDiasEntreParcelas = 508,
  MesFechado = 509,
  GarantiaPredatado = 510,
  NumeroParcelasCDC = 511,
  NumeroCartaoCreditoDigitado = 512,
  DataVencimentoCartao = 513,
  CodigoSegurancaCartao = 514,
  DataTransacaoCancelar = 515,
  NumeroDocumentoCancelar = 516,
  NumeroCheque = 517,
  CodigoItem = 518,
  CodigoPlanoPagamento = 519,
  NSUOriginal = 520,
  NumeroIdentidade = 521,
  NumeroTelefone = 522,
  DDDTelefone = 523,
  ValorPrimeiraParcela = 524,
  ValorDemaisParcelas = 525,
  QuantidadeCheques = 526,
  DataVencimentoCheque = 527,
  DataAberturaConta = 529,
  AutorizacaoSupervisorDigitada = 530,
  AutorizacaoSupervisorEspecial = 531,
  QuantidadeParcelasCheques = 532,
  DadosAdicionaisVenda = 533,
  EmitenteCheque = 534,
  DocumentoPagoTransacao = 535,
  RegistrosRetornoConsultaCheque = 536,
  CodigoAreaCidadeCheque = 537,
  Endereco = 550,
  NumeroEndereco = 551,
  AndarEndereco = 552,
  ConjuntoEndereco = 553,
  BlocoEndereco = 554,
  CEPEndereco = 555,
  BairroEndereco = 556,
  CPFConsultaAVS = 557,
  ResultadoConsultaAVS = 558,
  NumeroDiasPredatado = 559,
  NumeroCiclos = 560,
  CodigoOcorrencia = 561,
  CodigoLoja = 562,
  CodigoPDV = 563,
  DadosRetornados = 564,
  RamalTelefone = 565,
  OrgaoExpedidorRG = 566,
  EstadoEmissaoRG = 567,
  DataExpedicaoRG = 568,
  MatriculaOperador = 569,
  NomeOperador = 570,
  MatriculaConferente = 571,
  NomeConferente = 572,
  PercentualJurosAplicado = 573,
  MatriculaAutorizador = 574,
  DataCupomFiscalOriginal = 575,
  HoraCupomFiscalOriginal = 576,
  DadosCarne = 577,
  CodigoMilhasDiferenciadas1 = 578,
  ValorMilhasDiferenciadas1 = 579,
  CodigoMilhasDiferenciadas2 = 580,
  ValorMilhasDiferenciadas2 = 581,
  TipoCodigoExterno = 582,
  CodigoExterno = 583,
  CodigoInstituicaoAutorizadoraCelular = 587,
  CodigoEstabelecimentoAutorizadorCelular = 588,
  DigitoVerificador = 593,
  CEPLocalidadeTerminal = 594,
  CodigoFilialRecargaCelular = 597,
  CodigoRedeAutorizadoraRecargaCelular = 599,
  DataVencimentoTitulo = 600,
  ValorPago = 601,
  ValorOriginal = 602,
  ValorAcrescimo = 603,
  ValorAbatimento = 604,
  DataContabilPagamento = 605,
  NomeCedenteTitulo = 606,
  IndiceDocumentoPagamentoLote = 607,
  ModalidadePagamentoCorrespondenteBancario = 608,
  ValorTotalTitulosPagosLote = 609,
  ValorTotalTitulosNaoPagosLote = 610,
  NSUCorrespondenteBancario = 611,
  TipoDocumento = 612,
  DadosCheque = 613,
  NSUPagamento = 614,
  NSUOriginalCancelamento = 620,
  NSUCorrespondenteBancarioOriginal = 621,
  ValorBeneficio = 622,
  CodigoRodapeComprovante = 623,
  CodigoBarrasPago = 624,
  ReciboRetirada = 625,
  NumeroBanco = 626,
  Agencia = 627,
  DigitoAgencia = 628,
  Conta = 629,
  DigitoConta = 630,
  ValorDinheiro = 631,
  ValorCheque = 632,
  NomeDepositante = 633,
  DocumentoOriginalCorrespondenteBancario = 634,
  ChaveUsuario = 635,
  SequencialChaveUsuario = 636,
  CodigoAgenciaRelacionamento = 637,
  NumeroChequeCB = 638,
  NumeroFatura = 639,
  NumeroConvenio = 640,
  DataInicialExtrato = 641,
  DataFinalExtrato = 642,
  PeriodoApuracao = 643,
  CodigoReceitaFederal = 644,
  ValorReceitaBruta = 645,
  PercentualAplicado = 646,
  ValorPrincipal = 647,
  ValorMulta = 648,
  ValorJuros = 649,
  DadoPinPad = 670,
  OperadoraValeGas = 700,
  ProdutoValeGas = 701,
  NumeroValeGas = 702,
  NumeroReferencia = 703,
  CodigoGPS = 704,
  CompetenciaGPS = 705,
  IdentificadorContribuinte = 706,
  ValorINSS = 707,
  ValorOutrasEntidades = 708,
  PermitePagamentoContasDinheiro = 709,
  PermitePagamentoContasCheque = 710,
  PermitePagamentoContasTEFDebito = 711,
  PermitePagamentoContasTEFCredito = 712,
  FormasPagamentoTransacao = 713,
  ValorSaque = 714,
  NumeroPedido = 715,
  ValorLimiteDepositoCB = 716,
  ValorLimiteSaqueCB = 717,
  ValorLimiteSaquePagamentoCB = 718,
  ValorProdutoValeGas = 719,
  ValorMinimoPagamento = 722,
  IdentificacaoClienteCarrefour = 723,
  VendaCreditoParceladaPlano = 724,
  VendaCreditoAutorizacaoVista = 725,
  VendaCreditoAutorizacaoParcelaPlano = 726,
  VendaBoleto = 727,
  ValorMaximoPagamento = 729,
  NumeroMaximoFormasPagamento = 730,
  TipoPagamentoHabilitado = 731,
  DadosEnviarPagamento = 732,
  LimiteMinimoVendaPromocoes = 734,
  ValorSugeridoProduto = 738,
  ClientePreferencial = 739,
  ValorPagueFacilCB = 750,
  ValorTarifaPagueFacilCB = 751,
  CNPJCredenciadoraNFCE = 950,
  BandeiraNFCE = 951,
  NumeroAutorizacaoNFCE = 952,
  CodigoCredenciadoraSAT = 953,
  DataValidadeCartao = 1002,
  NomePortadorCartao = 1003,
  QuantidadeMedicamentosPBM = 1010,
  IndiceMedicamentoPBM = 1011,
  CodigoMedicamentoPBM = 1012,
  QuantidadeAutorizadaPBM = 1013,
  PrecoMaximoConsumidorPBM = 1014,
  PrecoRecomendadoConsumidorPBM = 1015,
  PrecoVendaFarmaciaPBM = 1016,
  ValorReembolsoFarmaciaPBM = 1017,
  ValorReposicaoFarmaciaPBM = 1018,
  ValorSubsidioConvenioPBM = 1019,
  CNPJConvenioPBM = 1020,
  CodigoPlanoDescontoPBM = 1021,
  ReceitaMedicaPBM = 1022,
  CRMPBM = 1023,
  UFPBM = 1024,
  DescricaoProdutoPBM = 1025,
  CodigoProdutoPBM = 1026,
  QuantidadeProdutoPBM = 1027,
  ValorProdutoPBM = 1028,
  DataReceitaMedicaPBM = 1029,
  CodigoAutorizacaoPBM = 1030,
  QuantidadeEstornadaPBM = 1031,
  CodigoEstornoPBM = 1032,
  PrecoRecomendadoConsumidorVistaPBM = 1033,
  PrecoRecomendadoConsumidorDescontoFolhaPBM = 1034,
  PercentualReposicaoFarmaciaPBM = 1035,
  ComissaoReposicaoPBM = 1036,
  TipoAutorizacaoPBM = 1037,
  CodigoConveniadoPBM = 1038,
  NomeConveniadoPBM = 1039,
  TipoMedicamentoPBM = 1040,
  DescricaoMedicamentoPBM = 1041,
  CondicaoVendaPBM = 1042,
  PrecoFuncionalCardPBM = 1043,
  PrecoPraticadoPBM = 1044,
  StatusMedicamentoPBM = 1045,
  QuantidadeReceitadaPBM = 1046,
  ReferenciaPBM = 1047,
  IndicadorVendaPBM = 1048,
  DataNascimento = 1051,
  NomeMae = 1052,
  DadosAdicionaisACSP = 1058,
  RegistroAnaliticoCHECKCHECK = 1100,
  RegistroAnaliticoACSP = 1101,
  RegistroAnaliticoSERASA = 1102,
  ImagemTelaAnaliticaACSP = 1103,
  ImagemTelaAnaliticaSERASA = 1104,
  MotivoCancelamentoACSP = 1105,
  TipoConsultaACSP = 1106,
  CNPJEmpresaConveniada = 1107,
  CodigoAdministradora = 1108,
  DadosTabelaTelecheque = 1109,
  MatriculaMotorista = 1110,
  PlacaVeiculo = 1111,
  Quilometragem = 1112,
  QuantidadeLitros = 1113,
  CombustivelPrincipal = 1114,
  ProdutosCombustivel = 1115,
  CodigoProdutoHost = 1116,
  Horimetro = 1117,
  LinhaCredito = 1118,
  TipoMercadoria = 1119,
  Ramo = 1120,
  CasasDecimaisPrecosUnitarios = 1121,
  QuantidadeMaximaProdutosVenda = 1122,
  TamanhoCodigoProduto = 1123,
  CodigoVeiculo = 1124,
  NomeEmpresa = 1125,
  CasasDecimaisQuantidade = 1126,
  ListaPerguntas = 1128,
  PermiteColetaProduto = 1129,
  CodigoLimite = 1131,
  QuantidadeTitulares = 1132,
  DataAberturaEmpresa = 1133,
  NomeTitular = 1134,
  ComplementoEndereco = 1135,
  Cidade = 1136,
  Estado = 1137,
  MenuValoresSPTrans = 1152,
  ProdutoValorFaceGift = 1160,
  EmbossoCartao = 1190,
  TotalConsultasAnteriores = 1200,
  ValorAcumuladoConsultasAnteriores = 1201,
  TotalConsultasDia = 1202,
  ValorAcumuladoConsultasDia = 1203,
  TotalConsultasChequesPredatados = 1204,
  ValorAcumuladoChequesPredatados = 1205,
  VendedorPBM = 1206,
  SenhaPBM = 1207,
  CodigoRetornoPBM = 1208,
  OrigemPBM = 1209,
  NSUHostAutorizadorTransacaoCancelada = 1321,
  TipoCriptografia = 2006,
  IndiceMasterKey = 2007,
  ChaveCriptografia = 2008,
  SenhaCartao = 2009,
  CodigoRespostaAutorizador = 2010,
  BinRede = 2011,
  NumeroSerialCHIP = 2012,
  RegistroControleCHIP = 2013,
  SaldoComum = 2014,
  PANCartaPresente = 2015,
  DataPrimeiroVencimento = 2017,
  ValorTotal = 2018,
  ValorFinanciado = 2019,
  PercentualMulta = 2020,
  JurosMora = 2047,
  TaxaAdministracao = 2048,
  MenuProdutoSelecionadoVisanet = 2053,
  TipoCreditoCDC = 2054,
  DataHoraSitefLocal = 2055,
  DiaSemanaSitefLocal = 2056,
  DataHoraSitefGMT = 2057,
  DiaSemanaSitefGMT = 2058,
  DadosFormaPagamentoSPTrans = 2059,
  ValorPagamentoDinheiro = 2064,
  CodigoConsultaChequeEMS = 2065,
  MensagemAutorizadorMenuValores = 2067,
  CodigoServico = 2078,
  ValorServico = 2079,
  MenuProdutos = 2081,
  NossoNumero = 2082,
  ValorTotalProduto = 2083,
  CodigoProdutoValeGas = 2086,
  DemonstrativoPrazos = 2087,
  CancelamentoTotalParcial = 2088,
  NumeroIdentificacaoFatura = 2089,
  TipoCartaoLido = 2090,
  StatusUltimaLeituraCartao = 2091,
  CodigoAtendente = 2093,
  TransacaoOffline = 2103,
  SenhaTemporaria = 2109,
  ValorTarifaRecargaCelular = 2124,
  NumeroParcelaHotcard = 2125,
  SequencialTransacaoHotcard = 2126,
  RodapeComprovanteViaEstabelecimento = 2301,
  CodigoDepositanteCB = 2320,
  CodigoCliente = 2321,
  SequenciaCartaoCB = 2322,
  ViaCartaoCB = 2323,
  TipoExtratoCB = 2324,
  ValorLimiteTransferenciaCB = 2325,
  ValorLimiteColetaCPFCNPJCB = 2326,
  CPFCNPJProprietarioCB = 2327,
  CPFCNPJPortadorCB = 2328,
  TipoDocumentoProprietarioCB = 2329,
  TipoDocumentoPortadorCB = 2330,
  PermitePagamentoCartaoCB = 2331,
  ValorTransferencia = 2332,
  IdentificacaoTransacao = 2333,
  PinCode = 2334,
  DicaFormatoCampo = 2355,
  TransacaoDebitoPagamentoCarne = 2361,
  AutorizadorDiferenciadoDebito = 2362,
  TransacaoCreditoPagamentoCarne = 2363,
  AutorizadorDiferenciadoCredito = 2364,
  PontosResgatar = 2369,
  ColetaDadosAdicionaisCliente = 2421,
  DataConfirmacaoPositiva = 2467,
  DataDDMMConfirmacaoPositiva = 2468,
  DataMMAAConfirmacaoPositiva = 2469,
  CampoPontoFlutuante = 2470,
  MensagemPinpad = 2601,
  SementeHash = 2602,
  ModalidadeLeituraCartaoFuncao431 = 2603,
  InformacaoAdicionalAtivacaoRecargaGIFT = 2699,
  ValorRecargaCartaoCredito = 2925,
  ValorRecargaCartaoDebito = 2965,
  VendaParceladaCrediario = 2974,
  NumeroMinimoParcelasCrediario = 2975,
  NumeroMaximoParcelasCrediario = 2976,
  MenuGerencialConsultaAVS = 3481,
  MenuCrediario = 3988,
  MenuSimulacaoCrediario = 3989,
  StatusPreAutorizacaoPBM = 4000,
  CRFPBM = 4001,
  UFCRFPBM = 4002,
  TipoVendaPBM = 4003,
  ValorTotalPBM = 4004,
  ValorVistaPBM = 4005,
  ValorCartaoPBM = 4006,
  NossoNumeroPBM = 4007,
  PercentualDescontoAdministradoraPBM = 4008,
  PrecoBrutoPBM = 4016,
  PrecoLiquidoPBM = 4017,
  ValorReceberLojaPBM = 4018,
  NumeroLoteGeradoCentralPBM = 4019,
  ValorTotalReceberLojaPBM = 4020,
  SomaValoresOperacaoPBM = 4022,
  NomeOperadoraPBM = 4023,
  NomeEmpresaConveniadaPBM = 4024,
  QuantidadeDependentesPBM = 4025,
  CodigoDependentePBM = 4026,
  NomeDependentePBM = 4027,
  ValorReceberConveniadoPBM = 4028,
  ValorDescontoTotalPBM = 4029,
  ValorLiquidoTotalPBM = 4030,
  CodigoOperadoraSelecionadaPBM = 4031,
  CampoRetornoDadosLivresTransacoesPBM = 4032,
  TipoDocumentoPBM = 4033,
  DadosResgateBonus = 4034,
  CodigoRespostaPBM = 4039,
  ProdutoFracionadoPBM = 4040,
  PacienteIDPBM = 4041,
  ReceitaIDPBM = 4043,
  ReceitaItemIDPBM = 4044,
  ReceitaUsoContinuoPBM = 4045,
  ProdutoManipuladoPBM = 4046,
  ProdutoManipuladoPBMValorOriginal = 4047,
  ValorProdutoAprovadoDescontoPBM = 4058,
  IdentificacaoLoja = 4076,
  NSUFEPAS = 4077,
  CPFCNPJBeneficiario = 4095,
  CPFCNPJSacador = 4096,
  CPFCNPJPagador = 4097,
  ErroComunicacao = 4100,
  CupomClienteDisponivel = 4125,
  CupomEstabelecimentoDisponivel = 4126,
  QuantidadeDiasCuponsDisponiveis = 4127,
  FlagCartaoPrePago = 4221,
  AguardandoLeituraCartao = 5000,
  AguardandoDigitacaoSenha = 5001,
  AguardandoDigitacaoConfirmacaoPositiva = 5002,
  AguardandoLeituraBilheteUnico = 5003,
  AguardandoRemocaoBilheteUnico = 5004,
  TransacaoFinalizada = 5005,
  ConfirmaDadosFavorecido = 5006,
  SiTefConectado = 5007,
  SiTefConectando = 5008,
  ConsultaOK = 5009,
  ColherAssinatura = 5010,
  ColetaNovoProduto = 5011,
  ConfirmaOperacao = 5012,
  ConfirmaCancelamento = 5013,
  ConfirmaValorTotal = 5014,
  ConclusaoRecargaBilheteUnico = 5015,
  AguardandoLeituraCartaoModalidade29 = 5059,
  InicioTransacaoCorrespondenteBancario = 5501
}

export const TypeFieldDescription = {
  [TypeField.NaoExistemInformacoes]: 'Não existem informações que podem/devem ser tratadas pela automação',
  [TypeField.ColetaDadosTransacao]: 'A rotina está sendo chamada para indicar que acabou de coletar os dados da transação e irá iniciar a interação com o SiTef para obter a autorização',
  [TypeField.DadosConfirmacaoTransacao]: 'Dados de confirmação da transação. Para ambientes com múltiplos servidores será retornado no seguinte formato: <Dados_Confirmacao>;<Indice_SiTef>;<Endereco_SiTef>',
  [TypeField.CodigoFuncaoSiTef]: 'Informa o código da função SiTef utilizado na mensagem enviada para o servidor',
  [TypeField.OpcaoMenuNavegacao10]: 'Informa qual a opção selecionada no menu de navegação de transações seguindo a mesma codificação utilizada para definir as restrições no pagamento descritas no item Restrição ou habilitação das formas de pagamento',
  [TypeField.OpcaoMenuNavegacao3000]: 'Informa qual a opção selecionada no menu de navegação de transações seguindo a mesma codificação utilizada para definir as restrições no pagamento descritas no item Restrição ou habilitação das formas de pagamento'
};

export enum FormasPagamentoTransacao {
  PagamentoGenerico = 0,
  Cheque = 1,
  Debito = 2,
  Credito = 3,
  Fininvest = 4,
  CartaoBeneficio = 5,
  CreditoCentralizado = 6,
  CartaoCombustivel = 7,
  ParceleMaisRedecard = 8,
  BeneficioRefeicaoWappa = 10,
  BeneficioAlimentacaoWappa = 11,
  CartaoInfocard = 12,
  PayPass = 13,
  VendaCartaoGift = 15,
  DebitoParaPagamentoDeCarne = 16,
  CreditoParaPagamentoDeCarne = 17,
  VendaCartaoQualidade = 28,
  Telemarketing = 100,
  CancelamentoVendaCartaoQualidade = 101,
  MenuTransacoesGerenciais = 110,
  TesteComunicacaoSiTef = 111,
  MenuReimpressao = 112,
  ReimpressaoComprovanteEspecifico = 113,
  ReimpressaoUltimoComprovante = 114,
  PreAutorizacao = 115,
  CapturaPreAutorizacao = 116,
  AjustePreAutorizacao = 117,
  ConsultaPreAutorizacao = 118,
  ConsultaTransacoesPendentesTerminal = 130,
  ConsultaTransacoesPendentesDocumentoFiscal = 131,
  ConsultaBonus = 150,
  ConsultaSaldoCartaoPresente = 151,
  ConsultaSaldoCartaoGift = 152,
  ConsultasCartaoEMS = 160,
  VendasCartaoEMS = 161,
  CancelamentoNormal = 200,
  CancelamentoTelemarketing = 201,
  CancelamentoPreAutorizacao = 202,
  CancelamentoCapturaPreAutorizacao = 203,
  CancelamentoVendaCartaoCredito = 210,
  CancelamentoVendaCartaoDebito = 211,
  CancelamentoVendaCartaoCombustivel = 212,
  CancelamentoVendaCartaoGift = 213,
  CancelamentoConsultaBonus = 250,
  CancelamentoRecargaCartaoPresente = 251,
  CancelamentoAcumuloPontosCartaoBonus = 253,
  ResgatePontosCartaoBonus = 254,
  CancelamentoResgatePontosCartaoBonus = 255,
  AcumuloPontosCartaoBonus = 256,
  CancelamentoRecargaCartaoGift = 257,
  RecargaCartaoGift = 264,
  AtivacaoPagamentoVinculadoCartaoGift = 265,
  ConsultaCartaoGift = 266,
  AtivacaoCartaoGiftSemPagamento = 267,
  AtivacaoCartaoGiftComPagamento = 268,
  AtivacaoDesvinculadaCartaoGift = 269,
  PagamentoCorrespondenteBancario = 310,
  PagamentoContasComSaque = 311,
  ConsultaPagamentoDesvinculado = 312,
  PagamentoDesvinculado = 313,
  RecargaPrePagoCorbanSEComSaque = 314,
  SaqueParaPagamento = 315,
  CancelamentoPagamentoDesvinculado = 316,
  ConsultaLimitesCorrespondenteBancario = 317,
  RecargaPrePagoBradesco = 318,
  RecargaPrePagoBradescoDesvinculada = 319,
  RecargaPrePagoCorbanSE = 320,
  RecargaPrePagoCorbanSEDesvinculada = 321,
  DepositoIdentificado = 322,
  TransferenciaEntreContas = 323,
  PagueFacil = 324,
  RevalidacaoSenhaINSS = 325,
  VendaProdutoSemValor = 350,
  CancelamentoVendaProdutoSemValor = 351,
  ValeGas = 400,
  ValidacaoValeGas = 401,
  TrocoSurpresa = 410,
  AdesaoSeguro = 422,
  LeCartaoSeguro = 430,
  LeTrilhaChip = 431,
  ConsultaDetalhadaACSP = 500,
  ConsultaDetalhadaSerasa = 501,
  ConsultaSaldo = 600,
  ConsultaSaldoCartaoDebito = 601,
  ConsultaSaldoCartaoCredito = 602,
  SaqueCreditoTransferencia = 657,
  SaqueCredito = 658,
  MenuSaqueIBI = 660,
  ConsultaSaqueBancoIBI = 661,
  SaqueBancoIBI = 662,
  SaqueGetNet = 663,
  CancelamentoSaqueGetNet = 664,
  ResgatePontos = 665,
  EmissaoPontos = 667,
  CancelamentoEmissaoPontos = 668,
  CargaPrePago = 669,
  CancelamentoCargaPrePago = 670,
  ConsultaSaqueBancoIBI2 = 671,
  CancelamentoSaqueBancoIBI2 = 672,
  ConsultaSaldoPrePago = 680,
  SaqueDebito = 698,
  VendaOiPaggo = 700,
  CancelamentoOiPaggo = 701,
  PagamentoDeContas = 702,
  CancelamentoPagamentoCartaoBeneficio = 703,
  PagamentoDeFatura = 705,
  ConsultaParcelasCreditoAdm = 740,
  CargaTabelasPinpad = 770,
  CargaForcadaTabelasPinpadLocal = 771,
  CargaForcadaTabelasPinpadSiTef = 772,
  ObterInformacoesPinpad = 775,
  RecargaCartaoCredito = 899,
  CancelamentoRecargaCartaoCredito = 900,
  AlteracaoPreAutorizacao = 913
}

export enum TipoSelecaoParcelas {
  SELECT_TYPE = 'SELECAO',
  COLLECT_VALUE = 'COLETA'
};

export interface FinalizaValores {
  sitefIp?: string;
  storeId?: string;
  terminalId?: string;
  cupomFiscal?: string;
  dataFiscal?: string;
  horaFiscal?: string;
}