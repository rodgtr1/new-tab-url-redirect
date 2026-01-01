chrome.storage.sync.get(['newTabUrl'], function(result) {
  const url = result.newTabUrl || 'https://www.google.com';

  // Validate URL before redirecting (defense in depth)
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
      window.location.replace(url);
    }
  } catch (e) {
    // Fallback to Google if URL is invalid
    window.location.replace('https://www.google.com');
  }
});
