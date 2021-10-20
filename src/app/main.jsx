import React, { useEffect } from 'react'

import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-grid";
import products from "./products.json";
import { Checkbox, RadioGroup } from "@progress/kendo-react-inputs";
import { getter } from "@progress/kendo-react-common";
import columns from "./columns";
import { title } from "process";
import StockTable from './components/StockTable';
import Constants from './components/Constants';

const DATA_ITEM_KEY = "ProductID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);
const selectionModes = [
  {
    value: "single",
    label: "Single selection mode",
  },
  {
    value: "multiple",
    label: "Multiple selection mode",
  },
];

const App = () => {
  const items = Constants().ITEMS;
const fields =  Constants().FIELD_DEF
  const [data, setData] = React.useState(
    products.map((dataItem) =>
      Object.assign(
        {
          selected: false,
        },
        dataItem
      )
    )
  );
  const [selectedState, setSelectedState] = React.useState({});
  const [dragEnabled, setDragEnabled] = React.useState(true);
  const [cellEnabled, setCellEnabled] = React.useState(true);
  const [flag, setFlag] = React.useState(false);

  const [stateColumns, setStateColumns] = React.useState([
    {
      "index": 0,
      "field": "ProductName"
    },
    {
      "index": 1,
      "field": "UnitPrice"
    }, {
      "index": 2,
      "field": "Discontinued"
    }, {
      "index": 3,
      "field": "UnitsInStock"
    }
  ]);

  const [selectionMode, setSelectionMode] = React.useState(
    selectionModes[1].value
  );
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('settings'))) {
      var oldsettings = JSON.parse(localStorage.getItem('settings'));
      let newarry = [...oldsettings]
      setStateColumns(newarry)
    }else{
      localStorage.setItem('settings', JSON.stringify(stateColumns))
      setStateColumns(stateColumns)

    }
 
  },[])

  const onSelectionChange = (event) => {

    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
    const aa = Object.keys(newSelectedState);
    const bbv = Object.values(newSelectedState);

    let result = aa.map(i => Number(i));
    
    var filtered = data.filter(
      function (e) {
        return this.indexOf(e.ProductID) != -1;
      },
      result
    );
    let myFieldName = ""
    let AllOldColumnReorder = JSON.parse(localStorage.getItem('settings'));
    AllOldColumnReorder.map((e) => {
      if (e.index == bbv[0]) {
        myFieldName = e.field
        return e.field
      }

    })
    var sum = filtered.map((e) => {
      return e[myFieldName]
    }).reduce((prev, curr) => prev + curr, 0)

    console.log(filtered + "  " + myFieldName + "  " + sum);
  };

  const onKeyDown = (event) => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const onDragChange = (event) => {
    setDragEnabled(event.value);
  };

  const onCellChange = (event) => {
    setCellEnabled(event.value);
  };

  const onSelectionModeChange = (event) => {

    setSelectionMode(event.value);
  };

  const onColumnReorder = (event) => {

    if (event) {
      const reorderColumn = event.columns.map((x) => {
        return {
          index: x.orderIndex,
          field: x.field
        }
      });


      var usersettingSort = reorderColumn.sort(function (a, b) {
       return a.index - b.index;
      });
      localStorage.setItem('settings', JSON.stringify(usersettingSort))
 
     
    }



  }



  // setStateColumns(stateColumns.sort(sortFunc))


  return (
    <div>
    <StockTable  items={items} fields={fields} id="stocks" data-source="lightstreamer"/>
      <Grid
        style={{
          height: "400px",

        }}
        reorderable={true}

        data={data.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          drag: dragEnabled,
          cell: cellEnabled,
          mode: selectionMode,
        }}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
        onColumnReorder={onColumnReorder}
      >
        {stateColumns.map((e, index) => {
          return (
            <Column field={e.field} title={e.field} width='500' key={index} />

          )
        })}




      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("my-app"));
