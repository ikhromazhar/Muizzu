import hero1Image from"../Style/image/superHero/hero1.jpg"
import hero2Image from"../Style/image/superHero/hero2.jpg"
import hero3Image from"../Style/image/superHero/hero3.jpg"
import hero4Image from"../Style/image/superHero/hero4.jpg"
import { Card, Container, Row, Col, Image } from "react-bootstrap"

const SuperHero = () => {
	return (
		<div id="hero">
		 <br />
		 <br />
		 <Container>
		<h1 className="toptext text-white font-family">SUPER HERO</h1>
		   <Row>
		     <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={hero1Image} alt="And Game movie" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> And Game</Card.Title>
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
            <Image src={hero2Image} alt="Captain America" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Captain america</Card.Title>
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
            <Image src={hero3Image} al
            t="Thor Movie" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Thor</Card.Title>
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
            <Image src={hero4Image} alt="Batman Movie" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Batman</Card.Title>
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
export default SuperHero