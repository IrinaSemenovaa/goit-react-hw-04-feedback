import React from 'react';
import PropTypes from 'prop-types';
import { sectionStyles, titleStyles } from './SectionStyles';

export default function Section({ title, children }) {
  return (
    <section className={sectionStyles}>
      <h2 className={titleStyles}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
