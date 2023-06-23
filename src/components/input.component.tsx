import clsx from 'clsx';
import { FC, forwardRef, ComponentProps } from 'react';

interface InputProps {
  label: string;
  name: string;
  onBlur: ComponentProps<'input'>['onBlur'];
  onChange: ComponentProps<'input'>['onChange'];
  type?: ComponentProps<'input'>['type'];
  value?: ComponentProps<'input'>['value'];
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...inputProps }, ref) => {
    const formGroupClasses = clsx('form-group', {
      'has-error': error,
    });

    return (
      <div className={formGroupClasses}>
        <label htmlFor={name}>{label}</label>
        <input className="form-control" name={name} ref={ref} {...inputProps} />
        <span className="help-block">{error}</span>
      </div>
    );
  }
);
