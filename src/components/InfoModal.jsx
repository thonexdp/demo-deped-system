export default function InfoModal({ isOpen, onToggle, onClose, iconClass, title, children }) {
  return (
    <>
      <button className="floating-info-btn" onClick={onToggle}>
        <i className="mdi mdi-information-outline"></i>
        <span>More Details</span>
      </button>

      <div
        id="infoModal"
        className={`info-modal ${isOpen ? 'show' : ''}`}
        onClick={(event) => {
          if (event.target.id === 'infoModal') {
            onClose()
          }
        }}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            <i className="mdi mdi-close"></i>
          </button>
          <div className="modal-body">
            <div className="page-section">
              <h4>
                <i className={iconClass}></i> {title}
              </h4>
              <div className="page-item">
                <div className="page-description">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
