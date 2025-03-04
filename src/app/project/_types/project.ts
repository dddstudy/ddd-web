export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  typeofApp: "web" | "Android" | "iOS";
  // 기수
  semester: number;
  isNew: boolean;
  // 짝수이면 border radius 4개 홀수이면 2개
  index: number;
}
