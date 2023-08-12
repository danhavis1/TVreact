import { useEffect, useState } from "react"
import axios from 'axios'
import { Container, Image, Row, Col } from "react-bootstrap" 
import { Link } from "react-router-dom";

import TvCard from "../components/TvCard";



export default function TvShow() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchTv = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.tvmaze.com/shows");
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTv();
  }, []);
  console.log("data", data)

 

  return (
    <>
    <Container className="mt-5 py-3">

      <Row>
        {data.slice(0,40).map((show)=>(
        <Col key={show.id} xs={6} md={4} lg={3}>
          <TvCard data={show} />
        </Col>
        
        ))}
      </Row>
    </Container>
    
    
    
    </>
  )
}

