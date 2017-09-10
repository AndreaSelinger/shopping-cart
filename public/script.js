// an array with all of our cart items


var ShoppingApp = function () {
  var _cart = [];

  var _updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    var total = 0;
    var $shoppingCart = $(".cart-list");
    $shoppingCart.empty();
    
    var source = $('#shoppingCart-template').html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < _cart.length; i++) {
      total += _cart[i].price;
      var newHTML = template(_cart[i]);
      
      $shoppingCart.append(newHTML);
      //shoppingCart.append("<div>" + cartItem.name + " - " + cartItem.price + "</div>");
    }
    $('.total').html(total);
  }


  var addItem = function (item) {
    // TODO: Write this function. Remember this function has nothing to do with sdisplay. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    _cart.push(item);
    _updateCart();
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    _cart = [];
    _updateCart();

  }

  return {
    addItem: addItem,
    clearCart: clearCart
  };

}

var app = ShoppingApp();

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
  app.addItem(item);
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});




