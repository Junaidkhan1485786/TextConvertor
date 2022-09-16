import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




const NavScrollExample=(props) =>{
    return (
        <Navbar style={{border:"1px solid skyblue"}} bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">{props.Navbar}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll> 
                    </Nav>
                    <Form className="d-flex">
                        <Button style={{ background:"black"}} variant="outline-warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
