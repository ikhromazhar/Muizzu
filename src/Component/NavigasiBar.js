import { Navbar, Container, Nav } from "react-bootstrap"
const NavigasiBAr = () => {
	return (
		<div>
		  <Navbar className="Navbar" variant="dark">
		     <Container>
		      <Navbar.Brand className="NavbarBrand">AZHARFILMS</Navbar.Brand>
		       <Nav>
		         <Nav.Link href="#magic">MAGIC</Nav.Link>
		         <Nav.Link href="#hero">SUPERHERO</Nav.Link>
		         <Nav.Link href="#indo">INDONESIA</Nav.Link>
		       </Nav>
		     </Container>
		  </Navbar>
		</div>
	)
}
export default NavigasiBAr