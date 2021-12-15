
    const billAmount = document.querySelector("#bill")
    const peopleQuantity = document.querySelector("#people")
    const totalTip = document.querySelector(".totalTip")
    const totalBill = document.querySelector(".totalBill")
    const buttons = document.querySelectorAll(".tip")
    const textPeople = document.querySelector(".textPeople")
    const btnReset = document.querySelector(".reset")
    const customInput = document.querySelector(".custom")

    let bill = 0
    let people = 0
    let tipPercentage = 0

    peopleQuantity.addEventListener("keyup", () =>{
        people = peopleQuantity.value  === "" ? 0 : parseInt(peopleQuantity.value, 10)
        calcular()

        if (people === 0){
            peopleQuantity.classList.add("error")
            textPeople.classList.add("error")
        } else {
            peopleQuantity.classList.remove("error")
            textPeople.classList.remove("error")
        }
    })

    billAmount.addEventListener("keyup", () => { 
        bill = billAmount.value === "" ? 0 : parseInt(billAmount.value)
        calcular()
    })

    customInput.addEventListener("keyup", () =>{
        tipPercentage = (parseFloat(customInput.value) / 100).toFixed(2)
    })

    function calcular (){
        const tipAmountGeneral = bill * tipPercentage
        const tipAmount = people === 0 ? 0 : tipAmountGeneral/people 
        const totalAmountGeneral = bill + tipAmount
        const totalAmount = people === 0 ? 0 : totalAmountGeneral/people 
        totalTip.innerHTML= "$ " + (tipAmount).toFixed(2)
        totalBill.innerHTML= "$ " + (totalAmount).toFixed(2)
    }

    for (let button of buttons){
        button.addEventListener("click", function(){
            tipPercentage = (parseFloat(button.dataset.value,10)) 
            if (document.querySelector(".active")){
                document.querySelector(".active").classList.remove("active")
            } else {
                button.classList.add("active")
            }
        })
    }





    btnReset.addEventListener("click", () => {
        totalTip.innerHTML= "$ 0.00"
        totalBill.innerHTML= "$ 0.00"
        for (let button of buttons){
            button.classList.remove("active")
        }
    })

















