---
layout: page
title: Vocab 
toc: true
permalink: /vocabunit2/
tags: [Week 15]
categories: [hacks]
---

<table id="myTable">
    <th> Term </th>
    <th> Definition </th>


<script>
function myFunction() {
  var data = ["yello", "world"]
  var data2 = ["bana", "nanas"]

  var list = document.getElementById("myTable");

  for (i = 0; i < data.length(); i++){
    var row = list.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = data[i];
    cell2.innerHTML = data2[i];
  }
  
  };
myFunction();
</script>


