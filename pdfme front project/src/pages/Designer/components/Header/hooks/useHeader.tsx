import { useMutation } from "@apollo/client"
import { DELETE_TEMPLATE } from "../../../../../graphql/mutations/mutations"
import { useContext, useState } from "react"
import { Context } from "../../../../../context/Context"
import { Template } from "@pdfme/ui"
import { generate } from '@pdfme/generator';
import { emptyTemplate } from "../../../../../components/Templates/templates"
const useHeader = () => {

  const [deleteTemplate] = useMutation(DELETE_TEMPLATE)
  const { editing, option, template, designer, setTemplate, setEditing } = useContext(Context)
  const [open, setOpen] = useState(false)
  
  const generatePdf = async () => {
    const template: Template = designer?.getTemplate()
    const inputs = template.sampledata;
    const pdf = await generate({ template, inputs });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }

  const handleEmptyTemplate = () => {
    setTemplate(emptyTemplate)
    designer?.updateTemplate(emptyTemplate)
    setEditing(false)
  }
  
  const handleDelete = () => {
    deleteTemplate({variables:{
        removeDocumentId: option
      }
    })
    handleEmptyTemplate()
    setOpen(false)
  }

    return{
        editing,
        designer,
        template,
        open,
        setOpen,
        generatePdf,
        handleDelete,
        handleEmptyTemplate
    }
}

export default useHeader