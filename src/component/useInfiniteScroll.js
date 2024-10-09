import { useEffect, useState } from "react";
import axios from "axios";

function useInfinteScroll(ref, data) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const array = [...ref.current.children];
        const intersection = new IntersectionObserver((element) => {

            if (!element[0].isIntersecting) return;
            console.log(element[0].target);
            apicall();
            // unobserve last element;
            intersection.unobserve(element[0].target);
        }, {
            threshold: 1
        })
        if (ref.current.children[array.length - 1])
            intersection.observe(ref.current.children[array.length - 1]);

    }, [items])


    async function apicall() {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setLoading(false);
        console.log(res.data);
        const temp = [...items, ...res.data];
        setItems(temp);
    }

    useEffect(() => {
        apicall();

    }, [])







    return { items, loading };
}
export default useInfinteScroll;