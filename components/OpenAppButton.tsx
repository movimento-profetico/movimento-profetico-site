'use client';

import { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';

const callback = 'movimentoprofetico://auth/callback';

function currentDeepLink() {
  const params = new URLSearchParams(window.location.search).toString();
  return params ? `${callback}?${params}` : callback;
}

export function OpenAppButton() {
  const [href, setHref] = useState<string>();

  useEffect(() => {
    const update = () => setHref(currentDeepLink());
    update();
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);

  return (
    <>
      <a className="open-app-button" href={href} aria-disabled={!href}
        onClick={(event) => { event.currentTarget.href = currentDeepLink(); }}>
        <Smartphone size={22} aria-hidden="true" /> Abrir aplicativo
      </a>
      <noscript><p>Ative o JavaScript neste navegador para abrir o aplicativo com os dados desta solicitação.</p></noscript>
    </>
  );
}
