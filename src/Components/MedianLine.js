import React from 'react'
import * as d3 from 'd3'

const MedianLine = ({
  data,
  value,
  width,
  height,
  x,
  y,
  bottomMargin,
  median
}) => {
  const yScale = d3 // move median line vertically based on 'g' grouping element
      .scaleLinear()
      .domain([0, d3.max(data, value)])
      .range([height - y - bottomMargin, 0]),
    line = d3.line()([[0, 5], [width, 5]]) // ad3.line() array of pairs containing x & y coordinates

  const medianValue = median || d3.median(data, value) // median calc

  const translate = `translate(${x}, ${yScale(
      medianValue
    )})`,
    medianLabel = `Median Household: $${yScale.tickFormat()(
      median
    )}`

  return (
    <g className="mean" transform={translate}>
      <text
        x={width - 5}
        y="0"
        textAnchor="end"
        style={{ background: 'purple' }}
      >
        {medianLabel}
      </text>
      <path d={line} />
    </g>
  )
}

export default MedianLine
