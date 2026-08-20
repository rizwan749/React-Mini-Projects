const getSmartRecommendations = async (userQuery, productsList) => {
  try {
    // Model ka naam change kar ke "gemini-pro" kar diya hai
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
        You are a product search API. 
        User Query: "${userQuery}"
        Available Products: ${JSON.stringify(productsList)}
        
        Task: Find the best matching products for the user query.
        Return ONLY a raw JSON array of the matching product IDs (numbers). 
        Example output: [1, 5, 8]
    `;
    
    const result = await model.generateContent(prompt);
    const aiResponseText = result.response.text();

    const parsedData = JSON.parse(aiResponseText);
    
    if (!Array.isArray(parsedData)) {
        const extractedArray = Object.values(parsedData).find(val => Array.isArray(val));
        return extractedArray || [];
    }

    return parsedData;
    
  } catch (error) {
    console.error("AI Search Engine Error", error);
    return [];
  }
};