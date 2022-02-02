import "./App.css";
import { useState, useEffect } from "react";

import { supabase } from "./client";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithFacebook() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "facebook",
    });
  }
  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  }
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });
  }
  // async function signOut() {
  //   await supabase.auth.signOut();
  //   setUser(null);
  // }
  async function signout() {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    console.log(user);
    return (
      <div className="App">
        <h1>Hello, {user.email}</h1>
        <button onClick={signout}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGoogle}>Sign In with google</button>
      <button onClick={signInWithFacebook}>Sign In with facebook</button>
      <button onClick={signInWithGithub}>Sign In with github</button>
    </div>
  );
}

export default App;
