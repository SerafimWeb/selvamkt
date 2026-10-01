# Guia do Site · Maria Clara Silva / Selva MKT

## 1. O que dá para editar

### Textos, trabalhos, trajetória e contato
Ficam em `src/content.ts`. Depois de editar, rode `npm run build` e suba os arquivos (veja a seção 2).

### Fotos dos trabalhos
Ficam em `public/trabalhos/` (no servidor: `trabalhos/`). Cada trabalho em `src/content.ts` tem até 3 fotos em `photos`,
cada uma com `src` (foto grande), `thumb` (miniatura quadrada) e `caption` (legenda).

### Foto do topo
`public/foto-maria-clara.webp` (PNG recortado, fundo transparente, convertido para WebP).

### Currículo em PDF
Substitua `curriculo-maria-clara-silva.pdf` na raiz do site, mantendo o mesmo nome.

## 2. Como publicar SEM quebrar os outros projetos

O `public_html` também guarda projetos independentes: `/cybermech`, `/sede`, `/mercadointerativo`, `/serafim` e outros.
**Nunca apague nem substitua pastas inteiras no `public_html`.**

1. `npm install` (só na primeira vez) e `npm run build`, que gera a pasta `dist/`.
2. Envie **apenas** estes itens de `dist/` para a raiz do `public_html`, sobrescrevendo:
   - `index.html`
   - `assets/` (a pasta inteira; os nomes dos arquivos mudam a cada build)
   - `trabalhos/` (fotos dos trabalhos)
   - `foto-maria-clara.webp`
   - `favicon.svg`
   - `curriculo-maria-clara-silva.pdf`
3. **Não envie o `.htaccess`** sem revisar antes. Ele vale para todas as subpastas: os cabeçalhos de segurança (CSP) da raiz também se aplicam a `/cybermech`, `/sede` etc.
4. Abra `selvamkt.com.br` e cada subprojeto para conferir.

Os arquivos antigos de `assets/` podem ficar no servidor; eles não atrapalham.
O antigo `data/produtos.json` não é mais usado (a seção de produtos foi removida) e pode ser apagado do servidor.
