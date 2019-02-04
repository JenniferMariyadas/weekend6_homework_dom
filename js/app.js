document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  console.log("i'm going to save");
  form.addEventListener('submit', handleSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});



const handleSubmit = function(event) {
  console.log("i've been saved");
  event.preventDefault();
  const newData = document.querySelector('#co2-emissions');

  //create Div in data list to append  details to
  const newDataItem = document.createElement('div');
  newDataItem.classList.add('data');
  console.log("Div created")

  //create new  h2 to push country to div
  const newCountryItem = document.createElement('h2');
  newCountryItem.classList.add('country');
  newCountryItem.textContent=`Country: ${this.country.value}`; //change to dynamically accept title
  console.log("h2 created")

  //create new  h4 to push global total to div
  const newGlobalItem = document.createElement('h4');
  newGlobalItem.classList.add('global-total');
  newGlobalItem.textContent=`Global Total(%): ${this.global_total.value}`; //change to dynamically accept author
  console.log("h4 created")

  //create new  p to push cause to div
  const newCauseItem = document.createElement('p');
  newCauseItem.classList.add('cause');
  newCauseItem.textContent=`Cause: ${this.cause.value}`; //change to dynamically accept author
  console.log("cause")

  //create new  p to push status to div
  const newStatusItem = document.createElement('p');
  newStatusItem.classList.add('status');
  newStatusItem.textContent=`Status: ${this.status.value}`; //change to dynamically accept author
  console.log("status")


  newDataItem.appendChild(newCountryItem);
  newDataItem.appendChild(newGlobalItem);
  newDataItem.appendChild(newCauseItem);
  newDataItem.appendChild(newStatusItem);
  newData.appendChild(newDataItem);

}

  const handleDeleteAllClick = function (event) {
    const data = document.querySelector('#co2-emissions');
    data.innerHTML = '';
  }
