// console.log('login')
// step 1 set event habdler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step2 prevent default behavior (prevent reloading page)
    event.preventDefault(); // no reload the page
    console.log('login btn clicked')

    // step 3 get phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)
    // temporary way
    // step4: validate the phone and pin
    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('loged in')
        // step 5 : allow user
        window.location.href = 'home.html'
    } else {
        alert('wrong phone or pin')
    }
})