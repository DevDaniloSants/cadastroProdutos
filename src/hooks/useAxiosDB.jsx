import { useState } from "react";
import axios from "axios";

const url = "https://desafiooak-backend.onrender.com/api/product";

const useAxiosDB = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const formatCurrency = (value) => {
        const numberValue = parseFloat(value);

        if (!isNaN(numberValue)) {
            return numberValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
        } else {
            return "";
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);

            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleProductAddition = async (data) => {
        try {
            const response = await axios.post(url, data);

            if (response.status === 201) {
                setErrors(null);
            }

            return response;
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Erro ao processar a solicitação:", error);
            }
        }
    };

    return {
        data,
        loading,
        errors,
        fetchData,
        handleProductAddition,
        formatCurrency,
    };
};

export default useAxiosDB;
