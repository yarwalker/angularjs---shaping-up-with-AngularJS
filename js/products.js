(function(){  
  var app = angular.module('store-directives', []);

  app.directive('productTitle', function(){
  	return{
  		restrict: 'E', // type of directive (E - for Element Directive, A - for Attribute Directive)
  		templateUrl: 'product-title.html' // Url of template
  	};
  });

  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "product-descriptions.html"
    };
  });

  app.directive('productSpecs', function(){
  	return{
  		restrict: 'A', // type of directive (E - for Element Directive, A - for Attribute Directive)
  		templateUrl: 'product-specs.html' // Url of template
  	};
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive('productTabs', function(){
  	return{
  		restrict: 'E', 
  		templateUrl: 'product-tabs.html',
  		controller: function(){
    		this.tab = 1;

    		this.setTab = function(newValue){
      			this.tab = newValue;
    		};

    		this.isSet = function(tabName){
      			return this.tab === tabName;
    		};
  		},
  		controllerAs: 'tab'
  	};
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function(){
    		this.current = 0;
    		this.setCurrent = function(imageNumber){
      			this.current = imageNumber || 0;
    		};
  		},
      controllerAs: "gallery"
    };
  });

})();  