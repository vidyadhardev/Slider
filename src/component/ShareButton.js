import React from 'react';

const ShareButton = ({ url, title, description, image }) => {
  const handleShareClick = () => {
    const shareData = {
      title,
      text: description,
      url,
      image,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      const textArea = document.createElement('textarea');
      textArea.value = `${title}\n${description}\n${url}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.body.removeChild(textArea);
      console.log('Copied to clipboard');
    }
  };

  return (
    <button onClick={handleShareClick}>
      Share
    </button>
  );
};

export default ShareButton;