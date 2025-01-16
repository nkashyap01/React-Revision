
import "./App.css";
import FetchData from "./practiceApps/fetchData/FetchData";

import ToDo from "./practiceApps/todo/ToDo";
import React, {Suspense} from 'react'

const LazyLoading = React.lazy(()=>import('./practiceApps/lazyLoading/LazyLoading'))



function App() {
 

  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
       <Suspense fallback={<div>Loading data......</div>}>
        <LazyLoading/>
        </Suspense>
  
      </div>
     
    </>
  );
}

export default App;

