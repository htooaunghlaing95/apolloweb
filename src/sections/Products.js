import styled from 'styled-components'
import ProductItem from '../components/ProductItem'
import productDate from '../utils/productData'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Title from '../components/Title';

const Section = styled.div`
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;

  @media (max-width: 64em){
    padding: 5rem 1rem;
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem 2rem;

  @media (max-width: 64em){
    grid-template-columns: 1fr;
    padding: 0rem 2rem;
  }
`

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: ${props => props.theme.text};
  cursor: pointer;
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Products = () => {

  const [showMore, setShowMore] = useState(false);

  const data = showMore ? productDate.slice(0, 12) : productDate.slice(0, 6);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Section id="products">
      <Title title="Products" />

      <Container>
        {data.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </Container>

      <SeeMore onClick={toggleShowMore}>
        {showMore ?
          <Button>
            <p>See Less</p>
            <IoIosArrowUp />
          </Button>
          :
          <Button>
            <p>See More</p>
            <IoIosArrowDown />
          </Button>
        }
      </SeeMore>

    </Section>
  )
}

export default Products