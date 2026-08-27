

const LayoutButton = ({ setCardLayout }) => {
  return (
    <div className="overflow-hidden flex flex-col gap-2 min-w-full items-end">
        <button
                className="bg-blue-300 px-4 py-2 rounded-md text-white "
                onClick={() => setCardLayout("top")}
              >
                Top Layout
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-md text-white "
                onClick={() => setCardLayout("left")}
              >
                Left Layout
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-md text-white "
                onClick={() => setCardLayout("bottom")}
              >
                Bottom Layout
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-md text-white "
                onClick={() => setCardLayout("right")}
              >
                Right Layout
              </button>
    </div>
  )
}

export default LayoutButton