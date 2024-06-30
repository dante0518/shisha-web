const searchBar = document.querySelector('.search-text')

searchBar.addEventListener('focus', function() {
    searchBar.setAttribute('placeholder', "Type here to search")
})
searchBar.addEventListener('blur', function() {
    searchBar.setAttribute('placeholder', "search here")
})

