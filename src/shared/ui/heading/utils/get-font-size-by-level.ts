import {
  type HeadingLevel,
  type HeadingSize
} from '../types';

export function getFontSizeByLevel(level: HeadingLevel): HeadingSize {

  const record: Record<HeadingLevel, HeadingSize> = {
    1: '3xl',
    2: '2xl',
    3: 'xl',
    4: 'lg',
    5: 'md',
    6: 'sm'
  };

  return record[level];

}