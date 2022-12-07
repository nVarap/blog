
<table id="Table">
<tr> <th> Term </th> <th> Definition </th> </tr>



</table>

<script>

  var data = {};

  var list = document.getElementById("table");

  data.forEach((item) => {
    let li = document.createElement("td");
    li.innerText = item;
    list.appendChild(li);
  });

</script>

