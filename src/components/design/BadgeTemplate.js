import React, { useRef, useState, useEffect, useMemo, useLayoutEffect } from 'react';
import QRCode from 'qrcode';
 
export default function BadgeTemplate({ user }) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const qrCodeUrl = user?.email || '-';
 
  const MAX_FONT = 35;
  const MIN_FONT = 18;
  const MAX_LINES = 2;
 
  const nameRef = useRef(null);
  const [nameFontSize, setNameFontSize] = useState(MAX_FONT);
 
  const HEADER_IMG =
    'https://res.cloudinary.com/medcon-dam/image/upload/v1778068986/ehs-ckm-2026/Frontend/Badge/banner_old_1_pvidxg.png';
 
  const FOOTER_IMG =
    'https://res.cloudinary.com/medcon-dam/image/upload/v1778072399/ehs-ckm-2026/Frontend/Badge/footer_1_ngapsr.png';
 
  useEffect(() => {
    if (qrCodeUrl) {
      QRCode.toDataURL(qrCodeUrl, { width: 260, margin: 1 })
        .then(setQrCodeDataUrl)
        .catch(console.error);
    }
  }, [qrCodeUrl]);
 
  const formatUserName = (name = '') => {
    return name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(
        part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      )
      .join(' ');
  };
 
  const displayName = useMemo(
    () => formatUserName(user?.name || ''),
    [user?.name]
  );
 
  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) return;
 
    const maxHeight = MAX_FONT * 1.1 * MAX_LINES;
    let size = MAX_FONT;
 
    while (size > MIN_FONT) {
      el.style.fontSize = `${size}px`;
      if (el.scrollHeight <= maxHeight && el.scrollWidth <= el.clientWidth) {
        break;
      }
      size--;
    }
 
    setNameFontSize(size);
  }, [displayName]);
 
  const printBadge = () => {
    const win = window.open('', '_blank');
    if (!win) return;
 
    const safeName = displayName
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
 
    win.document.write(`
      <html>
        <head>
          <title>Badge</title>
          <style>
            @page {
              size: A6;
              margin: 0;
            }
 
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              width: 105mm;
              height: 148mm;
              display: flex;
              flex-direction: column;
            }
 
            .header img,
            .footer img {
              width: 100%;
              display: block;
            }
 
            .content {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              text-align: center;
              padding: 10px;
            }
 
            .name {
              font-weight: bold;
              margin-top: 10px;
              line-height: 1.1;
              word-break: break-word;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: ${MAX_FONT}px;
            }
 
            .qr img {
              margin-top: 15px;
              max-width: 220px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${HEADER_IMG}" />
          </div>
 
          <div class="content">
            <div id="nameEl" class="name">${safeName}</div>
            <div class="qr">
              <img src="${qrCodeDataUrl}" />
            </div>
          </div>
 
          <div class="footer">
            <img src="${FOOTER_IMG}" />
          </div>
 
          <script>
            (function () {
              var el = document.getElementById('nameEl');
              var max = ${MAX_FONT};
              var min = ${MIN_FONT};
              var maxHeight = max * 1.1 * ${MAX_LINES};
 
              var size = max;
              while (size > min) {
                el.style.fontSize = size + 'px';
                if (el.scrollHeight <= maxHeight && el.scrollWidth <= el.clientWidth) {
                  break;
                }
                size--;
              }
            })();
          </script>
        </body>
      </html>
    `);
 
    win.document.close();
    win.onload = () => win.print();
  };
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        style={{
          width: '105mm',
          height: '148mm',
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* HEADER */}
        <div>
          <img
            src={HEADER_IMG}
            alt="Header"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
 
        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <h3
            ref={nameRef}
            style={{
              fontSize: `${nameFontSize}px`,
              fontWeight: 'bold',
              margin: '20px 0 0',
              lineHeight: 1.1,
              wordBreak: 'break-word',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {displayName}
          </h3>
 
          <div style={{ marginTop: '15px', marginLeft: '75px' }}>
            {qrCodeDataUrl && (
              <img src={qrCodeDataUrl} alt="QR" style={{ maxWidth: '240px' }} />
            )}
          </div>
        </div>
 
        {/* FOOTER */}
        <div>
          <img
            src={FOOTER_IMG}
            alt="Footer"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
 
      <button
        onClick={printBadge}
        className="mt-4 px-4 py-2 text-white rounded"
        style={{ backgroundColor: 'green' }}
      >
        Print Badge
      </button>
    </div>
  );
}