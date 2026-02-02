# 🔐 Projeto de Login com React + TypeScript + React Hook Form

## 📋 Descrição

Este é um projeto de tela de login profissional desenvolvido com React, TypeScript e React Hook Form. O projeto implementa validação de formulários, autenticação simulada e feedback visual completo para o usuário.

## ✨ Funcionalidades

- ✅ **Validação de formulário** com React Hook Form e Yup
- ✅ **TypeScript** para tipagem estática e maior segurança
- ✅ **Autenticação simulada** com serviço mock
- ✅ **Feedback visual** (loading, mensagens de erro e sucesso)
- ✅ **Validações em tempo real** (onBlur e onChange)
- ✅ **Design responsivo** com Styled Components
- ✅ **Acessibilidade** (estados disabled, placeholder, etc.)

## 🎨 Tecnologias Utilizadas

- **React 18.2.0**
- **TypeScript 4.7.4**
- **React Hook Form 7.34.0** - Gerenciamento de formulários
- **Yup 0.32.11** - Validação de schemas
- **Styled Components 5.3.5** - Estilização
- **@hookform/resolvers** - Integração React Hook Form + Yup

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   yarn install
   ```

2. **Executar o projeto:**
   ```bash
   yarn start
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:3000
   ```

## 🔑 Credenciais de Teste

Para testar a aplicação, use uma das seguintes credenciais:

### Opção 1:
- **Email:** `admin@teste.com`
- **Senha:** `123456`

### Opção 2:
- **Email:** `user@teste.com`
- **Senha:** `senha123`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   │   ├── index.tsx       # Componente de botão
│   │   ├── styles.ts       # Estilos do botão
│   │   └── types.ts        # Tipos TypeScript
│   └── Input/
│       ├── index.tsx       # Componente de input
│       ├── styles.ts       # Estilos do input
│       └── types.ts        # Tipos TypeScript
├── pages/
│   └── Login/
│       ├── index.tsx       # Página de login
│       ├── styles.ts       # Estilos da página
│       └── types.ts        # Tipos TypeScript
├── services/
│   └── auth.ts             # Serviço de autenticação
├── global.ts               # Estilos globais
└── index.tsx               # Ponto de entrada
```

## 🎯 Funcionalidades Implementadas

### 1. Validação de Formulário
- Email válido (formato de email)
- Senha mínima de 6 caracteres
- Campos obrigatórios
- Validação em tempo real

### 2. Autenticação
- Simulação de chamada API (delay de 500ms-1s)
- Armazenamento de token no localStorage
- Tratamento de erros
- Feedback de sucesso/erro

### 3. Estados do Formulário
- **Loading:** Desabilita campos e botão durante autenticação
- **Erro:** Exibe mensagem de erro com estilo
- **Sucesso:** Exibe mensagem de sucesso com dados do usuário

### 4. Experiência do Usuário
- Botão desabilitado enquanto o formulário é inválido
- Indicador visual de loading ("Entrando...")
- Mensagens de erro claras e em português
- Transições suaves nos elementos

## 🔒 Segurança

⚠️ **Nota importante:** Este é um projeto de demonstração. Em produção:

- Nunca armazene senhas em texto simples
- Use HTTPS para todas as requisições
- Implemente tokens JWT reais
- Use refresh tokens
- Valide dados no backend
- Implemente rate limiting
- Use variáveis de ambiente para configurações sensíveis

## 📚 Conceitos de TypeScript Aplicados

1. **Interfaces** para tipagem de objetos
2. **Type Safety** em props e estados
3. **Generics** com React Hook Form
4. **Union Types** para valores específicos
5. **Optional Properties** com `?`
6. **Type Inference** automática

## 🎓 Aprendizados

Este projeto demonstra:
- Como integrar React Hook Form com TypeScript
- Validação de formulários com Yup
- Gerenciamento de estado com hooks
- Styled Components com TypeScript
- Boas práticas de componentização
- Feedback visual para melhor UX

## 📝 Próximos Passos

- [ ] Adicionar roteamento (React Router)
- [ ] Criar página de dashboard pós-login
- [ ] Implementar "Esqueci minha senha"
- [ ] Adicionar autenticação com redes sociais
- [ ] Implementar refresh token
- [ ] Adicionar testes unitários
- [ ] Configurar CI/CD

## 👨‍💻 Autor

Desenvolvido como parte do Desafio DIO - Módulo TypeScript

## 📄 Licença

Este projeto é de código aberto para fins educacionais.