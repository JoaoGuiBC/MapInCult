import React, { useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps {
  placeholder: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon: Icon,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputOnFocus = useCallback(() => setIsFocused(true), []);

  const handleInputOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <Icon color="#312e38" />
      <input
        ref={inputRef}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
