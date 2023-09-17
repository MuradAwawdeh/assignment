import { useMemo } from 'react';

const useGetGoals = () => {
    return useMemo(() => [
        "Buy a product",
        "Cancel an account",
        "Buy and Recommend a gift",
        "Ask for the business",
    ], []);
};

export default useGetGoals;
