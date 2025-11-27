import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function TodoForm({ onAdd }) {
  const validationSchema = Yup.object({
    todo: Yup.string()
      .min(5, "Мінімум 5 символів")
      .required("Поле не може бути порожнім"),
  });

  return (
    <Formik
      initialValues={{ todo: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.todo);
        resetForm();
      }}
    >
      <Form className="form">
        <Field
          type="text"
          name="todo"
          placeholder="Введіть задачу..."
          className="input"
        />

        <ErrorMessage name="todo" component="div" className="error" />

        <button type="submit" className="add-btn">
          Додати
        </button>
      </Form>
    </Formik>
  );
}
