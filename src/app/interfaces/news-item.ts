export interface NewsItem {
  published: boolean;
  sourceUrl: string;
  imageUrl?: string;
  created: string;
  article: string;
  title: string;
  id: number;
}

export interface NewsItemDetail {
  content: Array<NewsItemDetailContentItem>;
  imageUrl: string;
  created: string;
  article: string;
  title: string;
  id: number;
}

export interface NewsItemDetailContentItem {
  params: Array<NewsItemDetailContentItemparams>;
  description: string;
  imageUrl: string;
  videoUrl: string;
  title: string;
}
export interface NewsItemDetailContentItemparams {
  title: string;
  value: string;
}
