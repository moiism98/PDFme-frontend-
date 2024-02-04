import { useMutation } from "@apollo/client";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect, useState } from "react";
import { CREATE_TEMPLATE, UPDATE_TEMPLATE } from "../../../../../../../graphql/mutations/mutations";
import { Context } from "../../../../../../../context/Context";
import { message } from "antd";

const useHeaderForm = () => {
    
  const [form] = useForm();
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE)
  const [createTemplate, {error}] = useMutation(CREATE_TEMPLATE)
  const { editing, option, templateName, setTemplateName, designer } = useContext(Context)
  const [edit, setEdit] = useState(false)

  const handleSaveTemplate = () => {
    const template = designer?.getTemplate()
    createTemplate({variables: {
        createPdfDocumentInput: {
          template: template,
          name: templateName
        }
      }
    })
  }

  const handleUpdateTemplate = () => {
    const template = designer?.getTemplate()
    updateTemplate({variables:{
        updatePdfDocumentInput: {
          template: template,
          name: templateName,
          id: option
        }
      } 
    })
  }

  useEffect(() => {
    if(templateName && !edit) {
      handleSaveTemplate()
      setTemplateName('')
    }
    if(templateName && edit)
    {
      handleUpdateTemplate()
      setTemplateName('')
      setEdit(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[templateName, edit])

  useEffect(() => {
    if(error) message.error(error.message)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[error])
    
    return{
        form,
        editing,
        setEdit,
        setTemplateName
    }
}

export default useHeaderForm