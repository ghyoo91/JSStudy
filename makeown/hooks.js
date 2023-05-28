// https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/

// First try
function useState(initialValue) {
    let _val = initialValue;

    function setVal(val) {
        _val = val;
    }

    return [_val, setVal];
}

// Second try, & third
const MyReact = (function () {
    // let _val, _deps; // 싱글톤 형태일때 사용하는 변수
    let hooks = [];
    let current = 0;

    return {
        render(Component) {
            const Comp = Component();

            Comp.render();
            current = 0;

            return Comp;
        },
        useState(initialValue) {
            hooks[current] = hooks[current] || initialValue;

            /* function setState(newVal){
                hooks[current] = newVal;
            }*/

            const setStateHookIndex = current // setState의 클로저를 위해!
            const setState = (newState) => (hooks[setStateHookIndex] = newState)

            current++; // 이번 hook에 대한 처리완료, 다음 hook으로 넘어감.

            console.log('useState', hooks, current);

            return [hooks[current - 1], setState];
        },
        useEffect(callback, dep) {
            const deps = hooks[current];
            const hasChanged = deps ? !dep.every((val, i) => val === deps[i]) : true;

            if (hasChanged) {
                console.log(deps, dep);
            }

            if (!dep || hasChanged) {
                callback();
                hooks[current] = dep;
            }
            current++; // 이번 hook에 대한 처리완료, 다음 hook으로 넘어감.

            console.log('useEffect', hooks, current);
        }
    }
})();

function Counter() {
    const [count, setCount] = MyReact.useState(0);
    const [other, setOther] = MyReact.useState("This is");

    MyReact.useEffect(() => {
        console.log('Effect has occurred : ', count, other);
    }, [count, other]);

    return {
        click: () => setCount(count + 1),
        clickButNotChange : () => setCount(count),
        clickOther: () => setOther("Love are"),
        render: () => console.log('render:', { count, other }),
    }
}

let app;

app = MyReact.render(Counter); // 초기 렌더링0

app.click();
app = MyReact.render(Counter);

app.clickOther();
app = MyReact.render(Counter);
/*
app.clickButNotChange();
app = MyReact.render(Counter);

app.click();
app = MyReact.render(Counter);*/
