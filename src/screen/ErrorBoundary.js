import React, { Component } from 'react'
import Error404 from '../assets/404.jpg'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return <div className="position-relative h-100 w-100">
                <img src={Error404} alt="404" className="img-fluid" style={{position:'fixed', top: '50%', left:'50%', transform: 'translate(-50%, -50%)'}}/>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary