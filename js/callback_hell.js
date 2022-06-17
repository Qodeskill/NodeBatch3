

function add(num, callBack) {
    return callBack(num + 5, false)
}
function sub(num, callBack) {
    return callBack(num - 3, false)
}
function mul(num, callBack) {
    return callBack(num * 2, false)
}
function div(num, callBack) {
    return callBack(num / 2 - 2, false)
}

add(5, (addRes, error) => {
    if (!error) {
        sub(addRes, (addRes, error) => {
            if (!error) {
                mul(addRes, (addRes, error) => {
                    if (!error) {
                        div(addRes, (addRes, error) => {
                            if (!error) {
                                console.log(addRes)
                            }
                        });
                    }
                });
            }
        });
    }
});
//promise es8