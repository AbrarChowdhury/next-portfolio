import React from 'react';

const Socials = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '200px',
      }}
    >
      <Social src='socials/github.svg' href='https://github.com/AbrarChowdhury' type='link' />
      <Social src='socials/linkedin.svg' href='https://www.linkedin.com/in/abrar-shams-chowdhury-48a979114/' type='link' />
      <Social src='socials/whatsapp.svg' href='tel:+8801836096182' type='call' />
      <Social src='socials/email.svg' href='chowdhury.abrar.shams@gmail.com' type='email' />
    </div>
  );
};

function Social({ src, href, type }) {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText(href);
    alert('Email address copied to clipboard!');
  };

  if (type === 'link') {
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        <img
          src={src}
          width={'25px'}
          style={{
            marginLeft: '10px',
          }}
          alt='social icon'
        />
      </a>
    );
  } else if (type === 'call') {
    return (
      <a href={href}>
        <img
          src={src}
          width={'25px'}
          style={{
            marginLeft: '10px',
          }}
          alt='social icon'
        />
      </a>
    );
  } else if (type === 'email') {
    return (
      <button onClick={handleEmailCopy} style={{ background: 'none', border: 'none', padding: 0 }}>
        <img
          src={src}
          width={'25px'}
          style={{
            marginLeft: '10px',
          }}
          alt='social icon'
        />
      </button>
    );
  }
  return null;
}

export default Socials;
