import { atom } from "jotai";

export const enteredEmailAtom = atom<{
  value: string;
  isValid: boolean;
  isChanged: boolean;
}>({
  value: "",
  isValid: false,
  isChanged: false,
});

export const enteredNameAtom = atom<{
  value: string;
  isValid: boolean;
  isChanged: boolean;
}>({
  value: "",
  isValid: false,
  isChanged: false,
});

export const enteredPositionAtom = atom<string | null>(null);

export const supportPathAtom = atom<string | null>(null);
