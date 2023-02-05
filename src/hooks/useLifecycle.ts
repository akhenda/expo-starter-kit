import { useCallback, useEffect, useRef } from 'react';

/**
 * https://usehooks-ts.com/react-hook/use-effect-once
 * https://usehooks-ts.com/react-hook/use-is-first-render
 * https://usehooks-ts.com/react-hook/use-update-effect
 */
export { useEffectOnce, useIsFirstRender, useUpdateEffect } from 'usehooks-ts';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
