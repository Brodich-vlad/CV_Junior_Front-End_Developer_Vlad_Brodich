
export function Link({ className, href, content, target, rel }) {
  return(
    <a className={className} href={href} target={target} rel={rel}>{content}</a>
  )
};