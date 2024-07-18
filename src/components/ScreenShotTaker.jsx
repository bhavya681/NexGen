import React from 'react';
import html2canvas from 'html2canvas';

const ScreenshotTaker = () => {
  const takeScreenshot = () => {
    html2canvas(document.body).then(canvas => {
      const link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="screenshot-taker p-4 bg-indigo-600 text-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Screenshot Taker</h2>
      <button
        onClick={takeScreenshot}
        className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full"
      >
        Take Screenshot
      </button>
    </div>
  );
};

export default ScreenshotTaker;
