import { useState } from "react"

const waitlistButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <button
        className="mt-12 px-10 py-4 bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/20"
        onClick={() => setModalOpen(true)}
    >
        Join the Waitlist
    </button>
  )
}

export default waitlistButton