import { createClient, type Asset, type ContentfulClientApi, type Entry } from 'contentful'
import { redirect } from 'react-router-dom'

export interface IProjectFields {
  animations: Asset[];
  cover: Asset;
  color: {
    value: string;
  };
  coverFrames: Asset[];
  description: unknown; // this is rich text
  makingof: Asset[];
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

const createContentfulClient = (): ContentfulClientApi => {
  const space: string | undefined = process.env.REACT_APP_CONTENTFUL_SPACE_ID
  const accessToken: string | undefined = process.env.REACT_APP_CONTENTFUL_PRODUCTION_TOKEN

  if(space === undefined || accessToken === undefined) {
    navigateToNotFound()
    throw new Error('Server error')
  }

  return createClient({ space, accessToken })
}

export const navigateToNotFound = (): Response => redirect('/not-found')

export const loadProjects = async (): Promise<IProject[]> => {
    const client = createContentfulClient()
    const homeProjects = await client.getEntry<IHomeProjects>('4GYvVZ6EVrbvY8b7fYG5re')
    return homeProjects.fields.projectsList
}

export const loadProject = async (id: string): Promise<Entry<IProjectFields>> => {
  const client = createContentfulClient()
  return await client.getEntry<IProjectFields>(id)
}
