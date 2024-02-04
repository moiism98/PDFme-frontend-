import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_TEMPLATE } from '../../../../../../../graphql/queries/queries';
import { Context } from '../../../../../../../context/Context';
import { ITemplateSelector } from '../../../../../../../interfaces/interfaces';

const useTemplateSelector = () => {

    const [getTemplate, { data }] = useLazyQuery(GET_TEMPLATE)
    const { editing, setEditing, savedTemplates, options, setOptions, setOption, template, setTemplate, designer } = useContext(Context)
  

  useEffect(() => {
    if (savedTemplates) {
      const optionsArray: ITemplateSelector[] = [];
      for (const template of savedTemplates) {
        optionsArray.push({
          label: template.name.split('.')[0],
          value: template.id,
        });
      }
      setOptions(optionsArray);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedTemplates]);

  useEffect(() => {
    if (data){
      setTemplate(data.document.template)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if(data){
      designer?.updateTemplate(data.document.template)
      setEditing(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template]);

  const handleChange = (value: string) => {
    getTemplate({variables: {
        documentId: value
      }
    })
    setOption(value)
  }

    return{
        editing,
        savedTemplates,
        data,
        options,
        handleChange
    }
}

export default useTemplateSelector