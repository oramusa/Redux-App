import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostFrom";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;