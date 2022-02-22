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

const BUTTON_BACKGROUND = '#5f6368';

const Row0 = () => {
  return (
    <>
      <a-plane className='operand' position="-1.5 -1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="0" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='dot' position="-0.5 -1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="." position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operator' position="0.5 -1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="=" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operator' position="1.5 -1 -4" width="1" height="1" color={BUTTON_BACKGROUND} border='1px solid #fff'>
        <a-text value="+" position="-0.1 0 0"></a-text>
      </a-plane>
    </>
  )
}

const Row1 = () => {
  return (
    <>
      <a-plane className='operand' position="-1.5 0 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="1" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="-0.5 0 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="2" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="0.5 0 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="3" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operator' position="1.5 0 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="-" position="-0.1 0 0"></a-text>
      </a-plane>
    </>
  )
}

const Row2 = () => {
  return (
    <>
      <a-plane className='operand' position="-1.5 1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="4" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="-0.5 1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="5" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="0.5 1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="6" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operator' position="1.5 1 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="*" position="-0.1 0 0"></a-text>
      </a-plane>
    </>
  )
}

const Row3 = () => {
  return (
    <>
      <a-plane className='operand' position="-1.5 2 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="7" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="-0.5 2 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="8" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operand' position="0.5 2 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="9" position="-0.1 0 0"></a-text>
      </a-plane>
      <a-plane className='operator' position="1.5 2 -4" width="1" height="1" color={BUTTON_BACKGROUND}>
        <a-text value="/" position="-0.1 0 0"></a-text>
      </a-plane>
    </>
  )
}

const Row4 = () => {
  return (
    <a-plane position="0 3 -4" width="4" height="1" color='#303134'>
      <a-text value="0" position="0 0 0"></a-text>
    </a-plane>
  )
}

const App = () => {
  return (
    <div className="App">
      <a-scene>
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
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
