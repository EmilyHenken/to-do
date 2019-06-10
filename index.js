var submit = $('.submit');

submit.on("click", addToList);

function addToList() {
  var listItem = $('.assignment').val();
  var listSubj = $('.subject').val();
  var cardContainer = $('.card-container');

  cardContainer.append(`<p class="item">
    <button class="doneBtn"> Done </button>
    ${listSubj} - ${listItem}</p>`);

  $('.assignment ').val("");
  $('.subject').val("");


  var doneButton = $('.doneBtn');
  doneButton.on("click", remove);

}
function remove() {
  event.target.parentNode.remove()
}
