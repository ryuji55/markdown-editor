import { useState } from "react";

type ReturnValue = {
  (s: string): void;
};

type NewValue = {
  (nextValue: string): void;
};

export const useStateWithStorage = (
  init: string,
  key: string
): [string, ReturnValue] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init);

  const setValueWithStorage: NewValue = (nextValue) => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };

  return [value, setValueWithStorage];
};
