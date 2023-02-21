import {createClient, Asset, ContentfulClientApi} from 'contentful'
import { redirect } from 'react-router-dom'

export interface IProjectFields {
  animations: Asset[];
  description: any; // this is rich text
  makingof: Asset[];
  title: string;
}

export interface IProject {
  fields: IProjectFields;
  sys: {
    id: string;
  }
}

const getContentfulClient = () => {
  let client: ContentfulClientApi
  client = {} as ContentfulClientApi
  try {
    client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.REACT_APP_CONTENTFUL_PRODUCTION_TOKEN || ''
    })
  } catch {
    navigateToNotFound()
  }

  return client
}

const navigateToNotFound = () => redirect('/not-found')

export const loadProjects = async () => {
  const client = getContentfulClient()
  try {
    const response = await client.getEntries<IProjectFields>()
    return response.items
  } catch {
    return redirect('/not-found')
  }
}

export const loadProject = async (id: string) => {
  const client = getContentfulClient()
  const response = await client.getEntry<IProjectFields>(id)
  return response
}
