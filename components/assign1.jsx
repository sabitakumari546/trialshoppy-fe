import React from 'react'

const assign1 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="container1 bg-green-600 h-6 w-4">container1</div>
        <div className="container2">
            <div className="d1"></div>
            <div className="d" flex>
                <div className="d11 bg-yellow-400 w-2 h-1"></div>
                <div className="d11 bg-red-400 w-2 h-1"></div>
            </div>
            <div className="d" flex>
                <div className="d11 bg-yellow-400 w-2 h-1"></div>
                <div className="d11 bg-red-400 w-2 h-1"></div>
            </div>
        </div>
        <div className="container3 flex-col">
            <div className="c1 bg-red-600 w-4 h-2"></div>
            <div className="c2 bg-green-400 w-4 h-4"></div>
        </div>
      </div>
    </div>
  )
}

export default assign1
