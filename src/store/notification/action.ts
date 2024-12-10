import { atom } from "jotai";

import {
  enteredEmailAtom,
  enteredNameAtom,
  enteredPositionAtom,
  supportPathAtom,
} from "@/store/notification/atom";

/**
 * '가'(0xAC00) ~ '힣'(0xD7A3) 사이에 있는 문자인지 체크
 * @param {string} char 체크할 문자
 * @returns {boolean} 한글 여부
 */
const isKoreanChar = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return code >= 0xAC00 && code <= 0xD7A3;
};

export const setEmailAtom = atom<null, [string], void>(
  null,
  (_, set, value) => {
    const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = emailRegex.test(value);
    set(enteredEmailAtom, { value, isValid, isChanged: true });
  }
);

export const setNameAtom = atom<null, [string], void>(
  null,
  (_, set, value) => {
    const isKoreanOnly = value.split('').every(isKoreanChar);
    const isValidLength = value.length <= 6;
    const isValid = isKoreanOnly && isValidLength;
    
    set(enteredNameAtom, { value, isValid, isChanged: true });
  }
);

export const resetNotificationAtom = atom<null, [], void>(null, (_, set) => {
  set(enteredEmailAtom, { value: "", isValid: false, isChanged: false });
  set(enteredNameAtom, { value: "", isValid: false, isChanged: false });
  set(enteredPositionAtom, null);
  set(supportPathAtom, null);
});
