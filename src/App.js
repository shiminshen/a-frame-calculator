import 'aframe'
import 'aframe-event-set-component'
import 'aframe-state-component'

import './App.css'

window.AFRAME.registerState({
  initialState: {
    result: '',
    tmp: '',
    operator: ''
  },

  handlers: {
    addNumber: (state, action) => {
      if (state.operator === '=' && !state.tmp) {
        state.result = action.value
        state.operator = ''
      } else if (state.operator && !state.tmp) {
        state.tmp = state.result
        state.result = action.value
      } else {
        state.result += action.value
      }
    },

    addDot: (state, action) => {
      if (state.result && state.result.indexOf('.') === -1) {
        state.result += action.value
      }
    },

    addOperator: (state, action) => {
      state.operator = action.value
    },

    equal: (state, action) => {
      switch (state.operator) {
        case '+':
          state.result = +state.tmp + +state.result
          break;
        case '-':
          state.result = +state.tmp - +state.result
          break;
        case '*':
          state.result = +state.tmp * +state.result
          break;
        case '/':
          state.result = +state.tmp / +state.result
          break;
        
        default:
          
      }

      state.result = state.result.toString()
      state.tmp = ''
      state.operator = '='
    },
  }
})

window.AFRAME.registerComponent('click-button', {
  schema: {
    event: { type: 'string', default: '' },
    value: { type: 'string', default: 0 }
  },

  init: function () {
    const el = this.el 
    el.addEventListener('click', (e) => {
      window.AFRAME.scenes[0].emit(this.data.event, { value: this.data.value });
    })
  }
})

const BUTTON_BACKGROUND = '#3c4043'
const BUTTON_BACKGROUND_ACTIVE = '#424548'

const ButtonPlane = ({
  className,
  opType = 'operand',
  position,
  width = 1,
  height = 1,
  color = BUTTON_BACKGROUND,
  text,
  ...props
}) => {
  return (
    <a-plane
      class={`${className} button`}
      opType={opType}
      position={position}
      width={width}
      height={height}
      color={BUTTON_BACKGROUND}
      event-set__enter={`_event: mouseenter; color: ${BUTTON_BACKGROUND_ACTIVE}`}
      event-set__leave={`_event: mouseleave; color: ${BUTTON_BACKGROUND}`}
      {...props}
    >
      <a-text value={text} position="-0.1 0 0"></a-text>
    </a-plane>
  )
}

const Row0 = () => {
  return (
    <>
      <ButtonPlane className="operand" position="-1.5 -1 -4" text="0" click-button='event: addNumber; value: 0' />
      <ButtonPlane className="dot" position="-0.5 -1 -4" text="." click-button='event: addDot; value: .' />
      <ButtonPlane className="operator" position="0.5 -1 -4" text="=" click-button='event: equal' />
      <ButtonPlane className="operator" position="1.5 -1 -4" text="+" click-button='event: addOperator; value: +' />
    </>
  )
}

const Row1 = () => {
  return (
    <>
      <ButtonPlane className="operand" position="-1.5 0 -4" text="1" click-button='event: addNumber; value: 1' />
      <ButtonPlane className="operand" position="-0.5 0 -4" text="2" click-button='event: addNumber; value: 2' />
      <ButtonPlane className="operand" position="0.5 0 -4" text="3" click-button='event: addNumber; value: 3' />
      <ButtonPlane className="operator" position="1.5 0 -4" text="-" click-button='event: addOperator; value: -' />
    </>
  )
}

const Row2 = () => {
  return (
    <>
      <ButtonPlane className="operand" position="-1.5 1 -4" text="4" click-button='event: addNumber; value: 4' />
      <ButtonPlane className="operand" position="-0.5 1 -4" text="5" click-button='event: addNumber; value: 5' />
      <ButtonPlane className="operand" position="0.5 1 -4" text="6" click-button='event: addNumber; value: 6' />
      <ButtonPlane className="operator" position="1.5 1 -4" text="*" click-button='event: addOperator; value: *' />
    </>
  )
}

const Row3 = () => {
  return (
    <>
      <ButtonPlane className="operand" position="-1.5 2 -4" text="7" click-button='event: addNumber; value: 7' />
      <ButtonPlane className="operand" position="-0.5 2 -4" text="8" click-button='event: addNumber; value: 8' />
      <ButtonPlane className="operand" position="0.5 2 -4" text="9" click-button='event: addNumber; value: 9' />
      <ButtonPlane className="operator" position="1.5 2 -4" text="/" click-button='event: addOperator; value: /' />
    </>
  )
}

const Row4 = () => {
  return (
    <a-plane position="0 3 -4" width="4" height="1" color="#303134">
      <a-text bind__value='value: result' position="0 0 0"></a-text>
    </a-plane>
  )
}

const Calculator = () => {
  return (
    <a-entity>
      <Row0 />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </a-entity>
  )
}

const App = () => {
  return (
    <div className="App">
      <a-scene>
        <a-entity cursor="rayOrigin:mouse"></a-entity>
        <Calculator />
      </a-scene>
    </div>
  )
}

export default App
