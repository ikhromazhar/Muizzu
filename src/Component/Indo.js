import indo1Image from"../Style/image/indonesia/indo1.jpg"
import indo2Image from"../Style/image/indonesia/indo2.jpg"
import indo3Image from"../Style/image/indonesia/indo3.jpg"
import indo4Image from"../Style/image/indonesia/indo4.jpg"
import indo5Image from"../Style/image/indonesia/indo5.jpg"
import { Card, Container, Row, Col, Image } from "react-bootstrap"

const Indo = () => {
	return (
		<div id="indo">
		 <br />
		 <br />
		 <Container>
		<h1 className="toptext text-white font-family">INDONESIA MOVIE</h1>
		   <Row>
		     <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={indo1Image} alt="Kukira Kau Rumah" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Kukira kau rumah</Card.Title>
           <Card.Text className="textstyle text-left">
          This is a wider card with supporting text
           </Card.Text>
          <Card.Text className="textstyle text-left">Last updated 3 mins ago</Card.Text>
             </div>
             </div>
         </Card>
		    </Col>
		    <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={indo2Image} alt="Gatot Kaca" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Gatot Kaca</Card.Title>
           <Card.Text className="textstyle text-left">
          This is a wider card with supporting text
           </Card.Text>
          <Card.Text className="textstyle text-left">Last updated 3 mins ago</Card.Text>
             </div>
             </div>
         </Card>
		    </Col>
		    <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={indo3Image} al
            t="Milea" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Milea</Card.Title>
           <Card.Text className="textstyle text-left">
          This is a wider card with supporting text
           </Card.Text>
          <Card.Text className="textstyle text-left">Last updated 3 mins ago</Card.Text>
             </div>
             </div>
         </Card>
		    </Col>
		    <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={indo4Image} alt="Mencuri Raden Salah" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Mencuri Raden Salah</Card.Title>
           <Card.Text className="textstyle text-left">
          This is a wider card with supporting text
           </Card.Text>
          <Card.Text className="textstyle text-left">Last updated 3 mins ago</Card.Text>
             </div>
             </div>
         </Card>
		    </Col>
		    <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={indo5Image} alt="Susi Susanti" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Susi Susanti</Card.Title>
           <Card.Text className="textstyle text-left">
          This is a wider card with supporting text
           </Card.Text>
          <Card.Text className="textstyle text-left">Last updated 3 mins ago</Card.Text>
             </div>
             </div>
         </Card>
		    </Col>
		   </Row>
		 </Container>
		</div>
	)
}
export default Indo