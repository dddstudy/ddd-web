import { useAtomValue, useSetAtom } from "jotai";

import { setNameAtom } from "@/store/notification/action";
import { enteredNameAtom } from "@/store/notification/atom";
import TextInput from "@/components/TextInput";
import RequiredInputLabel from "@/components/Notification/RequiredInputLabel";

export default function NameInput() {
  const { value, isValid, isChanged } = useAtomValue(enteredNameAtom);
  const setName = useSetAtom(setNameAtom);

  return (
    <div className="flex flex-col gap-16">
      <RequiredInputLabel htmlFor="name">이름</RequiredInputLabel>
      <TextInput
        value={value}
        onChange={(e) => setName(e.target.value)}
        id="name"
        error={!isValid && isChanged}
        errorMessage="이름이 정확히 작성되었는지 확인해주세요."
        size="l"
      />
    </div>
  );
}
