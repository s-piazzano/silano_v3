import { type Layout } from "@/interfaces/layout";

export interface Image {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface LinkInt {
  url: URL;
  name: string;
  alt?: string;
}

export interface Menu {
  attributes: {
    logo: Image;
    hours: string;
    contact: string;
    layout: Array<Layout>;
  };
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  link: LinkInt;
  image: Image;
}

export interface Seo {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        formats: Object;
      };
    };
  };
}
