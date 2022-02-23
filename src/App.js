import 'aframe'
import 'aframe-event-set-component'

import './App.css'

// AFRAME.registerComponent('change-color-on-hover', {
//   schema: {
//     color: {default: 'red'}
//   },

//   init: function () {
//     var data = this.data;
//     var el = this.el;  // <a-box>
//     var defaultColor = el.getAttribute('material').color;

//     el.addEventListener('click', function () {
//       alert('click')
//     });

//     el.addEventListener('mouseenter', function () {
//       console.log('yoyoyouu')
//       el.setAttribute('color', data.color);
//     });

//     el.addEventListener('mouseleave', function () {
//       console.log('yoyoyouu!!!!')
//       el.setAttribute('color', defaultColor);
//     });
//   }
// });

const BUTTON_BACKGROUND = '#3c4043'
const BUTTON_BACKGROUND_ACTIVE = '#424548'

const ButtonPlane = ({ className, position, width = 1, height = 1, color = BUTTON_BACKGROUND, text }) => {
  return (
    <a-plane
      className={className}
      position={position}
      width={width}
      height={height}
      color={BUTTON_BACKGROUND}
      event-set__enter={`_event: mouseenter; color: ${BUTTON_BACKGROUND_ACTIVE}`}
      event-set__leave={`_event: mouseleave; color: ${BUTTON_BACKGROUND}`}
    >
      <a-text value={text} position="-0.1 0 0"></a-text>
    </a-plane>
  )
};

const Row0 = () => {
  return (
    <>
      <ButtonPlane
        className="operand"
        position="-1.5 -1 -4"
        text='0'
      />
      <ButtonPlane
        className="dot"
        position="-0.5 -1 -4"
        text='.'
      />
      <ButtonPlane
        className="operator"
        position="0.5 -1 -4"
        text='='
      />
      <ButtonPlane
        className="operator"
        position="1.5 -1 -4"
        text='+'
      />
    </>
  )
}

const Row1 = () => {
  return (
    <>
      <ButtonPlane
        className="operand"
        position="-1.5 0 -4"
        text='1'
      />
      <ButtonPlane
        className="operand"
        position="-0.5 0 -4"
        text='2'
      />
      <ButtonPlane
        className="operand"
        position="0.5 0 -4"
        text='3'
      />
      <ButtonPlane
        className="operator"
        position="1.5 0 -4"
        text='-'
      />
    </>
  )
}

const Row2 = () => {
  return (
    <>
      <ButtonPlane
        className="operand"
        position="-1.5 1 -4"
        text='4'
      />
      <ButtonPlane
        className="operand"
        position="-0.5 1 -4"
        text='5'
      />
      <ButtonPlane
        className="operand"
        position="0.5 1 -4"
        text='6'
      />
      <ButtonPlane
        className="operator"
        position="1.5 1 -4"
        text='*'
      />
    </>
  )
}

const Row3 = () => {
  return (
    <>
      <ButtonPlane
        className="operand"
        position="-1.5 2 -4"
        text='7'
      />
      <ButtonPlane
        className="operand"
        position="-0.5 2 -4"
        text='8'
      />
      <ButtonPlane
        className="operand"
        position="0.5 2 -4"
        text='9'
      />
      <ButtonPlane
        className="operator"
        position="1.5 2 -4"
        text='/'
      />
    </>
  )
}

const Row4 = () => {
  return (
    <a-plane position="0 3 -4" width="4" height="1" color="#303134">
      <a-text value="0" position="0 0 0"></a-text>
    </a-plane>
  )
}

const App = () => {
  return (
    <div className="App">
      <a-scene>
        <a-entity cursor="rayOrigin:mouse"></a-entity>
        <Row0 />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </a-scene>
    </div>
  )
}

export default App
