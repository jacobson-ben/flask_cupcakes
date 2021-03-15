const API_URL = 'http://localhost:5000/api/'

//ajax - get all cupcakes to list in table
async function getCupcakesList() {
  const response = await axios.get(`${API_URL}cupcakes`)


}

// ajax - post a new cupcake 