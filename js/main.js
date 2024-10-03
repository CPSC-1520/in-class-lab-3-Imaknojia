// Enter your code below.
// Enter your code below.
let resDiv = document.querySelector('.javascript-resources');
let showResources = document.getElementById('show-resources');

showResources.addEventListener('click', function() {
    resDiv.classList.toggle('d-none');
});

let liItems = resDiv.querySelectorAll('.list-group-item');

liItems.forEach(item =>{
  item.addEventListener('mouseover', function(event) {
   console.log(event.target);
   event.target.classList.add('fw-bold');

  });

  item.addEventListener('mouseout', function(event) {

    event.target.classList.remove('fw-bold');

  });

  
});
resDiv.addEventListener('click',function(event){
    if (event.target.classList.contains('list-group-item')){
        event.target.classList.add('fst-italic');
    }
})
