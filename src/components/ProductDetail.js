import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeProduct } from '../redux/actions/productActions'
const ProductDetail = () => {
    const {productId} = useParams();
    const product = useSelector(state=>state.product)
    const dispatch = useDispatch();
    const fetchProductDetail = async ()=>{
        const response = await axios
                                .get(`https://fakestoreapi.com/products/${productId}`)
                                .catch(e=>console.log(e))
        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId && productId !== ''){
            fetchProductDetail();
        }
        return ()=>{
            dispatch(removeProduct())
        }
        
    },[productId])
    
    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (
                <div>loading .... </div>
            ) : 
            ( 
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center alinged grid'>
                    <div className='ui vertical divider' >AND
                    </div>
                    <div className='middle aligned row' >
                        <div className='column lp'>
                            <img src={product.image} />
                        </div>
                        <div className='column p'>
                            <h1>{product.title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${product.price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{product.category}</h3>
                            <p>{product.description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add to card</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            )
            }
        </div>
    )
}

export default ProductDetail
