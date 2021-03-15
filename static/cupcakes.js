const API_URL = 'http://localhost:5000/api/'

//ajax - get all cupcakes to list in table
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
  $("#add-cupcake").trigger("reset")
}


$(document).ready(getCupcakesList())
$(".add-cupcake").on("submit", submitForm) 