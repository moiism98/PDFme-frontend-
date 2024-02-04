import { gql } from "@apollo/client";

export const CREATE_TEMPLATE = gql`
mutation Mutation($createPdfDocumentInput: CreatePdfDocumentInput!) {
  createDocument(createPdfDocumentInput: $createPdfDocumentInput)
}
`

export const UPDATE_TEMPLATE = gql`
mutation UpdateDocument($updatePdfDocumentInput: UpdatePdfDocumentInput!) {
  updateDocument(updatePdfDocumentInput: $updatePdfDocumentInput)
}
`

export const DELETE_TEMPLATE = gql`
mutation RemoveDocument($removeDocumentId: String!) {
  removeDocument(id: $removeDocumentId)
}
`