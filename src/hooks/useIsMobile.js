import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    if (window.innerWidth < 815) setIsMobile(true);
    else setIsMobile(false);

    setHasMounted(true);

    return () => {};
  }, []);

  return { isMobile, hasMounted };
}
