import { gql } from "@apollo/client";


export const GET_ALL_TEMPLATES = gql`
query Documents {
  documents {
    id
    name
    template
  }
}
`

export const GET_TEMPLATE = gql`
query Document($documentId: String!) {
    document(id: $documentId) {
      id
      name
      template
    }
  }
`