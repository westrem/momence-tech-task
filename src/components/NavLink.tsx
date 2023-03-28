import { Link, LinkProps } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

import styled from 'styled-components'

// -------------------------------------------------------------------------------------------------------------------
// Helper components
// -------------------------------------------------------------------------------------------------------------------

/*
 * This is just to showcase styled-components usage
 *
 * Unfortunately styled-components don't work with chakra due to chakra's internals, so smth like:
 *
 * styled(Link).attrs({...})`color: ...`
 *
 * is not possible
 */

const NavLinkWrapper = styled.div<{ backlink?: boolean }>`
  a {
    --hoverColor: #ED64A6; // pink.400

    display: inline-block;
    position: relative;

    text-decoration: none;
    color: #D53F8C; // pink.500

    &::after {
      transition: all 0.4s ease;

      content: "";
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0px;
      bottom: 2px;
      background-color: transparent;
    }

    &:focus, &:hover {
      color: var(--hoverColor);
      text-decoration: none;

      &::after {
        background-color: var(--hoverColor);
        opacity: 0.8;
      }
    }
    
    ${(props) =>
      props.backlink &&
      `
      &::before {
        transition: all 0.4s ease;
  
        content: "←";
        display: block;
        width: auto;
        height: 100%;
        position: absolute;
        left: -12px;
        bottom: 0px;
        color: inherit;
      }
      
      &:focus, &:hover {
        &::before {
          left: -16px;
        }
      }
    `}
  }
`

// -------------------------------------------------------------------------------------------------------------------
// Main component
// -------------------------------------------------------------------------------------------------------------------

interface Props extends LinkProps {
  /**
   * @default false
   */
  backlink?: boolean

  to: string
}

function NavLink(props: Props) {
  const { backlink, ...rest } = props
  return (
    <NavLinkWrapper backlink={backlink}>
      <Link
        {...rest}
        fontSize='xs'
        as={ReactLink}
      />
    </NavLinkWrapper>
  )
}

export { NavLink }
