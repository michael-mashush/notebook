import {
  type JSONContent
} from '@tiptap/react';

import {
  type Note
} from '../model';

export function extractNameFromJSON(json: Note['json']): string | undefined {
  const data = JSON.parse(json) as JSONContent;
  const name = data.content?.[0].content?.[0].text;
  return name;
}