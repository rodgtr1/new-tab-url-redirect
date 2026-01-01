// Load saved URL when options page opens
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['newTabUrl'], function(result) {
    if (result.newTabUrl) {
      document.getElementById('url').value = result.newTabUrl;
    }
  });
});

// Save URL when button is clicked
document.getElementById('save').addEventListener('click', function() {
  const url = document.getElementById('url').value.trim();

  // Validate URL - only allow http/https
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      alert('Please enter a valid HTTP or HTTPS URL');
      return;
    }
  } catch (e) {
    alert('Please enter a valid URL');
    return;
  }

  chrome.storage.sync.set({ newTabUrl: url }, function() {
    // Show status message
    const status = document.getElementById('status');
    status.style.display = 'block';
    setTimeout(function() {
      status.style.display = 'none';
    }, 2000);
  });
});
