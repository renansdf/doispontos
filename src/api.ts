import {createClient, Asset, Entry} from 'contentful'

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.REACT_APP_CONTENTFUL_PRODUCTION_TOKEN || ''
})

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

export const loadProjects = async () => {
  const response = await client.getEntries<IProjectFields>()
  return response.items
}

export const loadProject = async (id: string) => {
  const response = await client.getEntry<IProjectFields>(id)
  return response
}
