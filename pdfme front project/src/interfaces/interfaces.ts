import type { Template, Designer } from "@pdfme/ui"

export interface NewTemplate{
  id?: string
  name: string
  template: Template
}

export interface FormProps{
  setTemplateName: React.Dispatch<React.SetStateAction<string>>
  setUpdatedTemplate: React.Dispatch<React.SetStateAction<Template>>
  designer: Designer
}

export interface ITemplateSelector{
  value?: string
  label: string
}

export interface IContext {
  template: Template | undefined
  setTemplate: React.Dispatch<React.SetStateAction<Template | undefined>>
  editing: boolean
  setEditing: React.Dispatch<React.SetStateAction<boolean>>
  savedTemplates: NewTemplate[] | undefined
  setSavedTemplates: React.Dispatch<React.SetStateAction<NewTemplate[] | undefined>>
  option: string
  setOption: React.Dispatch<React.SetStateAction<string>>
  preview: boolean
  setPreview: React.Dispatch<React.SetStateAction<boolean>>
  options: ITemplateSelector[] | undefined
  setOptions: React.Dispatch<React.SetStateAction<ITemplateSelector[] | undefined>>
  templateName: string
  setTemplateName: React.Dispatch<React.SetStateAction<string>>
  designer: Designer | undefined
  setDesigner: React.Dispatch<React.SetStateAction<Designer | undefined>>
}