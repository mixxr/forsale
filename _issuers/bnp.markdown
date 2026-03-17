---
layout: page
title:  "BNP Paribas"
date:   2026-02-24 17:26:40 +0100
categories: issuers
dataTableUrl: http://127.0.0.1:8090/certificates?issuer=bnp
ext-css: //cdn.datatables.net/2.3.7/css/dataTables.dataTables.min.css
head-extra: dtable-header.html
footer-extra: dtable.html
comments: false
---
BNP is...

## {{ site.issuers_par1_title }}
The website provides clear information regarding: 
- calendar, 
- coupon ex-date, 
- levels and barriers

**Rating**: 4/5

## {{ site.issuers_par2_title }}
{{ site.issuers_par2_content }}
Note: If you would like to add your own certificate, please send us a [message](../request)

<div>
<!--  /certificates?issuer=[issuer] -->
<!--
ISIN
Issuer
Name
Composition (tickers)
Issue date
Exp. date
Currency
Coupon (%/freq.)
Type [tags]
-->
<table id="dTable" data-dt-path="/certificates/{{page.slug}}">
<thead>
  <tr>
    <th>ISIN</th>
    <th>Issuer</th>
    <th>Name</th>
    <th>Composition</th>
    <th>Issued</th>
    <th>Expires</th>
    <th>Currency</th>
    <th>Coupon</th>
    <th>Type</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>
</div>
