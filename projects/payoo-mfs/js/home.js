// document.getElementById('bnt-add-money').addEventListener('click',function(event){
//     event.preventDefault();
//     const valu1= document.getElementById('value')
//     const value= document.getElementById('value').innerText;
//     const ammount = document.getElementById('add-ammount').value;
//     ammount = value+ammount;
//     valu1.appendChild(ammount)
// })

// add money to the account
document.getElementById('bnt-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('ooo')
    const ammount = document.getElementById('add-ammount').value;
    console.log(ammount)
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)
})