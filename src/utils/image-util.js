import { graphql } from 'gatsby';

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed {
        src
      }
    }
  }
`

export const heroImageFluid = graphql`
  fragment heroImageFluid on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const menuItem = graphql`
  fragment menuItem on File {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const menuBigItem = graphql`
  fragment menuBigItem on File {
    childImageSharp {
      fixed(width: 1000) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const avatarStoryItem = graphql`
  fragment avatarStoryItem on File {
    childImageSharp {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
