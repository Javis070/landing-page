


    function add(a,b){
    console.log(a+b)
    return a+b
    }

    add(6,9)
    add(8,9)

    const numbera = document.getElementById("numbera")
    const numberb = document.getElementById("numberb")
    const light = document.getElementById("li")
    const submitbutton = document.getElementById("be")
    submitbutton.addEventListener("click", function(){
        const a=Number(numbera.value)
        const b=Number(numberb.value)
        const c=add(a,b)
        light.innerText="Answer: " + c 
    } )


