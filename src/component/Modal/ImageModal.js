const ImageModal = ({ isOpen, imageUrl, onClose }) => {

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal') onClose();
      };
  
    return (
    <div id="modal" onClick={handleClickOutside} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src={imageUrl} alt="" style={{ maxWidth:"50%", maxHeight:"50%" }}/>
        <button onClick={onClose} style={{ position:'absolute', top:'10px', right:'10px' }}>Close</button>
      </div>
      
  );
  }

export default ImageModal;
  