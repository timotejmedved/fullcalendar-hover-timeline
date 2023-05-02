document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek'
    },
    aspectRatio: 1.6,
    initialView: 'resourceTimelineDay',
    resourceGroupField: 'building',
    slotDuration: '00:15:00',
    resources: [
      { id: '1', title: 'Resource A' },
      { id: '2', title: 'Resource B' },
      { id: '3', title: 'Resource C' },
      { id: '4', title: 'Resource A' },
      { id: '5', title: 'Resource B' },
      { id: '6', title: 'Resource C' },
      { id: '11', title: 'Resource A' },
      { id: '21', title: 'Resource B' },
      { id: '31', title: 'Resource C' },
      { id: '41', title: 'Resource A' },
      { id: '51', title: 'Resource B' },
      { id: '61', title: 'Resource C' },
      { id: '111', title: 'Resource A' },
      { id: '211', title: 'Resource B' },
      { id: '311', title: 'Resource C' },
      { id: '411', title: 'Resource A' },
      { id: '511', title: 'Resource B' },
      { id: '611', title: 'Resource C' },

      { id: '19', title: 'Resource A' },
      { id: '29', title: 'Resource B' },
      { id: '39', title: 'Resource C' },
      { id: '49', title: 'Resource A' },
      { id: '59', title: 'Resource B' },
      { id: '69', title: 'Resource C' },
      { id: '191', title: 'Resource A' },
      { id: '291', title: 'Resource B' },
      { id: '319', title: 'Resource C' },
      { id: '419', title: 'Resource A' },
      { id: '519', title: 'Resource B' },
      { id: '619', title: 'Resource C' },
      { id: '1191', title: 'Resource A' },
      { id: '2191', title: 'Resource B' },
      { id: '3191', title: 'Resource C' },
      { id: '4191', title: 'Resource A' },
      { id: '5191', title: 'Resource B' },
      { id: '6191', title: 'Resource C' },
    ],
    events: [
      { resourceId: '1', start: '2023-05-02T02:00:00', end: '2023-05-02T07:00:00', title: 'event 1' },
      { resourceId: '2', start: '2023-05-02T05:00:00', end: '2023-05-02T09:00:00', title: 'event 2' },
      { resourceId: '3', start: '2023-05-02T03:00:00', end: '2023-05-02T08:00:00', title: 'event 3' },
      { resourceId: '4', start: '2023-05-02T06:00:00', end: '2023-05-02T12:00:00', title: 'event 4' },
      { resourceId: '5', start: '2023-05-02T08:00:00', end: '2023-05-02T13:00:00', title: 'event 5' },
      { resourceId: '6', start: '2023-05-02T10:00:00', end: '2023-05-02T14:00:00', title: 'event 6' },
      { resourceId: '1', start: '2023-05-02T13:00:00', end: '2023-05-02T18:00:00', title: 'event 7' },
      { resourceId: '2', start: '2023-05-02T10:00:00', end: '2023-05-02T14:00:00', title: 'event 8' },
      { resourceId: '3', start: '2023-05-02T08:00:00', end: '2023-05-02T12:30:00', title: 'event 9' }
    ],

    eventContent: function (arg) {

      var event = arg.event;

      var customHtml = '';

      customHtml += "<span class='r10 font-xxs font-bold' style='overflow: hidden;'>" + event.title + "</span>";

      customHtml += "<span class='r10 highlighted-badge font-xxs font-bold'> <br/> jkaSDHLKJahsdlkjAHS</span>";


      return { html: customHtml }
    },

    eventDidMount: function (info) {

    },





    viewDidMount: function (info) {
      var rowHeights = document.querySelectorAll('.fc-timeline-body  .fc-scrollgrid-sync-table  tbody tr');
  
      var numResources = document.querySelectorAll('table.fc-datagrid-body tbody tr').length;

      var resourcesHeights = document.querySelectorAll('table.fc-datagrid-body tbody tr')

      console.log(resourcesHeights.item(1))
      console.log(resourcesHeights.values())

      var tt = resourcesHeights.item(0);

      const compStyles = window.getComputedStyle(tt);
      var height = compStyles.getPropertyValue("height");
      console.log(height)

      // create new table element
      var hoverTable = document.createElement('table');
      hoverTable.classList.add('hover-table');

      // get the main table element
      var mainTable = document.querySelector('.fc-timeline-body table');

      console.log("maintable");
      console.log(mainTable.offsetHeight * 3);


      //var cellWidth = mainTable.querySelector('td').offsetWidth;
      //var rowHeight = mainTable.querySelector('tr').offsetHeight;
      var cellWidth = 30;
      // var rowHeight = 34.4;
      var rowHeight = 34;
      //console.log(rowHeight)

      // set the position, width, and height of the hover table
      hoverTable.style.position = 'absolute';
      hoverTable.style.top = mainTable.offsetTop + 'px';
      hoverTable.style.left = mainTable.offsetLeft + 'px';
      hoverTable.style.width = (cellWidth * 3) + 'px';
      hoverTable.style.height = (rowHeight * 3) + 'px';
      hoverTable.style.border = 'none';
      hoverTable.style.borderRadius = '0';
      hoverTable.style.boxShadow = 'none';
      hoverTable.style.backgroundColor = 'transparent';
      hoverTable.style.borderWidth = '0';



      // add rows and cells to the hover table  
      for (var i = 0; i < numResources + 1; i++) {

        var row = document.createElement('tr');

        if (i == 0) {
          row.style.height = '32.5 px';
        } else {
          row.style.height = rowHeight + 'px';
        }

        for (var j = 0; j < 48; j++) {
          var cell = document.createElement('td');
          cell.style.width = cellWidth + 'px';
          row.appendChild(cell);
        }
        hoverTable.appendChild(row);
      }

      // add the hover table to the DOM
      mainTable.parentNode.insertBefore(hoverTable, mainTable.nextSibling);

      // add event listeners to the cells of the hover table
      var hoverCells = hoverTable.querySelectorAll('td');
      hoverCells.forEach(function (cell) {
        cell.addEventListener('mouseenter', function () {
          cell.classList.add('hover');
        });
        cell.addEventListener('mouseleave', function () {
          cell.classList.remove('hover');
        });
      });
    }

  });

  calendar.render();
});