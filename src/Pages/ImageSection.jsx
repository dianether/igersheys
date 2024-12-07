import React from 'react';
import { motion } from 'framer-motion';

const ImageSection = () => {
  return (
    <section style={{ marginBottom: '40px', textAlign: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Contenedor para dar el efecto de imagen redondeada */}
        <div
          style={{
            width: '70vw', // Ajusta el tamaño según lo necesites
            height: '100%', 
            borderRadius: '20px', // Aquí ajustas el redondeo de la imagen
            overflow: 'hidden', // Hace que la imagen se recorte dentro del contenedor
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <motion.img
            src="/ian.jpg"
            alt="Imagen de arquitectura"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              filter: 'brightness(50%)', // Oscurece la imagen
            }}
            animate={{
              y: ['0%', '20%', '0%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </div>
        <p
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          Proyecto de arquitectura de Ian Gerson Morales Juarez
        </p>
      </div>
    </section>
  );
};

export default ImageSection;
