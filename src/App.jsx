import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './Components/SearchBar'
import DisplayTable from './Components/DisplayTable'
import { useEffect, useState } from 'react'
import Papa from "papaparse";
import axios from 'axios'
import Header from './Components/Header'
function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = await axios.get('../src/assets/data.csv', { responseType: "blob" })
        Papa.parse(file.data, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setData(results.data)
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container fluid className='app'>
      <Row>
        <Header/>
        <SearchBar data={data} setFilterData={setFilterData} />
        <DisplayTable filterData={filterData} />
      </Row>

    </Container>
  )
}

export default App
