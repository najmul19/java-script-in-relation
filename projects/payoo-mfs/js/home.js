// document.getElementById('bnt-add-money').addEventListener('click',function(event){
//     event.preventDefault();
//     const valu1= document.getElementById('ballance')
//     const value= document.getElementById('ballance').innerText;
//     const ammount = document.getElementById('add-ammount').value;
//     ammount = value+ammount;
//     valu1.appendChild(ammount)
// })

// add money to the account
document.getElementById('bnt-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('ooo')
    // const ammount = document.getElementById('add-ammount').value;
    // console.log(ammount)
    // const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber)
    const ammount = getInputFieldValue('add-ammount');
    console.log(ammount);
    const pinNumber = getInputFieldValue('pin-number');
    // wrong way
    // if(pinNumber==='1234'){
    if(pinNumber===1234){
        console.log('adding money to your account')
        const ballance= document.getElementById('ballance').innerText;
        const newBallance = parseFloat(ballance)+ ammount ;
        console.log(newBallance)
        document.getElementById('ballance').innerText = newBallance;
       
    } else{
        console.log('failded to add money! please try again')
    }
})