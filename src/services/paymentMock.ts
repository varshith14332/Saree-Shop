export const processPayment = (amount: number): Promise<{ success: boolean; transactionId?: string; error?: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate 90% success rate
            const isSuccess = Math.random() < 0.9;

            if (isSuccess) {
                resolve({
                    success: true,
                    transactionId: `TXN_${Date.now()}_${Math.floor(Math.random() * 1000)}`
                });
            } else {
                resolve({
                    success: false,
                    error: "Payment failed. Please try again."
                });
            }
        }, 2000);
    });
};
