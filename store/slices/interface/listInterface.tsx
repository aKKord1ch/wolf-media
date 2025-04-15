export interface Image {
   src: string;
   src2x: string;
   tablet: string;
   mobile: string;
}

export interface WebP {
   src: string;
   src2x: string;
   tablet: string;
   mobile: string;
}

export interface Poster {
   color: string;
   format: string;
   video: string;
   image: Image;
   webp: WebP; 
}

export interface ListItem {
   id: string,
   tagsDisplayed: string,
   title: string,
   poster: Poster
}

export interface List {
   items: ListItem[]
}