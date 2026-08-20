import { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { GoogleGenAI } from "@google/genai";
import ProductCard from '../Components/ProductCard';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const getSmartRecommendations = async (userQuery, productsList) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `
        You are a product search API. 
        User Query: "${userQuery}"
        Available Products: ${JSON.stringify(productsList)}
        
        Task: Find the best matching products for the user query from the given product list.
        Return ONLY a raw JSON array of the matching product IDs (numbers). 
        Example output: [1, 5, 8]
      `,
      config: {
        responseMimeType: "application/json"
      }
    });

    const aiResponseText = response.text;
    console.log("AI Raw Response:", aiResponseText);

    const parsedData = JSON.parse(aiResponseText);
    
    if (Array.isArray(parsedData)) {
        return parsedData;
    }
    
    const extractedArray = Object.values(parsedData).find(val => Array.isArray(val));
    return extractedArray || [];
    
  } catch (error) {
    console.error("AI Search Error:", error);
    return null; 
  }
};

const Store = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
        .then(res => res.json())
        .then(data => {
            const formattedProducts = data.products.map(p => ({
                id: p.id,
                title: p.title,
                price: p.price,
                category: p.category,
                description: p.description,
                image: p.thumbnail 
            }));

            setProducts(formattedProducts);
            setFilteredProducts(formattedProducts);
            setLoading(false);
        })
        .catch(error => {
            console.error("API Load Error:", error);
            alert("Products load nahi ho sake. Please internet check karein.");
            setLoading(false); 
        });
    }, []);

    const handleSearch = async () => {
        if (searchQuery.trim() === "") {
            setFilteredProducts(products);
            return;
        }

        setIsSearching(true);

        try {
            // Data payload chota rakhne ke liye sirf zaroori fields bhej rahe hain
            const simplifiedProducts = products.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                description: p.description
            }));

            // 1. AI Search execution
            const matchedIds = await getSmartRecommendations(searchQuery, simplifiedProducts);
            console.log("Matched IDs from AI:", matchedIds);

            if (matchedIds && matchedIds.length > 0) {
                const results = products.filter(p => matchedIds.some(ai_id => Number(ai_id) === Number(p.id)));
                if (results.length > 0) {
                    setFilteredProducts(results);
                    setIsSearching(false);
                    return;
                }
            }

            // 2. AUTOMATIC FALLBACK: Local Search
            console.log("Falling back to local search...");
            const query = searchQuery.toLowerCase();
            const fallbackResults = products.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );

            if (fallbackResults.length > 0) {
                setFilteredProducts(fallbackResults);
            } else {
                alert("No matching products found.");
                setFilteredProducts(products);
            }

        } catch (error) {
            console.error("Search failed:", error);
            setFilteredProducts(products);
        } finally {
            setIsSearching(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    if (loading) {
        return <div className='font-bold text-2xl text-gray-400 mt-7 text-center'>Loading Products...</div>;
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-center font-bold text-3xl text-accent mt-5 mb-5'>Our Latest Collection</h1>
            
            <div className="flex justify-center mb-12">
                <div className="w-full max-w-2xl flex shadow-lg rounded-full overflow-hidden border border-gray-200 bg-white">
                    <input 
                        type="text" 
                        placeholder="Ask AI: 'Show me smartphones' or 'cheap beauty items'..." 
                        className="w-full px-6 py-4 focus:outline-none text-gray-700 text-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown} 
                    />
                    <button 
                        className={`text-white px-8 py-4 font-bold transition flex items-center gap-2 w-55 ${isSearching ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                        onClick={handleSearch}
                        disabled={isSearching}
                    >
                        <FaSearch className="text-xl"/>
                        {isSearching ? "Searching..." : "AI Search"}
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Store;