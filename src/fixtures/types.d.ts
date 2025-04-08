declare module "@/fixtures/crewComments.json" {
  export type CrewComments = Array<CrewReview | CrewPhoto>;

  export type CrewReview = {
    type: "review";
    id: string;
    position: string;
    name: string;
    comment: string;
    backgroundColor: string;
  };

  export type CrewPhoto = {
    type: "photo";
    id: string;
    url: string;
  };

  const value: CrewComments;
  export default value;
}
