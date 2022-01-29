// Sử dụng hooks, hỗ trợ thêm nhiều tính năng
function ComponentB(){
    // useState
    const [state, setStake] = useState(initState)

    //useEffect
    useEffect(() => {

    }, [deps])

    //useLayoutEffect
    useLayoutEffect(() =>{

    }, [deps]) 

    //useRef
    const ref = useRef()

    //useCallback
    const fn = useCallback(() => {

    }, [deps])

    //useMeno
    const result = useMemo(() => {
        //return results for memo
    }, [deps])

    //useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init)

    //useContext
    const value = useContext(MyContext)

    //useImperativeHandle
    //useImperativeHandle(ref, createHandle, [deps])

    //useDebufValue
    //useDebufValue(isOnline ? 'Online' : 'Offline');

    return <h1>Hooks</h1>    
}

1. Chỉ dùng cho function component
2. Component đơn giản và trở nên dễ hiểu
    - Không bị chia logic ra như methods trong lifecycle của class Component
    - Không cần sử dụng "this"
3. sử dụng Hooks kho nào ?
    - Dự án mới => Hooks
    - Dự án cũ:
        -Component mới => Function component + Hooks
        -Component cũ => Giữ nguyên, có thời gian tối ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
4. Người mới nên bắt đầu với Function hay Class component
5. Có thể kết hợp sử dụng Function component & Class component

Vd Function & Class component
'''js
// Function component
function Item({ children }) {
    return <li>{children}</li>
}

//Class component
class List extends React.Component {
    render () {
        return (
            <ul>
                <Item>HTML, CSS</Item>
                <Item>Javascript</Item>
                <Item>ReactJS</Item>
            </ul>
        )
    }
}
'''js
