import React from 'react';


const Map = () => {
  return (
    <>
      <iframe
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0012057790877!2d96.22618861230346!3d16.776615620043106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed798936e11f%3A0xca3f188185c716c3!2sStar%20City%20-%20Thanlyin%2C%20Sales%20Gallery!5e0!3m2!1sen!2smm!4v1713975915867!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </>
  );
};

export default Map;