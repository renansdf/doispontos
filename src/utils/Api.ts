import { createClient, type Asset, type ContentfulClientApi, type Entry } from 'contentful'
import { redirect } from 'react-router-dom'

export interface IProjectFields {
  animations: Asset[];
  cover: Asset;
  color: {
    value: string;
  };
  corDoMenu?: {
    value: string;
  };
  coverFrames: Asset[];
  capaAnimadaMobile?: Asset[];
  projectDescription: string;
  makingof: Asset[];
  mainMovie: string;
  title: string;
}

export interface IProject {
  fields: IProjectFields;
  sys: {
    id: string;
  }
}

interface IHomeProjects {
  projectsList: IProject[]
}

interface IBiografia {
  fields: {
    description: string;
  }
}

export interface IAboutPage {
  fields: {
    title: string;
    manifesto: string;
    biografias: IBiografia[];
  }
}

const createContentfulClient = (): ContentfulClientApi => {
  const space: string | undefined = process.env.REACT_APP_CONTENTFUL_SPACE_ID
  const accessToken: string | undefined = process.env.REACT_APP_CONTENTFUL_PRODUCTION_TOKEN

  if(space === undefined || accessToken === undefined) {
    navigateToNotFound()
    throw new Error('Server error')
  }

  return createClient({ space, accessToken })
}

const client = createContentfulClient()

export const navigateToNotFound = (): Response => redirect('/not-found')

export const loadProjects = async (): Promise<IProject[]> => {
    const homeProjects = await client.getEntry<IHomeProjects>('4GYvVZ6EVrbvY8b7fYG5re')
    return homeProjects.fields.projectsList
}

export const loadProject = async (id: string): Promise<Entry<IProjectFields>> => {
  return await client.getEntry<IProjectFields>(id)
}

export const loadAboutPage = async (): Promise<Entry<IAboutPage>> => {
  return await client.getEntry<IAboutPage>('6D3G1jtrCIof321yvk1XpU')
}