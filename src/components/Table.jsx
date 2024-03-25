import { useEffect } from "react";
import useAxiosDB from "../hooks/useAxiosDB";
import "../styles/components/table.scss";
import Loader from "./Loader";

const Table = () => {
    const { data: products, fetchData, loading, formatCurrency } = useAxiosDB();

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {products && (
                <table className="products_table">
                    <thead>
                        <tr>
                            <th>Nome Produto</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td data-th="Nome">{product.productName}</td>
                                <td data-th="Valor">
                                    {formatCurrency(product.productValue)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Table;
