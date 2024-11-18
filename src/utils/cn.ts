import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "headline-1-semibold",
            "headline-2-semibold",
            "headline-3-semibold",
            "headline-4-semibold",
            "headline-5-bold",
            "headline-6-medium",
            "headline-6-semibold",
            "headline-7-medium",
            "headline-7-semibold",
            "title-1-medium",
            "title-1-bold",
            "title-2-medium",
            "title-2-bold",
            "title-3-regular",
            "title-3-bold",
            "body-1-regular",
            "body-1-medium",
            "body-1-bold",
            "body-2-regular",
            "body-2-medium",
            "body-2-bold",
            "body-3-regular",
            "body-3-medium",
            "body-3-bold",
            "body-4-regular",
            "body-4-medium",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
