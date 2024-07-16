/*
  eslint-disable
    class-methods-use-this,
    no-console
*/

import {
  Component,
  type ErrorInfo
} from 'react';

import Props from './component.props';
import State from './component.state';

class ErrorBoundary extends Component<Props, State> {

  state = {
    isError: false,
    error:   null
  };

  static getDerivedStateFromError(error: Error): State {
    return { isError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.group('error');
    console.error(error);
    console.error(errorInfo);
    console.groupEnd();
  }

  public render() {
    return this.state.isError
      ? this.props.fallback
      : this.props.children;
  }

}

export default ErrorBoundary;