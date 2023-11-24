import { Component, ErrorInfo } from "react";

class AppErrorBoundary extends Component<any>{

    state = {
        hasError: false
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        
        console.log("error", error);
        console.log("errorInfo", errorInfo);
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError){
            return <div className="alert alert-danger">Technical Error. Please refresh the page</div>
        }
        return this.props.children;
    }
}

export default AppErrorBoundary;