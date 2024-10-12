import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'
import React, { ReactNode } from 'react'

// Define the shape of the props
interface ErrorBoundaryProps {
  children: ReactNode
}

// Define the shape of the state
interface ErrorBoundaryState {
  hasError: boolean
  isActive: boolean
  isLoading: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  reloadTimeout: NodeJS.Timeout | null = null

  constructor(props: ErrorBoundaryProps) {
    super(props)
    // Initialize the state with hasError as false
    this.state = {
      hasError: false,
      isActive: import.meta.env.DEV,
      isLoading: false,
    }
  }

  static getDerivedStateFromError() {
    // Update state to show loader in case of an error
    return { hasError: true, isLoading: true }
  }

  componentDidCatch(error, info) {
    if (this.state.isActive) {
      console.error('Error caught by ErrorBoundary:', error, info)

      // Set a timeout to reload the window if still loading after 1 second
      this.reloadTimeout = setTimeout(() => {
        if (this.state.isLoading) {
          window.location.reload()
        }
      }, 1000) // 1 second delay
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Reset the error state automatically after updates (like HMR)
    if (this.state.hasError && prevState.hasError) {
      this.setState({ hasError: false, isLoading: false })
    }

    if (!this.state.hasError && this.reloadTimeout) {
      clearTimeout(this.reloadTimeout) // Clear timeout if error is resolved
    }
  }

  componentWillUnmount() {
    if (this.reloadTimeout) {
      clearTimeout(this.reloadTimeout) // Clear timeout on component unmount
    }
  }

  render() {
    if (this.state.hasError && this.state.isActive) {
      // Show a loader during the error
      return (
        <Flex flex={1} justify="center" align="center">
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </Flex>
      )
    }

    return this.props.children
  }
}
