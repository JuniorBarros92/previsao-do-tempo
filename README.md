# Previsão do Tempo

Aplicação React + Vite que consome a API do OpenWeather para exibir a previsão do tempo atual e para 5 dias.

Principais pontos
- Tema: interface moderna com estilo "sky blue neo-modern" e glassmorphism.
- Busca por cidade com resultados atuais e previsões.

Requisitos
- Node.js (v16+ recomendado)

Instalação e execução
1. Instale dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz (veja `.env.example`) com sua chave da API OpenWeather:

```bash
# .env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY_HERE
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
```

4. Build de produção:

```bash
npm run build
```

Notas de segurança
- Não comite o arquivo `.env` com chaves reais. Este repositório já contém `.env` no `.gitignore`.
- Se você acidentalmente comitou uma chave, revogue/rotacione a chave na conta do OpenWeather.

Contribuição
- Abra issues ou pull requests para melhorias visuais, correções e novas funcionalidades.

Licença
- Este projeto está licenciado sob MIT. Veja o arquivo `LICENSE`.

Contato
- Repositório: `https://github.com/JuniorBarros92/previsao-do-tempo`
