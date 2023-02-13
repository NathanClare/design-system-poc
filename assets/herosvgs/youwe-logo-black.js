const path = require('path')
const React = require('react')

function YouweLogoBlack({ title, titleId, ...props }, svgRef) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId
      },
      props
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          'title',
          {
            id: titleId
          },
          title
        )
      : null,
    /*#__PURE__*/ React.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M150 0 75 200 225 200 Z'
    })
  )
}

const ForwardRef = React.forwardRef(YouweLogoBlack)
module.exports = ForwardRef
