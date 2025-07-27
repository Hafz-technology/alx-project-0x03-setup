import { ReactNode } from "react";



interface PageRouteProps {
  pageRoute: string
}

export type { PageRouteProps };



interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}
export type { ButtonProps };

interface LayoutProps {
  children: ReactNode;
}

export type { LayoutProps };

