import React, { useState, useEffect } from 'react'
import Constants from './Constants'
import {
  LightstreamerClient
} from 'lightstreamer-client-web/lightstreamer-core.esm'
import { Subscription } from 'lightstreamer-client-web/lightstreamer-core.esm'

import formatDecimal from './format'

export default function Stock({ items , fields }) {

  let [state, setstate] = useState({})
  useEffect(() => {
  

    var sub = new Subscription(
      'MERGE',
      items,
      fields && fields.map((fieldDef) => fieldDef.field),
    )
    sub.setDataAdapter('QUOTE_ADAPTER')
    sub.setRequestedSnapshot('yes')
    sub.setRequestedMaxFrequency(1)

    sub.addListener({
      onItemUpdate: function (obj) {
        state = {}
        obj.forEachField(function (name, pos, val) {
          state[name] = val
        })

        setstate(state)
      },
    })




    
    var lsClient = new LightstreamerClient(
      Constants().SERVER,
      Constants().ADAPTER,
    )

    lsClient.connect()
    lsClient.subscribe(sub)
    return () => {
      // lsClient.unsubscribe(sub)
    }
  }, [state])

  return (
    <>
      <tr data-source="lightstreamer" id="stocks">
        {fields.map(function (fieldDef) {
          return (
            <td key={fieldDef.field}>
           { fieldDef.field == "arrow" ? ( <div><img data-source="lightstreamer" data-field="arrow" data-update="src" src="./spacer.gif" width="20" height="8" border="0" alt="arrow"/> </div>  ) : 

              <div data-source="lightstreamer" data-field={fieldDef.field}>
                {state[fieldDef.field]}
              </div>
        }
            </td>
          )
        })}
      </tr>
    </>
  )
}
