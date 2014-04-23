/*
#
#       I was having trouble understanding .app();
#       So I just started console.loging( everything I could );
#       some how func[func]  "on line 26" displayed  

                     function toUpperCase() { [native code] } 

          And my test said I passed it. 
          Then during the HR google meetup, Joseph, explained how to use .apply();
          I was still unable to get it to work in the _.invoke function.
          However just replacing .call() with .appy()  "on lines 46 & 50"  I get the same result;
#
#
#
#
#
*/
  _.invoke = function(collection, func, args) {
    var list = [];
    func || (func = _.identity);

    if(func[func]){
      _.each(collection, function (item, index, array){
        //console.log(func[func]);
        list.push(func[func].call(item));
      });
    } else {
      _.each(collection, function (item, index, array){
        list.push(func.call(item));
      });
    }
    return list;

  };



_.invoke = function(collection, func, args) {
    var list = [];
    func || (func = _.identity);

    if(func[func]){
      _.each(collection, function (item, index, array){
        //console.log(func[func]);
        list.push(func[func].apply(item, arguments));
      });
    } else {
      _.each(collection, function (item, index, array){
          list.push(func.apply(item));
      });
    }
    return list;

  };

