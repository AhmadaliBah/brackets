module.exports = function check(str, bracketsConfig) {
        let leftArr=[];
        let rightArr = [];
        for(let i=0; i<str.length; i++){
            if(str[i] === '(' || str[i] === '[' || str[i] === "{"){
                leftArr.push(str[i]);
            }


            if(str[i] === ')'){

                rightArr.push("(");
            }else if(str[i] === '}'){

                rightArr.push("{");
            } else if(str[i] === ']'){

                rightArr.push("[");
            }
        }

        rightArr.reverse();

        if(leftArr.length<rightArr.length || leftArr.length>rightArr.length){
            return false;
        }

        for(let k=0; k<leftArr.length; k++) {
            if(leftArr[k] != rightArr[k]){
                return false;
            }
        }

        return true;
};
