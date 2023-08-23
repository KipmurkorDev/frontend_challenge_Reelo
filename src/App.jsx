import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './Components/SearchBar'
import DisplayTable from './Components/DisplayTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data, setData]=useState([]);
  const apiKey='jHb13SOiRbXBl1c3smFyADa4JZ3HLMQo81p94qym'
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://exoplanetarchive.ipac.caltech.edu/TAP/sync?request=doQuery&lang=ADQL&query=SELECT * FROM ps&api_key=${apiKey}`);
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error('Failed to fetch data. Status code:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container fluid>
      <Row>
        <SearchBar />
        <DisplayTable data={data}/>
      </Row>

    </Container>
  )
}

export default App
