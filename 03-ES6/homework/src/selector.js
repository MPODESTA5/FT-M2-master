var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for(let i=0; i<startEl.children.length; i++){
    let hh = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet,...hh];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') {
    return 'id';
  }
  else if(selector[0] === '.') {
    return 'class';
  }
  for(let i=1; i<selector.length; i++){
    if(selector[i] === '.'){
      return 'tag.class';
    }
  }
  return 'tag';
  }
  

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function (elemento){
    if('#' + elemento.id === selector){
    return true;
    } else return false;
   }
  } else if (selectorType === "class") {
    matchFunction = function (elemento){
      let classes = elemento.classList;
      for(let i = 0; i < classes.length; i++){
        if('.' + classes[i] === selector){
          return true;
        }
      }
      return false;
     }
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento){
      var [tagBusc, classBusc] = selector.split('.');
      classBusc = '.' + classBusc;
      if(matchFunctionMaker(tagBusc)(elemento) && matchFunctionMaker(classBusc)(elemento)){
        return true;
     }
     else return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function (elemento){
      if(elemento.tagName.toLowerCase() === selector){
      return true;
      } else return false;
     }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
