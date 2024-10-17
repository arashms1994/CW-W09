document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
      alert('Document Saved!')
    }
    event.preventDefault()
  });