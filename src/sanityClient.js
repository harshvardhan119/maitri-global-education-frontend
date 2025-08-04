
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'poxqiqf3',
  dataset: 'production',
  apiVersion: '2023-08-04',    
  useCdn: true,
})

export default client
