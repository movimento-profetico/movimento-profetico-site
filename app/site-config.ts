// Links diretos oficiais das lojas. Enquanto estiveram vazios, os botões de
// loja ficavam OCULTOS em todo o site; preenchidos em 2026-10-05, eles voltam
// sozinhos na home e em /confirmado, além da página /baixar.
//
// Os dois listings foram conferidos públicos antes de preencher (HTTP 200 e a
// página real do app, não "item não encontrado").
//
// FONTE ÚNICA: /baixar e o redirect por sistema operacional no vercel.json
// apontam para estas mesmas URLs. Se mudar aqui, mude lá — o vercel.json não
// consegue importar deste arquivo.
export const storeLinks = {
  ios: 'https://apps.apple.com/br/app/id6817124101',
  android: 'https://play.google.com/store/apps/details?id=br.org.movimentoprofetico.app',
};

export const hasStoreLinks = Boolean(storeLinks.ios || storeLinks.android);
