import React from 'react'

type StateProps = {
  Component: any
}

const asyncComponent = (importComponent: any): any => {
  return class asyncComponent extends React.Component<{}, StateProps> {
    constructor(props: any) {
      super(props)

      this.state = {
        Component: null
      }
    }

    async componentDidMount() {
      const { default: Component } = await importComponent()
      this.setState({
        Component: Component
      })
    }

    render() {
      const C = this.state.Component

      return C ? <C {...this.props} /> : null
    }
  }
}

export default asyncComponent
