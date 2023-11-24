
//hoc is always a function that recives a component
//hoc will return a new React Component(fn or class)
export const withBorder = (Component: any) => {

    return function BorderHOC(props: any){

        return (
            <div style={{border: '2px solid red', padding: '5px', margin: '5px'}}>
                <Component {...props}/>
            </div>
        )
    }
}