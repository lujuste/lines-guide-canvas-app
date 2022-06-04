import { PagesProps } from "./PagesProps";

export interface AllMyProjects {
  id: string;
  user_id: string;
  template: {
    arrayOfPages: PagesProps[];
  };
  title: string;
  description?: string;
  download_counter: 0;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  thumbnail_url:string;
}
