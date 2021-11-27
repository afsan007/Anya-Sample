import dayjs, { Dayjs } from "dayjs";

export interface IConfig {
  name: string;
  authorImage: string;
  topicIcon: string;
  image: string;
  location: string;
  title: string;
  publishedYear: number;
  notes: { text: string; type: "strength" | "weakness" }[];
  author: string;
  rate: number;
  claps: string;
  comments: string;
  createdDate: Dayjs;
}

export const config: IConfig[] = [
  {
    name: "alex_terrio",
    topicIcon: "movieTopic1",
    image: "./theSilentPatient.png",
    authorImage: "./author1.png",
    location: "AMC BrookyIn theater",
    title: "The Silent Patient",
    publishedYear: 2019,
    notes: [
      {
        text: "great directing and cinematography is masterful",
        type: "strength"
      },
      { text: "Not as scary as the first part low pace", type: "weakness" }
    ],
    author: "Alex Michaelides",
    rate: 4.5,
    claps: "+343",
    comments: "+234",
    createdDate: dayjs().subtract(2, "hour")
  }
];
