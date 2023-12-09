import React ,  {useState, useEffect} from "react" ;
import CommonSection from  "../Shared/CommonSection";

import "../styles/tour.css";
import TourDate from '../assets/data/tours'
import TourCard from './../Shared/TourCards';
import SearchBar from './../Shared/SearchBar';
import Newsletter from './../Shared/Newsletter';
import { Container, Row, Col} from "reactstrap";

const Tours = () => {
  const [pagecount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5/ 4) 
    setPageCount(pages)
  },[page])


  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {TourDate ?. map(tour=> (
              <col lg="3" className="mb-4" key={tour.id}> 
                <TourCard tour={tour}  />
              </col>
            ))}

            <Col lg='12'>
              <div className="pagination d-flex align-items-center
               justify-content-center mt-4 gap-3">
                {[...Array(pagecount).keys()].map(number=>( 
                  <span key={number} onClick={()=> setPage(number)}
                  className={page==number ? 'active__page':  ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </> 
  );   
  
};

export default Tours;