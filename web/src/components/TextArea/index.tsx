import React, { useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface TextAreaProps {
  placeholder: string;
  icon: React.ComponentType<IconBaseProps>;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  icon: Icon,
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleTextAreaOnFocus = useCallback(() => setIsFocused(true), []);

  const handleTextAreaOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <Icon color="#312e38" />
      <textarea
        ref={textAreaRef}
        onFocus={handleTextAreaOnFocus}
        onBlur={handleTextAreaOnBlur}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextArea;
