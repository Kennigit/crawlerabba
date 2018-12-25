export interface IPost {
  /*
  Each SocialPost has a set of generic post properties
  */
  type: string;
  id: number;
  title: string;
  uploadDate: string;
  description: string;
  user: string;
  url: string;
}
