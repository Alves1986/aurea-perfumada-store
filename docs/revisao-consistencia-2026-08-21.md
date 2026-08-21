# Revisão visual de consistência

A home, a página de kits e a página institucional “Como usar” foram revisadas em desktop e mobile após a unificação. As páginas internas exibem o mesmo cabeçalho, o breadcrumb aparece entre a navegação e o eyebrow da página, e o rodapé completo mantém logo, redes sociais, compartilhar, colunas de links e retorno ao topo.

No mobile, o cabeçalho permanece compacto, o conteúdo não apresenta overflow e o rodapé se empilha com espaçamento confortável. O menu recebeu estados de entrada e saída por opacidade e deslocamento, com transições desativadas quando `prefers-reduced-motion: reduce` estiver ativo.

O estado ativo da navegação usa a rota atual, com “Presentes” destacado em `/kits`, “A marca” em `/sobre` e “Como usar” destacado dentro do menu mobile. Build e testes Vitest passaram após a implementação.
