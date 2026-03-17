---
layout: null
sitemap: false
---

getData = async function () {
    console.log('DataTables getData called');
    try {
      console.log('Fetching data from {{ site.dataTableUrl }}');
      let data = await $.ajax({
        url: '{{ site.dataTableUrl }}/quotes',
        //crossDomain: true, 
        prefetch: false,
        dataSrc: '',
      });
      console.log('DataTables data loaded:', data);
      let ret = data.map(function (item) {
        return item.split(','); // wrap each string in an array
      });
      return ret;
    } catch (error) {
      console.error('Error in getData:', error);
      return [];
    }
  };

  $(document).ready(function () {
    console.log('DataTables initialized');
    getData().then(function (data) {
      console.log('DataTables data received:', data);
      //let table = new DataTable('#qTable');
      $('div.datatable-begin').nextUntil('div.datatable-end', 'table').addClass('display');
      $('table.display').dataTable({
        paging: true,
        stateSave: true,
        searching: true,
        data: data, // use the data from getData
            columnDefs: [
        {
            targets: 0,
            data: 'download_link',
            render: function (data, type, row, meta) {
                return '<a href="./' + row[0] + '">'+row[0]+'</a>';
            }
        }
    ],
        on: {
        order: () => console.log('DataTables data received:', 'order'),
        search: () => console.log('DataTables data received:', 'search'),
        select: () => console.log('DataTables data received:', 'select'),
        'user-select': () => console.log('DataTables data received:', 'user-select'),
    }
      });
      //$('.display').dataTable();
    });
  });