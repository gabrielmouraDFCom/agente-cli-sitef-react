import axios, { AxiosResponse } from 'axios';

const agentUrl = 'https://127.0.0.1/agente/clisitef';

interface ServiceResponse {
  serviceStatus: number;
  serviceMessage: string;
  [key: string]: any;
}

export const getState = async (): Promise<ServiceResponse> => {
  try {
    const response: AxiosResponse<ServiceResponse> = await axios.get(`${agentUrl}/state`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const createSession = async (
  sitefIp: string,
  storeId: string,
  terminalId: string,
  sessionParameters: string
): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('sitefIp', sitefIp);
    params.append('storeId', storeId);
    params.append('terminalId', terminalId);
    params.append('sessionParameters', sessionParameters);

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/session`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const destroySession = async (): Promise<ServiceResponse> => {
  try {
    const response: AxiosResponse<ServiceResponse> = await axios.delete(`${agentUrl}/session`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const getSession = async (): Promise<ServiceResponse> => {
  try {
    const response: AxiosResponse<ServiceResponse> = await axios.get(`${agentUrl}/session`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const getVersions = async (sessionId: string): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('sessionId', sessionId);

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/getVersion`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const pinpadMensagem = async (
  sessionId: string,
  mensagem: string,
  persistente: boolean
): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('sessionId', sessionId);
    params.append('displayMessage', mensagem);
    params.append('persistent', persistente ? 'Y' : 'N');

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/pinpad/setDisplayMessage`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const pinpadPresente = async (sessionId: string): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('sessionId', sessionId);

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/pinpad/isPresent`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.response.status} - ${error.message}\n${error.response.data}`);
  }
};

export const startTransaction = async (args: any): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    Object.keys(args).forEach(key => {
      params.append(key, args[key]);
    });

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/startTransaction`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    console.log(error)
    throw new Error(`Error:`);
  }
};

export const continua = async (sessionId: string, dados: any, continua: number): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('sessionId', sessionId);
    params.append('data', JSON.stringify(dados));
    params.append('continue', String(continua));

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/continueTransaction`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    debugger;
    console.log(error);
    throw new Error(`Error continue transaction:`);
  }
};
export const finishTransaction = async (args: any): Promise<ServiceResponse> => {
  try {
    const params = new URLSearchParams();
    Object.keys(args).forEach(key => {
      params.append(key, args[key]);
    });

    const response: AxiosResponse<ServiceResponse> = await axios.post(`${agentUrl}/finishTransaction`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(`Error finish transaction:`);
  }
};