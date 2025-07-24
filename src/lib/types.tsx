export type ProjectTypes = {
  title: string,
  about?: string,
  frontend?: string[], 
  backend?: string[],
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