function check(){
    console.log("Param Required")
}

function show(name = check()){
    console.log(name)
}
show()