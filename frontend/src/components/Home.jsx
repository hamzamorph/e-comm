import { useEffect, useState } from 'react'
import ProductListItem from './Products/ProductListItem'
import axios from 'axios'
import Categories from './categories/Categories';
import { useParams } from 'react-router';

const Home = () => {
    const [product,setProduct] = useState([]);
    const {category_id} = useParams();
    useEffect(() =>{
        const fetchProduct = async () => {
            try {
                if(category_id) {
                    const response = await axios.get(`http://localhost:3001/products/category/${category_id}`);
                    setProduct(response.data);

                }else{
                    const response = await axios.get('http://localhost:3001/products');
                    setProduct(response.data);
                }
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchProduct();
    },[category_id]);

  return (
    <div className='container'>
        <Categories/>
        <div className='row my-5'>
            {
                product?.map(product => <ProductListItem 
                    key={product._id} product={product}/>
                )
            }
        </div>

    </div>
  )
}

export default Home