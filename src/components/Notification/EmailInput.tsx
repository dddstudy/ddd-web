import { useAtomValue, useSetAtom } from "jotai";

import { setEmailAtom } from "@/store/notification/action";
import { enteredEmailAtom } from "@/store/notification/atom";
import TextInput from "@/components/TextInput";
import RequiredInputLabel from "@/components/Notification/RequiredInputLabel";

export default function EmailInput() {
  const { value, isValid, isChanged } = useAtomValue(enteredEmailAtom);
  const setEmail = useSetAtom(setEmailAtom);

  return (
    <div className="flex flex-col gap-16">
      <RequiredInputLabel htmlFor="email">이메일</RequiredInputLabel>
      <TextInput
        value={value}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        error={!isValid && isChanged}
        errorMessage="example@example.com 형식에 맞게 입력해주세요."
        size="l"
      />
    </div>
  );
}
