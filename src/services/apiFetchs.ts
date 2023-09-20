export const DATA_API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

export async function getNews() {
  const response = await fetch(DATA_API);
  const data = await response.json();
  return data;
}
