import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '00:00', value: 400 },
  { name: '04:00', value: 300 },
  { name: '08:00', value: 600 },
  { name: '12:00', value: 800 },
  { name: '16:00', value: 700 },
  { name: '20:00', value: 500 },
  { name: '23:59', value: 400 },
]

interface MeterDataChartProps {
  darkMode: boolean
}

const MeterDataChart: React.FC<MeterDataChartProps> = ({ darkMode }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
        <XAxis 
          dataKey="name" 
          stroke={darkMode ? '#9CA3AF' : '#4B5563'}
          tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
          // Add default values here
          padding={{ left: 0, right: 0 }}
          allowDataOverflow={false}
          allowDecimals={true}
          allowDuplicatedCategory={true}
        />
        <YAxis 
          stroke={darkMode ? '#9CA3AF' : '#4B5563'}
          tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563' }}
          // Add default values here
          padding={{ top: 0, bottom: 0 }}
          allowDataOverflow={false}
          allowDecimals={true}
          allowDuplicatedCategory={true}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          itemStyle={{ color: darkMode ? '#D1D5DB' : '#1F2937' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#3B82F6" 
          strokeWidth={2} 
          dot={{ fill: '#3B82F6', r: 4 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MeterDataChart