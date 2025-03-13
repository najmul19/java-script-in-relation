// console.log('login')
// step 1 set event habdler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step2 prevent default behavior (prevent reloading page)
    event.preventDefault(); // no reload the page
    console.log('login btn clicked')

    // step 3 get phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})