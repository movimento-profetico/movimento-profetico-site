import { storeLinks, hasStoreLinks } from '../app/site-config';

const stores = {
  ios: {
    label: 'Baixar na App Store',
    eyebrow: 'Disponível para iPhone',
    href: storeLinks.ios,
  },
  android: {
    label: 'Baixar no Google Play',
    eyebrow: 'Disponível para Android',
    href: storeLinks.android,
  },
};

export function StoreButtons({ platform = 'desktop' }: { platform?: 'ios' | 'android' | 'desktop' }) {
  // App ainda não está nas lojas: sem links, não renderiza nada.
  if (!hasStoreLinks) return null;
  return (
          <div className="store-buttons" aria-label="Baixar o aplicativo">
            {(['ios', 'android'] as const).map((key) => {
              const store = stores[key];
              const featured = platform === key;
              return (
                <a
                  key={key}
                  className={`store-button store-${key} ${featured ? 'featured' : ''}`}
                  href={store.href || undefined}
                  aria-disabled={!store.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={store.href ? `${store.label}, abre em nova aba` : store.label}
                >
                  <span className="store-icon-tile">{key === 'ios' ? (
                    <svg className="store-brand-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M17.05 12.536c.031 3.337 2.929 4.447 2.961 4.461-.024.078-.463 1.582-1.527 3.136-.92 1.344-1.874 2.683-3.378 2.711-1.478.027-1.953-.876-3.644-.876-1.69 0-2.218.848-3.618.903-1.452.055-2.558-1.453-3.486-2.792-1.896-2.738-3.345-7.737-1.4-11.112.966-1.676 2.692-2.737 4.565-2.765 1.426-.027 2.773.959 3.644.959.87 0 2.504-1.186 4.216-1.012.717.03 2.729.29 4.021 2.182-.104.065-2.4 1.397-2.354 4.205zM14.27 4.38c.771-.934 1.29-2.234 1.148-3.528-1.111.045-2.455.74-3.253 1.674-.714.827-1.34 2.151-1.171 3.419 1.239.096 2.505-.63 3.276-1.565z"/></svg>
                  ) : (
                    <svg className="store-brand-icon" viewBox="0 0 32 36" aria-hidden="true"><path fill="#4285F4" d="M2 1 19 18 2 35Z"/><path fill="#34A853" d="m2 1 22 12-5 5Z"/><path fill="#FBBC04" d="m24 13 7 4c.8.5.8 1.5 0 2l-7 4-5-5Z"/><path fill="#EA4335" d="m2 35 17-17 5 5Z"/></svg>
                  )}</span>
                  <span className="store-copy">
                    <small>{store.eyebrow}</small>
                    <strong>{store.label}</strong>
                  </span>
                  <span className="store-arrow" aria-hidden="true">→</span>
                </a>
              );
            })}
          </div>
  );
}
