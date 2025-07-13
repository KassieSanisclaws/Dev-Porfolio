import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface ModalProps {
    id: string;
    title: string;
    subtitle?: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    overflowY?: string;
    position?: string;
    zIndex?: number;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    padding?: string | number;
    margin?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    flexGrow?: number;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant ?: 'text' | 'outlined' | 'contained';
    sx?: object;
    showCloseButton?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    background?: string;
}


const Modal = ({ 
     id, 
     title,
     subtitle, 
     onClose,
     open, 
     children, 
     backgroundColor,
     borderColor,
     borderRadius,
     boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)',
     width,
     height,
     maxHeight,
     overflowY,
     position,
     zIndex,
     display,
     justifyContent,
     alignItems,
     top,
     left,
     right,
     color,
     padding,
     variant,
     sx={},
     showCloseButton = true,
     header,
     footer,
     background,
    }: ModalProps) => {

      //Close Modal on ESC key press
        React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
         }
      };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
     }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

    return (
        <Box
            id={`modalContent${id}`}
            sx={{
                display: display || 'flex',
                flexDirection: 'column',
                position: position || 'fixed',
                top: top || 0,
                left: left || 0,
                right: right || 0,
                width: width || '100%',
                height: height || '100%',
                backgroundColor: backgroundColor || 'rgba(0, 0, 0, 0.5)',
                justifyContent: justifyContent || 'center',
                alignItems: alignItems || 'center',
                zIndex: zIndex || 1000,
                animation: 'FadeIn 0.3s ease-in-out',
                ...sx,
            }}>

             {/* Modal Inner Box */}
            <Box
                id={`modalInnerContent${id}`}
                sx={{
                    backgroundColor: backgroundColor || 'none',
                    background: background || "linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))",
                    border: borderColor ? `3.5px solid ${borderColor}` : 'none',
                    padding: padding || 4,
                    borderRadius: borderRadius || 2,
                    boxShadow: boxShadow || 24,
                    position: position || 'relative',
                    width: width || { xs: '90%', sm: '80%', md: '60%' },
                    maxHeight: maxHeight || '80vh',
                    overflowY: overflowY || 'auto',
                }}>

        {/* Optional Header */}
        {header ? (
          <Box sx={{ mb: 2 }}>{header}</Box>
        ) : (title || subtitle) ? (
          <Box sx={{ mb: 2, textAlign: 'center' }}>
           {title && (
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          )}
        {subtitle && (
          <Typography variant="h4" sx={{ opacity: 0.8 }}>
            {subtitle}
          </Typography>
         )} 
         </Box> 
         ): null}

        {children}

        {/* Optional Footer */}
        {footer && (
          <Box sx={{ mt: 3 }}>
            {footer}
          </Box>
        )}

        {/* Optional Close Button */}
        {showCloseButton && (
          <Button
            variant={variant}
            color={color}
            onClick={onClose}
            aria-label="Close Modal"
            sx={{ 
               position: 'absolute', 
               top: 16, 
               right: 16,
               fontSize: '3rem',      // Increase size of the "×"
               minWidth: '40px',      // Ensures button is large enough
               height: '40px',        // Sets consistent button height
               padding: 0,            // Removes inner padding
              }}>
            &times;
          </Button>
        )}
      </Box>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0 }
            to { transform: translateY(0); opacity: 1 }
          }
        `}
      </style>
        </Box>
    );
};

export default Modal;