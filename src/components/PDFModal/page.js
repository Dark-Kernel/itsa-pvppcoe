"use client"
import { X } from "lucide-react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

const PDFModal = ({ isOpen, onClose, pdfPath, documentTitle, description }) => {
  if (!isOpen) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <div className="fixed pt-[90px] lg:pt-[75px] inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Modal content */}
      <div className="bg-white rounded-lg flex flex-col relative h-[85vh] w-[95%] md:w-[595px] lg:w-[595px] xl:w-[595px] z-10">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between relative">
          <h2 className="text-xl text-black font-semibold text-center w-full">{documentTitle || "View Document"}</h2>
          <button
            onClick={handleClose}
            className="absolute right-1 top-1 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-7 h-7 text-black" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfPath} />
          </Worker>
        </div>

        {/* Description Section */}
        {description && (
          <div className="p-4 border-t bg-gray-50">
            <div className="prose max-w-none">
              <p className="text-gray-900 text-sm sm:text-base">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PDFModal;