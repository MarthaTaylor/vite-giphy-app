export interface GifImage {
    url: string;
    width: string;
    height: string;
  }

  export interface Gif {
    isSaved: any;
    id: string;
    title: string;
    images: {
      original: GifImage;
      fixed_height: GifImage;
    };
  }



