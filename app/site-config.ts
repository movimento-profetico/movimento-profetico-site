// Preencha com os links diretos oficiais antes de publicar.
// Enquanto ios/android estiverem vazios, os botões de loja ficam OCULTOS
// (app ainda não está nas lojas). Assim que preencher, eles reaparecem sozinhos
// na home e na página /confirmado. Meta: Google Play primeiro (~24/09).
export const storeLinks = { ios: '', android: '' };

export const hasStoreLinks = Boolean(storeLinks.ios || storeLinks.android);
