import React from 'react'
import { Zap } from 'lucide-react'

interface VoltageValuesProps {
  darkMode: boolean
  language: string
  voltage: number
}

const VoltageValues: React.FC<VoltageValuesProps> = ({ darkMode, language, voltage }) => {
  const getVoltageData = (voltage: number) => {
    switch (voltage) {
      case 12:
        return { current: 11.8, min: 10.5, max: 14.5 }
      case 110:
        return { current: 109.5, min: 100, max: 120 }
      case 220:
        return { current: 218.7, min: 200, max: 240 }
      case 480:
        return { current: 475.2, min: 440, max: 520 }
      default:
        return { current: 0, min: 0, max: 0 }
    }
  }

  const { current, min, max } = getVoltageData(voltage)

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} apple-box-shadow`}>
      <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
        <Zap className="mr-2" />
        {language === 'es' ? `Valores ${voltage}V` : `${voltage}V Values`}
      </h2>
      <p className="text-4xl font-bold">{current}V</p>
      <p className="text-sm opacity-70">
        {language === 'es'
          ? `Rango: ${min}V - ${max}V`
          : `Range: ${min}V - ${max}V`}
      </p>
      <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${((current - min) / (max - min)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default VoltageValues