import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (typeof window === 'undefined') return () => {};

    if (window.innerWidth < 815) setIsMobile(true);
    else setIsMobile(false);

    return () => {};
  }, []);

  return isMobile;
}
