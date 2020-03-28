## Questions

### **1. if you define a `Greeting` component using the code below, it shows the following error. Why?**

`file: Greeting.js`

```javascript
export default function Greeting() {
  return <h1>Hello World!</h1>;
}
```
// we need to import react first as we are intending to return html in this function and doing so is a property of react that we can integrate html with javascript

Error:

```
    'React' must be in scope when using JSX
```

### **2. Why are keys necessary in lists? Are they supposed to be globally or locally unique?**

they have to be *locally* unique and keys are important to identify every value individually used in the array. The values in the array have to be somehow identified so that they can all be differentiated with each other.

### **3. What would this code return**

```javascript
typeof (<h1>Hello World</h1>);
```

a. function
b. String
c. Number
d.undefined

*undefined*

### **4. The `Switch` component in React Router is used for:**

a. Rendering component in a Route when the string matches completely.

b. Only Rendering the first matching component from the routes inside router. - This one

c. Helps push new state in history whenever route changes.

### **5. What happens if you don't pass the second argument to `useEffect`**

a. Cleanup function and effect gets called in after every render. 

b. Effect gets called in after every render. - This one

c. Cleanup gets called in after every render.

d. effect and cleanup gets called when the variables used inside the effect change their value.

### **6. What will this code do?**

```javascript
function App(){

    const [value, setValue] = useState('');

    useEffect(() => {
        document.title = value;
    }, []);

    return (<input value={value} onChange={e => setValue(e.target.value)}>)
}
```

a. Update the title of page as the value of the input changes.

b. Update the value of page once as the first character which is typed in the `input`. -- This   ?? lol

c. does nothing

### **7. Given in codeq1.js file**

### **8. Given in codeq2.js file**

### **9. What components will the router below render when path is `/homepage`?**

```javascript
<BrowserRouter>
  <Route path="/" component={Main} />
  <Route path="/profile" component={Profile} />
  <Route path="/about" component={About} />
  <Route path="/home" component={Home} />
  <Route path="/homepage" component={Landing} /> --- This one only I think
</BrowserRouter>
```
### **10. The cleanup function in `useEffect` is called**

a. After every rerender irrespective of dependencies.

b. When something value of one of its dependency changes.

c. Just before component unmounts. -- This
