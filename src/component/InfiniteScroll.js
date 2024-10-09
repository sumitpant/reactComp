import React, { useRef } from 'react'
import Card from './Card';
import './Card.css'
import useInfinteScroll from './useInfiniteScroll';
import Shimmer from './Shimmer';


const InfiniteScroll = () => {
    const ref = useRef();
    const { items, loading } = useInfinteScroll(ref);
    return (
        <div>
            <div className='card_container' ref={ref}>
            {items?.map((data, index) => <Card text={data?.title} image={data?.image} key={index} />)}
            {loading ? <p><Shimmer /></p>:<></> }

                {/* {loading ? <Shimmer /> : items?.map((data, index) => <Card text={data?.title} image={data?.image} key={index} />)} */}
            </div>

        </div>
    )
}

export default InfiniteScroll