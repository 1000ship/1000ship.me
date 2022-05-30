interface Work {
  id: string;
  linkHref: string;
  imageName: string;
  supportVideo: boolean;
  videoName?: string;
  title: string;
  description: string;
  createdYear: string;
  tags: string[];
  techIcons: string[];
}

export default Work;
