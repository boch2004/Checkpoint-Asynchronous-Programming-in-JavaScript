    async function awaitCallWithErrorHandling() {
        const fetchData = (shouldFail) =>
        new Promise((resolve, reject) =>
            setTimeout(() => {
            if (shouldFail) {
                reject(new Error("API call failed!"));
            } else {
                resolve("Fetched Data");
            }
            }, 2000)
        );
    
        try {
        const data = await fetchData(false); // Change to `true` to simulate an error
        console.log(data);
        } catch (error) {
        console.error("Error:", error.message);
        }
    }
    
    // Example Usage:
    awaitCallWithErrorHandling();
    