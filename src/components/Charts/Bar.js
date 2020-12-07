import { ResponsiveBar } from '@nivo/bar';

const ResponsiveBarChart = ({ data, indexBy, keys, legends, layout, margin, colors, defs, fill, ...rest }) => (
    <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={margin}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colors}
        defs={defs}
        fill={fill}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: legends.axisBottom,
            legendPosition: 'middle',
            legendOffset: 34
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: legends.axisLeft,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        layout={layout}
        borderRadius={5}
        {...rest}
    />
)

export default ResponsiveBarChart;