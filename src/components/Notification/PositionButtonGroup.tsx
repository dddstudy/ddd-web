import { useAtom } from "jotai";

import { enteredPositionAtom } from "@/store/notification/atom";
import TextButton from "@/components/TextButton";

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
      {POSITION_LIST.map((position) => (
        <TextButton
          key={position}
          onClick={() => setEnteredPosition(position)}
          variant={position === enteredPosition ? "fill" : "outline"}
          size="l"
        >
          {position}
        </TextButton>
      ))}
    </div>
  );
}
