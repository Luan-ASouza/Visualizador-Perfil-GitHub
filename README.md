# Visualizador de Perfil do GitHub

![GitHub Profile Viewer Screenshot](screenshot.png)

Um aplicativo web simples e interativo para buscar e visualizar perfis de usuários do GitHub. Insira um nome de usuário do GitHub para ver rapidamente detalhes do perfil, como avatar, nome, biografia, número de seguidores e repositórios.

## Funcionalidades

- **Busca de Usuário:** Pesquise perfis do GitHub por nome de usuário.
- **Exibição de Perfil:** Veja informações essenciais do perfil, incluindo avatar, nome, biografia, seguidores e seguidos.
- **Lista de Repositórios:** Visualize os 10 repositórios mais recentes do usuário, com detalhes como estrelas, forks, watchers e linguagem principal.
- **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela.
- **Tratamento de Erros:** Mensagens claras para usuários não encontrados ou problemas na API.

## Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação web.
- **CSS3:** Estilização, incluindo `reset.css`, `styles.css`, `animations.css` e `responsive.css`.
- **JavaScript ES6+:** Lógica de busca, interação com a API do GitHub e manipulação do DOM.
- **GitHub API:** Para buscar dados de perfis e repositórios.
- **Devicon:** Para o ícone do GitHub.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Visualizador-Perfil-GitHub.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd Visualizador-Perfil-GitHub
   ```
3. **Abra o arquivo `index.html` no seu navegador.**

   Alternativamente, você pode usar uma extensão de servidor local (como o Live Server para VS Code) para abrir o `index.html` e ter um recarregamento automático.

4. **Digite um nome de usuário do GitHub** no campo de busca e pressione "Buscar" ou `Enter`.

## Estrutura do Projeto

```
.
├── index.html                  # Página principal da aplicação
├── README.md                   # Este arquivo
└── src/
    ├── css/
    │   ├── animations.css      # Estilos para animações
    │   ├── reset.css           # Reset de estilos CSS
    │   ├── responsive.css      # Estilos para responsividade
    │   └── styles.css          # Estilos globais da aplicação
    └── js/
        ├── api.js              # Funções para interação com a API do GitHub
        ├── index.js            # Lógica principal da aplicação e event listeners
        ├── ui.js               # Funções para manipulação e renderização da interface do usuário
        └── utils.js            # Funções utilitárias (validação, tratamento de erros)
```

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
