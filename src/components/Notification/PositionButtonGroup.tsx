import { useAtom } from "jotai";

import { enteredPositionAtom } from "@/store/notification/atom";
import TextButton from "@/components/TextButton";
import RequiredInputLabel from "@/components/Notification/RequiredInputLabel";

const POSITION_LIST = [
  "Product Manager",
  "Product Designer",
  "Android",
  "iOS",
  "Web Front",
  "Backend",
];

export default function PositionButtonGroup() {
  const [enteredPosition, setEnteredPosition] = useAtom(enteredPositionAtom);

  return (
    <div className="flex flex-wrap gap-16">
      <RequiredInputLabel>DDD를 알게 되신 경로가 궁금해요!</RequiredInputLabel>
      <div className="flex flex-wrap gap-16">
        {POSITION_LIST.map((position) => (
          <TextButton
            key={position}
            onClick={() => setEnteredPosition(position)}
            variant={position === enteredPosition ? "fill" : "outline"}
            size="l"
            type="button"
          >
            {position}
          </TextButton>
        ))}
      </div>
    </div>
  );
}
