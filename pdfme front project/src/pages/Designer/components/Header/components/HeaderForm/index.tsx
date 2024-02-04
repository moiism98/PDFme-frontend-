import { Button, Form, Input } from 'antd';
import useHeaderForm from './hooks/useHeaderForm';
const DesignerForm = () => {
  
  const {form, editing, setTemplateName, setEdit} = useHeaderForm()
  
  return (
    <>
      <Form
        form={form}
        onFinish={() => {
          const res = form.getFieldsValue();
          setTemplateName(res.name);
          form.resetFields();
        }}
        className="designer-form"
      >
        <Form.Item 
          name="name" 
          style={{ marginBottom: 0 }}
          rules={
            editing
            ? []
            : [{ required: true, message: 'Por favor introduce un nombre de plantilla' }]
          }
        >
          <Input placeholder="Introduce nombre de la plantilla"/>
        </Form.Item>
        {
          editing 
          ? 
          <Button
            onClick={() => setEdit(true)}
            htmlType='submit'
            type="primary"
          >
            Editar plantilla
          </Button>
          :
          <Button
            type="primary"
            htmlType="submit"
          >
            Guardar plantilla
          </Button>
        }
      </Form>
    </>
  );
};

export default DesignerForm;