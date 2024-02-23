# Redux Toolkit

redux is a state management library, which simplifies state management in an application and helps to overcome prop drilling.

In react data can move in one direction, that is from parent to child. For this behaviour of data flow, some unnecessary prop passing can occur.

If there is a nested component structure and the inner most component need some data, which is present on some upper level. Prop is the only way to receive that data.

in a bigger application that can be hanutingly bad. redux basically solve that.

- react also provides hooks like useContext and useReducer for better state management. But Redux is a bit more robust and scalable.

## How Redux Toolkit solves the problem of Prop Drilling --

Redux toolkit(same useContext) says, single source of truth. And to achieve that It creates a container/store outside of the application, and all the data will be available in that store.

Now any componenet at any level can ask for the necessary data.

- RTK Terms to get comfortable with--

1. Store - store is the container, from where you can get the data

2. reducers - reducers are kind of like functions, It contains all related functionalities. And all the data manipulation happens inside the reducer only.

3. useSelector - We need to use this to hook to access data

4. useDispatch - This hook calls the necessary action from the reducer. based on some events like button click, change some action gets dispatched. Now the reducer will do the task based on that action call.

## Slice -

To put it simply, slice can be described as a major feature of an object. For example, You are creating a todo project, which has 3 major features, authentication, handling todo features, merging your todos with google calender.

Now, each of those feature can be termed as one slice.

Now all necessary state values, reducers will get stored/managed inside the respective slice.

To create a slice you take the help of a method called "createSlice".
Which takes an object containing-

1. Slice name
2. initialState values
3. reducers object
