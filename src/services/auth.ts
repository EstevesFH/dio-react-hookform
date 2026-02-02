// Serviço de autenticação simulado
// Em produção, isso deveria fazer uma chamada real para uma API

export interface IAuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    email: string;
    name: string;
  };
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

// Simula um delay de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Usuários mockados para teste
const MOCK_USERS = [
  {
    email: 'admin@teste.com',
    password: '123456',
    name: 'Administrador'
  },
  {
    email: 'user@teste.com',
    password: 'senha123',
    name: 'Usuário Teste'
  }
];

/**
 * Função de login simulada
 * Credenciais de teste:
 * - Email: admin@teste.com | Senha: 123456
 * - Email: user@teste.com | Senha: senha123
 */
export const login = async (credentials: ILoginCredentials): Promise<IAuthResponse> => {
  // Simula delay de rede (500ms - 1s)
  await delay(500 + Math.random() * 500);

  const user = MOCK_USERS.find(
    u => u.email === credentials.email && u.password === credentials.password
  );

  if (user) {
    // Simula geração de token JWT
    const token = btoa(`${user.email}:${Date.now()}`);
    
    return {
      success: true,
      message: 'Login realizado com sucesso!',
      token,
      user: {
        email: user.email,
        name: user.name
      }
    };
  }

  return {
    success: false,
    message: 'Email ou senha incorretos. Tente novamente.'
  };
};

/**
 * Salva o token no localStorage
 */
export const saveToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

/**
 * Remove o token do localStorage
 */
export const removeToken = (): void => {
  localStorage.removeItem('authToken');
};

/**
 * Obtém o token salvo
 */
export const getToken = (): string | null => {
  return localStorage.getItem('authToken');
};

/**
 * Verifica se o usuário está autenticado
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
