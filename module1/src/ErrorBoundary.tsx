import React, { Component } from "react";
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };
  
    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary