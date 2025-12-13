import React from 'react'
import { useSelector , useDispatch , connect } from 'react-redux'
import { increment , decrement , incrementByVal} from '../redux/actions'
import { useRef } from 'react'

const Counter = (props) => {
    //const count = useSelector((state) => state.counterReducer.count)
    //const dispatch = useDispatch()
    const inputRef = useRef()
    
    return (
        <>
        <h1>Counter</h1>
        <h3>Count = {props.count}</h3>
        <button onClick={() => props.dispatch(increment())}>+</button>
        <button onClick={() => props.addOne(decrement())}>-</button>
        <div>
            <input ref={inputRef} type="number"/>
            <button onClick={() => props.dispatch(incrementByVal(inputRef.current.value))}>+ input value</button>
        </div>
        </>
    )

}



const mapStateToProps = (state) => {
    return  {
        count: state.counterReducer.count
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addOne: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)