import React from "react";
import { Col, Row } from "reactstrap";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Sign = () => {
    return (
        <>
            <Row>
                <Col md='6'>
                    <SignIn />
                </Col>
                <Col md='6'>
                    <SignUp />
                </Col>
            </Row>
        </>
    )
}

export default Sign