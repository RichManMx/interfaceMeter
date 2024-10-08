import React from 'react'
import { Wifi } from 'lucide-react'

interface OnlineMedidoresProps {
  darkMode: boolean
  language: string
}

const OnlineMedidores: React.FC<OnlineMedidoresProps> = ({ darkMode, language }) => {
  const onlineCount = 42
  const totalCount = 50

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} apple-box-shadow`}>
      <h2 className="text-xl font-semibold mb-4 flex items-center apple-text-shadow">
        <Wifi className="mr-2" />
        {language === 'es' ? 'Medidores en Línea' : 'Online Meters'}
      </h2>
      <p className="text-4xl font-bold">{onlineCount}/{totalCount}</p>
      <p className="text-sm opacity-70">
        {language === 'es'
          ? `${onlineCount} medidores conectados de ${totalCount}`
          : `${onlineCount} meters connected out of ${totalCount}`}
      </p>
      <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(onlineCount / totalCount) * 100}%` }}></div>
      </div>
    </div>
  )
}

export default OnlineMedidores