import { Button, Popconfirm } from 'antd';
import DesignerForm from './components/HeaderForm';
import TemplateSelector from './components/TemplateSelector';
import useHeader from './hooks/useHeader';

const Header = () => {
  
  const {designer, editing, open, template, setOpen, generatePdf, handleDelete, handleEmptyTemplate} = useHeader()

  return (
    <div className="designer-header">
      {
        designer && (
          <DesignerForm/>
        )
      }
      <TemplateSelector />
      {
        editing 
        ? 
        <>
          <Button
            onClick={() => {
              designer?.updateTemplate(template);
            }}
            type="primary"
          >
            Reset plantilla
          </Button>
          <Popconfirm
            title='¿Estás seguro de que quieres borrar la plantilla?'
            open={open}
            onConfirm={handleDelete}
            onCancel={() => setOpen(false)}
          >
            <Button 
              type='primary'
              onClick={() => setOpen(true)}
            >
              Borrar Plantilla
            </Button>
          </Popconfirm>
          <Button
            onClick={handleEmptyTemplate}
            type='primary'
          >
            Plantilla Vacía
          </Button>
          <Button 
            type='link'
            onClick={generatePdf}
          >
            Previsualizar PDF
          </Button>
        </>
        : null
      }
    </div>
  );
};

export default Header;
