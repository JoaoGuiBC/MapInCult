import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { FiAlertTriangle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  icon: Icon,
  ...rest
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handleTextAreaOnFocus = useCallback(() => setIsFocused(true), []);

  const handleTextAreaOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <Icon />
      <textarea
        ref={textAreaRef}
        onFocus={handleTextAreaOnFocus}
        onBlur={handleTextAreaOnBlur}
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

export default TextArea;
