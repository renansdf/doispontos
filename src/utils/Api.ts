import { createClient, type Asset, type ContentfulClientApi, type Entry } from 'contentful'
import { redirect } from 'react-router-dom'

export interface IProjectFields {
  animations: Asset[];
  cover: Asset;
  thumbnail: Asset;
  coverMobile: Asset;
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
  slug: string;
}

export interface IProject {
  fields: IProjectFields;
  sys: {
    id: string;
  }
}

interface IHomeProjects {
  allProjects: IProject[]
  homeProjects: IProject[]
}

interface IBiografia {
  sys: {
    id: string;
  }
  fields: {
    description: string;
  }
}

export interface IAboutPage {
  sys: {
    id: string;
  }
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
    const projectLists = await client.getEntry<IHomeProjects>('58ZFkUWEOfSgv1SUg7qUCf')
    return projectLists.fields.allProjects
}

export const loadHomeProjects = async (): Promise<IProject[]> => {
  const projectLists = await client.getEntry<IHomeProjects>('58ZFkUWEOfSgv1SUg7qUCf')
  return projectLists.fields.homeProjects
}

export const loadProject = async (slug: string): Promise<Entry<IProjectFields>> => {
  const projectList = await client.getEntries<IProjectFields>({
    content_type: 'projetos',
    'fields.slug[in]': slug,
  })
  return projectList.items[0]
}

export const loadAboutPage = async (): Promise<Entry<IAboutPage>> => {
  return await client.getEntry<IAboutPage>('6D3G1jtrCIof321yvk1XpU')
}