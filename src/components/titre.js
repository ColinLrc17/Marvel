function Title({ color = 'red', children, hidden = false, ...props }) {
    if (hidden) {
        return null;
    }
   
    return (<h1 style={{color: color}} {...props}>{children}</h1>);
   }
   
export default Title;