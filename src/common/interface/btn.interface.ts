import {PropsWithChildren} from 'react';

export type btnInterface = PropsWithChildren<{
  action: () => void;
  isDisable?: boolean;
  title: string;
}>;
