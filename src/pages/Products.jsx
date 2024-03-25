import Table from "../components/Table";

import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/addProduct");
    };

    return (
        <div>
            <div className="description">
                <h1>Produtos</h1>
                <p>Área destinada a visualização de todos os produtos</p>
                <button className="addProduct" onClick={handleClick}>
                    Adicionar Produto
                </button>
            </div>
            <Table />
        </div>
    );
};

export default Products;
