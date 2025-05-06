export interface PaginationProps {
  length: any;
  onSendData: Function;
  isLoadedMore: boolean;
}

export interface Item {
  slug: string;
  poster: {
    image: {
      src: string;
      alt: string;
      current: string;
    };
  };
  tagsDisplayed: string;
  title: string;
}

export interface Categories {
  slug: string;
  title: string;
}

export interface DataResponse {
  length: number;
  items: Item[];
  categories: Categories[]
}


