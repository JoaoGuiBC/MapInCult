import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { FiAlertTriangle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputOnFocus = useCallback(() => setIsFocused(true), []);

  const handleInputOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <Icon />
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        {...rest}
      />

      {!!error && (
        <Error title={error}>
          <FiAlertTriangle size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
