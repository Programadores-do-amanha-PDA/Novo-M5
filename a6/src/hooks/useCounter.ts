import { useCallback, useState } from "react";

export default function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  // Função de incrementar o contador
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Função de decremento do contador
  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  // Função para resetar o contador
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
