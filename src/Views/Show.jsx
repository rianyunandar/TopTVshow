import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Row,Col,Button} from "react-bootstrap"
import TVCard from "../Components/Show/TVCard";
import ReactPaginate  from 'react-paginate';
const Show = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [search, setSffset] = useState("");

  const getData = async () => {
    try {
      let { data } = await axios.get(`http://api.tvmaze.com/shows`, {
        crossDomain: true
      });
      let slice = data.slice(offset, offset + perPage);
      setData(slice);
      setPageCount(Math.ceil(data.length / perPage));
      setLoading(false);
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };

  useEffect(() => {getData()}, [offset]);
  
  const handlePageClick =(e) =>{
    let selected = e.selected
    setOffset(selected * perPage)
  }

  return <>
  <Container>
    <h2>Database TV Show</h2>
    <Row>
        <Col>
        <form 
        >
            {/*  onSubmit={} 
            value={}*/}
<input placeholder="Find By name , Language , Airing Status "
style={{width:"80%" , marginTop:"20px"}}/>
<span>  </span>

<Button variant ="dark" size="sm"> Seacrh</Button>
</form>
        </Col>
        </Row>
        
        {Loading ? (<h2>Loading ....... </h2>) : (
           <> <Row>
        {data.map((data) =>(
        <Col xs={6} sm={4} md={4} lg={3} xl={3} key={data.id}>
        <TVCard show={data}/>
        </Col>
        ))}
        
        </Row>
        <Row>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
            </Row>
        </>
        )}
            
   
  </Container>
  
  
  
  </>;
};

export default Show;
