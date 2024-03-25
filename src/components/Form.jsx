import { useState } from "react";

import "../styles/components/form.scss";

import useAxiosDB from "../hooks/useAxiosDB";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productValue, setProductValue] = useState(0);
    const [productAvailable, setProductAvailable] = useState("");

    const { handleProductAddition, errors } = useAxiosDB();
    const navigate = useNavigate();

    const clearFields = () => {
        setProductName("");
        setProductDescription("");
        setProductValue(0);
        setProductAvailable("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            productName,
            productDescription,
            productValue,
            productAvailable,
        };

        const product = await handleProductAddition(newProduct);

        if (product) {
            clearFields();
            navigate("/");
            console.log(product);
        }
    };

    const hasError = (fieldName) => {
        return errors.some((error) =>
            error.toLowerCase().includes(fieldName.toLowerCase())
        );
    };

    return (
        <form className="product_form" onSubmit={handleSubmit}>
            <label>
                <span>Nome do Produto</span>
                <input
                    type="text"
                    name="productName"
                    className={
                        errors && hasError("nome do produto") ? "err" : ""
                    }
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </label>
            <label>
                <span>Descrição do Produto</span>
                <input
                    type="text"
                    name="productDescription"
                    className={
                        errors && hasError("descrição do produto") ? "err" : ""
                    }
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </label>
            <label>
                <span>Valor do Produto</span>
                <input
                    type="number"
                    step="0.01"
                    name="productValue"
                    min={0}
                    className={
                        errors && hasError("valor do produto") ? "err" : ""
                    }
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                />
            </label>
            <label>
                <span>Produto disponível ?</span>
                <select
                    name="productAvailable"
                    value={productAvailable}
                    onChange={(e) => setProductAvailable(e.target.value)}
                >
                    <option value="yes">Sim</option>
                    <option value="not">Não</option>
                </select>
            </label>
            {errors && (
                <div className="errors">
                    {errors.map((error) => (
                        <p key={error}>* {error}</p>
                    ))}
                </div>
            )}
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Form;
