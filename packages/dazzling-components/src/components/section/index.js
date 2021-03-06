import React from 'react'
import styled from 'styled-components'
import P from 'prop-types'

const Section = ({ title, children, style }) => (
  <SectionContainer style={style}>
    {title && <h1>{title}</h1>}
    {children}
  </SectionContainer>
)
Section.propTypes = {
  title: P.string,
  children: P.node,
  style: P.object
}

const SectionContainer = styled.section`
  border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
  padding: 4rem 0;
  padding-bottom: 6rem;
  text-align: center;
  font-size: 1.6rem;
`

export default Section
