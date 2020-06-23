const commentVault = [
'Good Choice!',
"That's Tasty!",
'Healthy Choice!',
'Awesome!',
'Incredible Choice!',
'Fantastic Option!',
"That's My Favourote Tooo!",
"This Cooks In No Time!",
"That's Our Restaurants All Time Favourite!"
];
const mainMenuPrices = {
'burger': 10.25,
'pizza': 9.99,
"hotdog": 1.99,
"burrito": 2.99,
"sandwich": 0.99,
"chicken": 3.99,
"salad": 6.99
};
const sidesMenuPrices = {
"fries": 1.99,
"carrot": 0.50,
"celery": 1.00,
"mashed potatoes": 1.05,
"broccoli": 0.95,
"ranch": 0.25,
"blue cheese": 0.50
};


const processingOrder = (totalPrice) => {
  alert('Processing Your Order');
  document.querySelector('.comment').innerHTML = commentVault[Math.floor(Math.random() * (commentVault.length - 0) + 0)];
  document.querySelector('.price').innerHTML ='Your Total Is: $'+totalPrice;
}


const orderNow = () => {
  alert('Thank You For The Order, Will Be Right Back In A Moment!');
  
  const mainMenu = document.querySelectorAll('input.mainmenu');
  const sidesMenu = document.querySelectorAll('input.sidesmenu');
  var totalPrice = 0.0;

  for( var i = 0; i < mainMenu.length; i++) {
    if(mainMenu[i].checked)
      totalPrice += mainMenuPrices[mainMenu[i].value];
  }

  for( var i = 0; i < sidesMenu.length; i++) {
    if(sidesMenu[i].checked)
      totalPrice += sidesMenuPrices[sidesMenu[i].value];
  }

  processingOrder(totalPrice);
}




