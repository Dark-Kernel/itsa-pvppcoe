"use client"
import { X } from "lucide-react"

const PDFModal = ({ isOpen, onClose, pdfPath, documentTitle, description }) => {
  if (!isOpen) return null

  const handleClose = () => {
    onClose(true)
  }

  const pdfUrl = pdfPath.includes("#") ? `${pdfPath}&view=FitH&scrollbar=0` : `${pdfPath}#view=FitH&scrollbar=0`

  return (
    <div className="fixed pt-[5rem] pb-[1.5rem] inset-0 z-100 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-0sm:p-4">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Modal content */}
      <div className="bg-white rounded-lg flex flex-col relative w-full h-full sm:h-[90vh] sm:w-[90%] md:w-[595px] lg:w-[595px] xl:w-[595px] z-10">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between relative">
          <h2 className="text-xl font-semibold text-center w-full">{documentTitle || "View Document"}</h2>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
        </div>

        {/* Description Section */}
        <div className="p-4 border-t bg-gray-50">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-sm sm:text-base">{description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFModal;

