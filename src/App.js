import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import ComponentC from "./components/ComponentC";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import HoverComponent from "./components/HoverComponent";
import HoverComponentTwo from "./components/HoverComponentTwo";
import LifeCycleA from "./components/LifeCycleA";
import RefsDemo from "./components/RefsDemo";
import Table from "./components/Table";
import User from "./components/User";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Divyansh">
        <ComponentC />
      </UserProvider>
      {/* <Counter
        render={(count, incrementCount) => {
          <ClickCounterTwo count={count} incrementCount={incrementCount} />;
        }}
      />
      <Counter
        render={(count, incrementCount) => {
          <HoverComponentTwo count={count} incrementCount={incrementCount} />;
        }}
      /> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverComponentTwo /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Divyansh" : "Guest")} /> */}
      {/* <ClickCounter name="Divyansh" /> */}
      {/* <HoverComponent name="DarkKnight" /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
