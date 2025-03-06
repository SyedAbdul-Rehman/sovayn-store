import { Handler } from "@netlify/functions";
import { products, cartItems } from "../../shared/schema";
import { storage } from "../../server/storage";

export const handler: Handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  try {
    // Handle cart operations
    if (event.path.startsWith('/.netlify/functions/api/cart')) {
      if (event.httpMethod === 'GET') {
        // Return cart items
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(await storage.getCartItems(event.headers.sessionid || ''))
        };
      }
      
      if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body || '{}');
        // Add item to cart
        const cartItem = await storage.addToCart({
          productId: data.productId,
          quantity: data.quantity,
          sessionId: event.headers.sessionid || ''
        });
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(cartItem)
        };
      }
    }

    // Handle product operations
    if (event.path.startsWith('/.netlify/functions/api/products')) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(products)
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: 'Not Found' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};
