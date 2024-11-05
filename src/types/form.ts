export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'color' | 'tags';
  placeholder?: string;
  options?: { label: string; value: string }[];
  required?: boolean;
  tooltip?: string;
}

export interface FormStep {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  fields: FormField[];
}

export interface FormData {
  [key: string]: string | string[] | number | boolean;
}