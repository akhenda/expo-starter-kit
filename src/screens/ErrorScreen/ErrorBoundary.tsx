import { Component, ErrorInfo, ReactNode } from 'react';
import type { Theme } from '@react-navigation/native';
import isEqual from 'lodash/isEqual';

import { ErrorDetails } from './ErrorDetails';

// TODO(@akhenda) Refactor Error Screens
interface Props {
  children: ReactNode;
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
  navTheme: Theme;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * This component handles whenever the user encounters a JS error in the
 * app. It follows the "error boundary" pattern in React. We're using a
 * class component because according to the documentation, only class
 * components can be error boundaries.
 *
 * - [React Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
 */
export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // Reset the error back to null
  // eslint-disable-next-line react/sort-comp
  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  constructor(props: Props) {
    super(props);

    this.state = { error: null, errorInfo: null, hasError: false };
  }

  // To avoid unnecessary re-renders
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    const { error } = this.state;
    const { navTheme } = this.props;

    if (!isEqual(nextProps.navTheme, navTheme)) return true;

    return nextState.error !== error;
  }

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
    // This is a great place to put BugSnag, Sentry, crashlytics, etc:
    // reportCrash(error)
  }

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    const { catchErrors } = this.props;

    return catchErrors === 'always' || (catchErrors === 'dev' && __DEV__) || (catchErrors === 'prod' && !__DEV__);
  }

  // Render an error UI if there's an error; otherwise, render children
  render() {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    return this.isEnabled() && hasError && error ? (
      <ErrorDetails onReset={this.resetError} error={error} errorInfo={errorInfo} />
    ) : (
      children
    );
  }
}
