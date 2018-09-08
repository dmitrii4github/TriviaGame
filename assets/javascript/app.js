function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('team')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}