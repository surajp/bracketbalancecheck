(function(){

    let values = prompt("Enter unique integers for bin tree");
    let nodes = prompt("Enter nodes to calculate distance");

    let rootNode = createTree(values);

    alert(inOrder(rootNode,""));
    let nodeArr = nodes.split(",");
    var p1 = getPath(rootNode,parseInt(nodeArr[0]),"");
    var p2 = getPath(rootNode,parseInt(nodeArr[1]),"");
    
    if(p1[0]==-1 || p2[0] == -1){
        alert(-1);
        return;
    }
        
    
    alert(p1+" "+p2);
    let exit = false;i=0,dist=0;
    while(exit==false){
        if(p1[i]!=p2[i]){
            dist=(p1.length-i)+(p2.length-i);
            exit=true;
        }else if(i==p1.length-1){
            dist = (p2.length-1)-i;
            exit=true;
        }else if(i==p2.length-1){
            dist = (p1.length-1)-i;
            exit=true;
        }
        i++;
    }

    alert(dist);

    function inOrder(currNode,path){
        if(currNode==null)
            return path;
        path=inOrder(currNode.left,path);
        path+=currNode.val+",";
        path=inOrder(currNode.right,path);
        return path;
    }

    function getPath(currRoot,theVal,path){
        if(!currRoot || currRoot==null)
            return [-1];
        if(!path)
            path=[];
        path.push(currRoot.val);
        if(currRoot.val == theVal)
            return path;
        else if(currRoot.val > theVal)
            return getPath(currRoot.left,theVal,path);
        else
            return getPath(currRoot.right,theVal,path);
    }

    function createTree(values){
        var vals = values.split(",");
        let rootNode;
        vals.forEach(function(v) {
            v = parseInt(v);
            if(!rootNode)
                rootNode = {left:null,right:null,val:v};
            else
                insertNode(rootNode,{left:null,right:null,val:v});
        }, this);
        return rootNode;
    }

    function insertNode(currRoot,currNode){
        if(currRoot.val>currNode.val){
            if(currRoot.left==null)
                currRoot.left=currNode;
            else
                insertNode(currRoot.left,currNode);
        }else{
            if(currRoot.right==null)
                currRoot.right=currNode;
            else
                insertNode(currRoot.right,currNode);
        }
    }

})();