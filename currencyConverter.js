const API_KEY = "816e92e81f454fb8be8c40fc6666aafa"; // Your API key
const amount = 1; // Specify the amount to convert
const URL = `https://api.exchangerate.host/convert?from=USD&to=INR&amount=${amount}&access_key=${API_KEY}`;



const fetchCurrency = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (!data.success) {
            throw new Error(`API error: ${data.error.info}`);
        }

        console.log(`Exchange Rate (USD to INR): ${data.result}`);
    } catch (error) {
        console.error("Error fetching currency data:", error);
    }
};

fetchCurrency();
