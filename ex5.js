function hello(stop) {
    let number = 0;
    const id = setInterval(function () {
        number++;
        console.log('Witam... i tak pięć razy, co jedną sekundę :)', number);

        if (number >= stop) {
            clearInterval(id)
        }
    }, 1000)
}

hello(5);