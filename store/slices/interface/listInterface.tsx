export interface ListItem {
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

export interface List {
  favs: ListItem[]
}