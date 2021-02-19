import React,{Component} from 'react'
import {Container,Row,Col,Image, ListGroup,Card} from 'react-bootstrap'

export class TVDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            dataDetail:[],
            loading:true,
            
        }
    }
    componentDidMount(){
        let id = this.props.location.pathname.split('/')[2];
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((response) => response.json())
        .then((detail)=>{
            this.setState({
                dataDetail:detail,
                loading:false
            })
        })
    }
    render()
    {
    return (
        <>
        <Container>
           {this.state.loading ? (<h2> Loading.....</h2>)  : 
           (<>
           <Row>   
            <Col md={6}>
                <Image className="ImageDetail"
                src={this.state.dataDetail.image ? this.state.dataDetail.image.original : ""}
                alt={this.state.dataDetail.name}
                fluid
                rounded />
               
                </Col> 
            <Col md={6}>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>{this.state.dataDetail.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3> Rating {this.state.dataDetail.rating.average}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>Genre :  {this.state.dataDetail.genres.map((genre,id)=>{
                            return <span key={id}> {genre + " "}</span>
                        }
                        )}</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Premiere : {this.state.dataDetail.premiered}</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       <b>Language : {this.state.dataDetail.language}</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Schedule : {this.state.dataDetail.schedule.time}  {this.state.dataDetail.schedule ? (this.state.dataDetail.schedule.days.map((day,id)=>{
                            return <span key={id}> {day + " "}</span>
                        }
                        )):""} on {this.state.dataDetail.network ?  this.state.dataDetail.network.name : ""}</b> 
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
            <Row>   
            <Col md={12}>
            < div dangerouslySetInnerHTML={{__html:this.state.dataDetail.summary}}></div>
            </Col> 
            </Row>

           
            <Row>   
                {this.state.dataDetail._embedded.cast.map((actor, id)=>(
            <Col xs={6} sm={4} md={4} lg={3} xl={3} key={id}>
                <Card className="my-3 p-3 rounded">
            <Card.Img variant="top" src={actor.person.image.medium} alt={actor.person.name}/>
            <Card.Body>
                <Card.Title>{actor.person.name}</Card.Title>
                
                
            </Card.Body>
            </Card>
                </Col>
                ))}
            </Row>
            </>
            )
            }
        </Container>
            
        </>
    )
}}

export default TVDetail