(function(){
    var openList = "([{<";
    var closeList=")]}>";

    let str = prompt("Enter string");
    alert(matchBrackets(str,false,""));
    

    function matchBrackets(inpstr,unmatched,openBStr){
        var matchindex=-1;
        if(unmatched==true)
            return 0;
        else if(inpstr.length==0)
            return 1;
        else if(openList.indexOf(inpstr[0])>-1)
            return matchBrackets(inpstr.substr(1),false,openBStr+inpstr[0]);
        else if((matchindex=closeList.indexOf(inpstr[0]))>-1){
            if(openBStr && openBStr.length>0 &&  openBStr[openBStr.length-1]==openList[matchindex])
                return matchBrackets(inpstr.substr(1),false,openBStr.substr(0,openBStr.length-1));
            else
                return matchBrackets(inpstr.substr(1),true,openBStr);
        }else
            return matchBrackets(inpstr.substr(1),false,openBStr);
    }
})();