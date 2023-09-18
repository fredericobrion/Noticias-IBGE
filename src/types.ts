export type News = {
  data_publicacao: string;
  destaque: boolean;
  editoriais: string;
  id: number;
  imagens: string;
  introducao: string;
  link: string;
  produto_id: number;
  produtos: string;
  produtos_relacionados: string;
  tipo: string;
  titulo: string;
}

export type Images = {
    image_intro: string;
    float_intro: string;
    image_intro_alt: string;
    image_intro_caption: string;
    image_fulltext: string;
    float_fulltext: string;
    image_fulltext_alt: string;
    image_fulltext_caption: string;
}
