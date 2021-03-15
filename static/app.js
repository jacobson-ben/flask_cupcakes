const API_URL = 'http://localhost:5000/api/'

async function getCupcakesList() {
  const response = await axios.get(`${API_URL}cupcakes`);
  let cupcakeData = response.data.cupcakes;

  for(let cupcake of cupcakeData) {
    let createRow = createTableRow(cupcake)
    $("#table-body").append(createRow)
  }

}

function createTableRow(cupcake) {
  return `
    <tr id="${cupcake.id}">
      <td>${cupcake.flavor}</td>
      <td>${cupcake.size}</td>
      <td>${cupcake.rating}</td>
      <td><img src="${cupcake.image}" height="100px" width="auto"></td>
    </tr>
  `
}

async function submitForm(evt) {
  evt.preventDefault()
  let flavor = $("#flavor").val()
  let size = $("#size").val()
  let rating = $("#rating").val()
  let image = $("#image").val()
  data = {flavor, size, rating, image}

  const response = await axios.post(`${API_URL}cupcakes`, data)
  let cupcakeData = response.data.cupcake;
  let createRow = createTableRow(cupcakeData);
  $("#table-body").append(createRow);
  $(".add-cupcake").trigger("reset")
}

async function filterResults(evt) {
  evt.preventDefault();
  $("tbody").empty()

  let searchTerm = $("#search_term").val()

  const response = await axios.get(`${API_URL}cupcakes/search?search_term=${searchTerm}`);
  let cupcakeData = response.data.cupcakes;

  for(let cupcake of cupcakeData) {
    let createRow = createTableRow(cupcake)
    $("#table-body").append(createRow)
  }
  $("#search-form").trigger("reset")
}


$(document).ready(getCupcakesList())
$(".add-cupcake").on("submit", submitForm) 
$("#search-form").on("submit", filterResults)