import { useAtom } from "jotai";

import { supportPathAtom } from "@/store/notification/atom";
import TextButton from "@/components/TextButton";

const SUPPORT_PATH_LIST = [
  "인스타그램",
  "링크드인",
  "미디엄",
  "오픈채팅",
  "지인 추천",
];

export default function SupportPathButtonGroup() {
  const [enteredSupportPath, setEnteredSupportPath] = useAtom(supportPathAtom);

  return (
    <div className="flex flex-wrap gap-16">
      {SUPPORT_PATH_LIST.map((supportPath) => (
        <TextButton
          key={supportPath}
          onClick={() => setEnteredSupportPath(supportPath)}
          variant={supportPath === enteredSupportPath ? "fill" : "outline"}
          size="l"
        >
          {supportPath}
        </TextButton>
      ))}
    </div>
  );
}
