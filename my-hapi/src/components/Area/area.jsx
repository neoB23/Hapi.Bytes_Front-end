import React from 'react';

function Area() {
  return (
    <section className="text-gray-600 body-font relative h-screen">
      {/* Background container for the map */}
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494236.65578096604!2d120.95223381973571!3d14.586315347130807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1dab555f8fd%3A0xe9392ce1df362d50!2sRizal!5e0!3m2!1sen!2sph!4v1732099205127!5m2!1sen!2sph"
        //   style={{
        //     filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
        //   }}
        ></iframe>
      </div>
    </section>
  );
}

export default Area;
