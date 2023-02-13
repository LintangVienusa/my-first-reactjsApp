import { useParams } from "react-router-dom";

const Category = () => {

    const params = useParams();

    return(
        <>
            <h2>This is Category page!</h2><br />
            <h3>You access this menu via {params.id} </h3>
        </>
    ) 
}

export default Category;