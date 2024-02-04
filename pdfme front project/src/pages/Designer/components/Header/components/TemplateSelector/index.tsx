import { Select } from 'antd';
import useTemplateSelector from './hooks/useTemplateSelector';
const TemplateSelector = () => {
  
  const {savedTemplates, editing, options, data, handleChange} = useTemplateSelector()

  return savedTemplates && savedTemplates?.length != 0 ? (
    <Select
      value={editing ? data && data.document.name.split('.')[0] : 'Selecciona una plantilla'}
      options={options}
      onChange={handleChange}
    />
  ) : null;
};

export default TemplateSelector;
