import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erreur capturée par Error Boundary :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Quelque chose s'est mal passé.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
