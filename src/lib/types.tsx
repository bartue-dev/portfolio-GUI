export type ProjectTypes = {
  id: number,
  title: string,
  about?: string,
  frontend?: {src: string, tip: string}[], 
  backend?: {src: string, tip: string}[],
  code?: {
    frontend?: string,
    backend?: string,
  },
  status?: string
  link?: string,
  images?: string[]
}

export type LinksTypes = {
  name: string,
  route: string
}