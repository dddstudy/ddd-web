import { atom } from "jotai";

import {
  enteredEmailAtom,
  enteredNameAtom,
  enteredPositionAtom,
  supportPathAtom,
  registerStepAtom,
} from "@/store/notification/atom";
import { NotificationVariables } from "@/hooks/usePostNotification";

/**
 * '가'(0xAC00) ~ '힣'(0xD7A3) 사이에 있는 문자인지 체크
 * @param {string} char 체크할 문자
 * @returns {boolean} 한글 여부
 */
const isKoreanChar = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
};

export const setEmailAtom = atom<null, [string], void>(
  null,
  (_, set, value) => {
    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = emailRegex.test(value);
    set(enteredEmailAtom, { value, isValid, isChanged: true });
  }
);

export const setNameAtom = atom<null, [string], void>(null, (_, set, value) => {
  const isKoreanOnly = value.split("").every(isKoreanChar);
  const isValidLength = value.length <= 6;
  const isValid = isKoreanOnly && isValidLength;

  set(enteredNameAtom, { value, isValid, isChanged: true });
});

export const resetNotificationFormAtom = atom<null, [], void>(
  null,
  (_, set) => {
    set(enteredEmailAtom, { value: "", isValid: false, isChanged: false });
    set(enteredNameAtom, { value: "", isValid: false, isChanged: false });
    set(enteredPositionAtom, null);
    set(supportPathAtom, null);
  }
);

export const setRegisterSuccessAndAutoResetAtom = atom<null, [], void>(
  null,
  (_, set) => {
    set(registerStepAtom, "submitSuccess");
    set(resetNotificationFormAtom);

    setTimeout(() => {
      set(registerStepAtom, "beforeStart");
    }, 3000);
  }
);

export const setRegisterConfirmCancelIfChangedAtom = atom<null, [], void>(
  null,
  (get, set) => {
    const isEmailChanged = get(enteredEmailAtom).isChanged;
    const isNameChanged = get(enteredNameAtom).isChanged;
    const isPathChanged = get(enteredPositionAtom) !== null;
    const isPositionChanged = get(enteredPositionAtom) !== null;

    if (isEmailChanged || isNameChanged || isPathChanged || isPositionChanged) {
      set(registerStepAtom, "closeConfirm");
    } else {
      set(registerStepAtom, "beforeStart");
    }
  }
);

export const getRegisterFormVariablesAtom = atom<NotificationVariables>(
  (get) => {
    const email = get(enteredEmailAtom).value;
    const name = get(enteredNameAtom).value;
    const position = get(enteredPositionAtom);
    const supportPath = get(supportPathAtom);

    return {
      email,
      name,
      position: position || "",
      support_path: supportPath || "",
    };
  }
);
