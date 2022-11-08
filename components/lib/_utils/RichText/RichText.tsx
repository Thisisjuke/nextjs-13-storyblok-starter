import {
  MARK_LINK,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer'

import Link from 'next/link'

export interface RichTextProps {
  document: Record<string, any> | string
}

const resolversOptions = () => ({
  nodeResolvers: {
    [NODE_PARAGRAPH]: (children) => {
      return children ? <p>{children}</p> : null
    },
  },
  markResolvers: {
    [MARK_LINK]: (children, props) => {
      const { linktype, href, target } = props
      if (linktype === 'email')
        return <a href={`mailto:${href}`}>{children}</a>

      if (href.match(/^(https?:)?\/\//)) {
        return (
          <a href={href} target={target}>
            {children}
          </a>
        )
      }
      return <Link href={href}>{children}</Link>
    },
  },
})

export const RichText = ({ document }: RichTextProps) => {
  const element = render(document, resolversOptions())

  return element || null
}
