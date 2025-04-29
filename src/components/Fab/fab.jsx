import React, { useState, useRef, useEffect } from 'react';

const Fab = ({ icon = "✉️", color = "#0077b6", size = 56, position = "bottom-right" }) => {
  const [open, setOpen] = useState(false);
  const fabRef = useRef(null);

  // Make the FAB draggable
  useEffect(() => {
    const el = fabRef.current;
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      offset = {
        x: el.offsetLeft - e.clientX,
        y: el.offsetTop - e.clientY,
      };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      el.style.left = `${e.clientX + offset.x}px`;
      el.style.top = `${e.clientY + offset.y}px`;
      el.style.right = 'auto';
      el.style.bottom = 'auto';
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const actions = [
    {
      label: "Email",
      icon: "📧",
      url: "mailto:your.email@example.com",
    },
    {
      label: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      label: "GitHub",
      icon: "🐱",
      url: "https://github.com/yourusername",
    },
  ];

  const positionStyle = {
    position: 'fixed',
    zIndex: 1000,
    ...(position === 'bottom-right' && { bottom: '20px', right: '20px' }),
    ...(position === 'bottom-left' && { bottom: '20px', left: '20px' }),
    ...(position === 'top-right' && { top: '20px', right: '20px' }),
    ...(position === 'top-left' && { top: '20px', left: '20px' }),
  };

  return (
    <div style={positionStyle} ref={fabRef}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          color: 'white',
          fontSize: '24px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
        aria-label="Contact Menu"
      >
        {icon}
      </button>

      {open &&
        actions.map((action, index) => (
          <a
            key={index}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'absolute',
              bottom: (size + 12) * (index + 1),
              left: 0,
              width: size + 40,
              padding: '8px',
              borderRadius: '30px',
              backgroundColor: '#fff',
              color: '#000',
              textDecoration: 'none',
              fontSize: '14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: '18px' }}>{action.icon}</span>
            {action.label}
          </a>
        ))}
    </div>
  );
};

export default Fab;
