import magic1Image from"../Style/image/magic/magic1.jpg"
import magic2Image from"../Style/image/magic/magic2.jpg"
import magic3Image from"../Style/image/magic/magic3.jpg"
import magic4Image from"../Style/image/magic/magic4.jpg"
import magic5Image from"../Style/image/magic/magic5.jpg"
import magic6Image from"../Style/image/magic/magic6.jpg"
import { Card, Container, Row, Col, Image } from "react-bootstrap"

const Magic = () => {
	return (
		<div id="magic">
		 <br />
		 <br />
		 <Container>
		<h1 className="toptext text-white font-family">MAGIC MOVIE</h1>
		   <Row>
		     <Col md={4} className="movieWrapper">
		       <Card className="movieImage ">
            <Image src={magic1Image} alt="Harry Pottter movie" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> Harry Potter</Card.Title>
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
            <Image src={magic2Image} alt="Harry Pottter movie" className="images" />
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> Harry Potter</Card.Title>
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
            <Image src={magic3Image} al
            t="House clock movie" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> House Clock</Card.Title>
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
            <Image src={magic4Image} alt="His Dark Material" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> His Dark Material</Card.Title>
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
            <Image src={magic5Image} alt="Great powerfull movie" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center"> Great powerfull</Card.Title>
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
            <Image src={magic6Image} alt="Good Omens Movie movie" className="images"/>
             <div className="bg-dark">
             <div className="p-3 m-1 text-white">
            <Card.Title className="textstyle text-center">Good Omens</Card.Title>
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
export default Magic