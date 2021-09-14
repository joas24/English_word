
var wrong="/ "
function swit(self, one, two){
    if(self.value==one){
        self.value=two;
        $(self).css('background-color', 'gray');
        $(self).css('color', 'white');
        $(self).css('border', '0px')
        wrong += one + "(" + two + ") / ";
    }
    else{
        self.value=one;
        $(self).css('background-color', 'white');
        $(self).css('color', 'orange');
        $(self).css('border', '2px solid black')
    }
}

function print(self){
    self.value=wrong;
}
function new_tap(){
    document.write(wrong);
}