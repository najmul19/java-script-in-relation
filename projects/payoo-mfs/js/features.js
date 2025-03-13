document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    // show cash out btn clicked
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide ad money form
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    // hid cash out btn clicked
    document.getElementById('cash-out-form').classList.add('hidden');
    // show ad money form
    document.getElementById('add-money-form').classList.remove('hidden');
})