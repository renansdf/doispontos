import Prismic from '@prismicio/client'
// import { Date, Link, RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://doispontos.prismic.io/api/v2';
const accessToken = process.env.REACT_APP_PRISMIC_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken })

export interface IProject{
  id: string;
  uid?: string;
  data: {
    titulo_do_projeto: {
      text: string;
    }[],
    imagens: {
      imagem: {
        url: string;
      }
    }[],
    video: {}
  }
}

export interface IProjects {
  results: IProject[]
}

export const loadProjects = async () => {
  const response: IProjects = await Client.query(
    Prismic.Predicates.at('document.type', 'projetos')
  )
  return response
}

export const loadProject = async (uid: string) => {
  const response: IProject = await Client.getByUID('projetos', uid, {})
  return response
}