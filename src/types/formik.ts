import { FormikHelpers } from 'formik'

export type FormikCallback<Values> = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
