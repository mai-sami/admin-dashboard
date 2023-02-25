import React, { PureComponent } from 'react'
import { Image } from '../../../Style/elments';
import { Flex } from '../../../Style/layout';
import notFound from '../../../assets/Group 491.png'

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { hasError: false };

    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError)
            return (
                <>
                    <Flex
                    margin={"6rem 0rem 0rem 0rem "}
                        flexDirection={"column"}>
                    <h1 style={{margin:"3rem",color:"#888226"}}>Something Is Error,Try Later</h1>
                    <Image src={notFound} alt="notFound" />

                        </Flex >
                </>

            );
        return this.props.children;
    }
}


export default ErrorBoundary