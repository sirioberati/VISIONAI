import React from 'react';
import { FormField as FormFieldType } from '../../types/form';
import { Info } from 'lucide-react';

interface FormFieldProps {
  field: FormFieldType;
  value: any;
  onChange: (value: any) => void;
}

export function FormField({ field, value, onChange }: FormFieldProps) {
  const baseInputStyles = "w-full rounded-xl border-2 border-gray-100 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary bg-white transition-all duration-200 hover:border-gray-200";

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            className={`${baseInputStyles} min-h-[120px] resize-none`}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        );

      case 'select':
        return (
          <select
            id={field.id}
            className={baseInputStyles}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 group cursor-pointer">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-md border-2 border-gray-200 text-primary focus:ring-primary transition-colors group-hover:border-primary"
                  checked={Array.isArray(value) && value.includes(option.value)}
                  onChange={(e) => {
                    const newValue = Array.isArray(value) ? [...value] : [];
                    if (e.target.checked) {
                      newValue.push(option.value);
                    } else {
                      const index = newValue.indexOf(option.value);
                      if (index > -1) {
                        newValue.splice(index, 1);
                      }
                    }
                    onChange(newValue);
                  }}
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'tags':
        return (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {Array.isArray(value) && value.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-2 text-primary hover:text-primary-dark"
                    onClick={() => {
                      const newTags = [...value];
                      newTags.splice(index, 1);
                      onChange(newTags);
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              className={baseInputStyles}
              placeholder={field.placeholder || "Type and press Enter"}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  e.preventDefault();
                  const newTags = Array.isArray(value) ? [...value] : [];
                  newTags.push(e.currentTarget.value);
                  onChange(newTags);
                  e.currentTarget.value = '';
                }
              }}
            />
          </div>
        );

      default:
        return (
          <input
            type={field.type}
            id={field.id}
            className={baseInputStyles}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label htmlFor={field.id} className="block text-base font-medium text-gray-700">
          {field.label}
        </label>
        {field.tooltip && (
          <div className="group relative">
            <Info className="h-4 w-4 text-gray-400 cursor-help" />
            <div className="absolute left-1/2 bottom-full mb-2 hidden -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-1 text-sm text-white group-hover:block shadow-lg">
              {field.tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </div>
          </div>
        )}
      </div>
      {renderField()}
    </div>
  );
}