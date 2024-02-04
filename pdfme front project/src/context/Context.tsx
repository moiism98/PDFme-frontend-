import { Designer, Template } from '@pdfme/ui';
import { createContext, useEffect, useState } from 'react';
import { IContext, ITemplateSelector, NewTemplate } from '../interfaces/interfaces';
import { useQuery } from '@apollo/client';
import { GET_ALL_TEMPLATES } from '../graphql/queries/queries';
import { emptyTemplate } from '../components/Templates/templates';

export const Context = createContext({} as IContext);

export const PdfContext = ({ children }: { children: React.ReactNode }) => {
  
  const { data } = useQuery(GET_ALL_TEMPLATES)
  const [template, setTemplate] = useState<Template>();
  const [savedTemplates, setSavedTemplates] = useState<NewTemplate[]>()
  const [editing, setEditing] = useState(false);
  const [option, setOption] = useState<string>('');
  const [preview, setPreview] = useState(false)
  const [options, setOptions] = useState<ITemplateSelector[]>();
  const [templateName, setTemplateName] = useState<string>('');
  const [designer, setDesigner] = useState<Designer>();
  
  useEffect(() => {
    if(data) setSavedTemplates(data.documents)
  }, [data])
  
  useEffect(() => {
    const designerContainer = document.getElementById('pdf-designer');
    if (designerContainer) {
      const des = new Designer({ domContainer: designerContainer, template: emptyTemplate });
      if (des) {
        setDesigner(des);
        setTemplate(emptyTemplate);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider
      value={{
        template,
        setTemplate,
        editing,
        setEditing,
        savedTemplates,
        setSavedTemplates,
        option,
        setOption,
        preview,
        setPreview,
        options,
        setOptions,
        templateName,
        setTemplateName,
        designer,
        setDesigner
      }}
    >
      {children}
    </Context.Provider>
  );
};