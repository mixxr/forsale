---
layout: page
title: Quotes
dataTableUrl: http://127.0.0.1:8090/quotes/$isin/latest
ext-css: //cdn.datatables.net/2.3.7/css/dataTables.dataTables.min.css
head-extra: dtable-header.html
footer-extra: dtable.html
comments: false
permalink: /quotes
# ext-js: [
#     //cdn.datatables.net/2.3.7/js/dataTables.dataTables.min.js, 
#     //code.jquery.com/jquery-3.5.1.min.js
# ]
---
# {{ page.title }}
<!-- <div class="datatable-begin"></div>

source    | content_type                           | extractor_type | base_url
------- | ------------------------------------- | -------- | -----------
Apples  | A small, somewhat round ...           | Fruit    | Fuji
Bananas | A long and curved, often-yellow ...   | Fruit    | Snow
Kiwis   | A small, hairy-skinned sweet ...      | Fruit    | Golden
Oranges | A spherical, orange-colored sweet ... | Fruit    | Navel


<div class="datatable-end"></div> /quotes/:sources/latest/:isin 
/quotes/<isin>/latest

ISIN
Name
Ask
Bid
Currency
DT
-->
<div>
TABLE
<table id="dTable" data-dt-path="">
<thead>
    <tr>
    <th>ISIN</th>
    <th>Name</th>
    <th>Ask</th>
    <th>Bid</th>
    <th>Currency</th>
    <th>Obs Date</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>
</div>