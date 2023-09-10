import PropTypes from 'prop-types'

const Heading = ({ level, children }) => {

    const HeadingTag = `h${level}`

    const getHeadingStyles = (level) => {
        switch (level) {
          case '1':
            return 'text-[42px] text-secondary';
          case '2':
            return 'text-[34px] text-secondary';
          case '3':
            return 'text-[28px] text-secondary';
          case '4':
            return 'text-[24px] text-secondary';
          case '5':
            return 'text-[22px] text-secondary';
          case '6':
            return 'text-[20px] text-secondary';
          default:
            return 'text-lg';
        }
    }

    const headingStyles = getHeadingStyles(level)

  return (
    <HeadingTag className={headingStyles}>{children}</HeadingTag>
  )
}

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
}

export default Heading