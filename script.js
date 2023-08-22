function nameStore() {
    var userName = document.getElementById('input_id').value;
    localStorage.setItem('name', JSON.stringify(userName));
    return userName;
}
