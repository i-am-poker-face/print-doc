function filterDataFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("infoFromDbTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

const setSelected = (el, selectedArr) => {
    for(let i = 0; i < selectedArr.length; i++){
        console.log($(el + "option[value='" + selectedArr[i] + "']"));
        $(el + "option[value='" + selectedArr[i] + "']").attr("selected", true);
    }
};