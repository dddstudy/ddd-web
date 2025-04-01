import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Team = {
  position: string;
  memberNames: string[];
};

export type AppType = "web" | "Android" | "iOS";

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  listThumbnail: string | StaticImport;
  popupThumbnail: string | StaticImport;
  typeofApp: AppType;
  // 기수
  semester: number;
  isNew: boolean;
  // 짝수이면 border radius 4개 홀수이면 2개
  index: number;
  description: string;
  keyFeatures: string[];
  team: Team[];
}
