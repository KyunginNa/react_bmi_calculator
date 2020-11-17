import React from 'react'

const SelectMethod = props => {
    return (
        <div id="select-method-div">
            Select Method:
            <select id="select-method" value={props.value} onChange={props.onChange}>
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </div>
    )
}

export default SelectMethod