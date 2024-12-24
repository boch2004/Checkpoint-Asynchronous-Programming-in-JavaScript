    async function awaitCall() {
        const fetchData = () =>
        new Promise((resolve) =>
            setTimeout(() => resolve("Fetched Data"), 2000)
        ); // Simulates API call with 2 seconds delay
    
        const data = await fetchData();
        console.log(data);
    }
    
    // Example Usage:
    awaitCall();
    