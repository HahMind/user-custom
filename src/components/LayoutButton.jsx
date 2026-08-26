

const LayoutButton = ({ setCardLayout }) => {
  return (
    <div className="overflow-hidden flex flex-col">
        <button
                className="bg-blue-500 px-4 py-2 rounded-md text-white m-4"
                onClick={() => setCardLayout("top")}
              >
                Top Layout
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md text-white m-4"
                onClick={() => setCardLayout("left")}
              >
                Left Layout
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md text-white m-4"
                onClick={() => setCardLayout("bottom")}
              >
                Bottom Layout
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md text-white m-4"
                onClick={() => setCardLayout("right")}
              >
                Right Layout
              </button>
    </div>
  )
}

export default LayoutButton