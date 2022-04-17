import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const ProductDetails = () => {
    const {id} = useParams(); // req.params : {id: 1}

    useEffect(() => {
        console.log("helo")
    }, [])

    return <div>
        You are seeing details of product: {id}
    </div>
}