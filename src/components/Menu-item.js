import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const MenuItem = ({ title, md, url, height }) => {
    const history = useHistory()
    return (
        <>
        <Col md={md} className="pl-4 mb-2">
            <Card body className="home text-center border border-dark" 
                onClick={() => history.push(`/shop/${title}`)}
                style={{backgroundImage: `url(${url})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    height: `${height}`,
                    cursor: 'pointer'}}>
                    <div className="home-card-body mx-auto w-50 border border-dark mt-5 mb-5 p-2">
                        <CardTitle tag="h5">{title}</CardTitle>
                        <CardText>SHOP NOW</CardText>
                    </div>
            </Card>
        </Col>
        </>
    )
}

export default MenuItem