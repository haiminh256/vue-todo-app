declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Định nghĩa cho CSS thuần (Side-effect import: import './App.css')
declare module '*.css' {
  const content: void;
  export default content;
}

// Định nghĩa cho CSS Modules (Ví dụ: import styles from './App.module.css')
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Định nghĩa cho các file hình ảnh đồ họa
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
