import { Container, Row, Col, Button } from "react-bootstrap"
const IntroWeb = () => {
	return (
  <div className="Intro">
       <Container className="text-white d-flex justify-content-center align-items-center">
         <Row>
           <Col>
             <div className="title">NONTON GRATIS TANPA KARCIS</div>
             <div className="title">DIMANA SAJA KAPAN SAJA</div>
             <div className="introButton mt-4 text-center">
               <Button variant="dark">Lihat Semua List</Button>
             </div>
           </Col>
         </Row>
       </Container>
    </div>
 )
}
export default IntroWeb